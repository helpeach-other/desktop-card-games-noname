import type { BrowserWindow, Screen } from 'electron'
import { exec } from './os'
import { IPCEvent } from '@/modules/System/Core'

export async function ipcRegister(win: BrowserWindow) {
  const { ipcMain, screen } = await import('electron')
  // Register exec command
  ipcMain.on(IPCEvent.Exec, async (_event, command: string) => {
    try {
      const stdout = await exec(command)
      win.webContents.send(IPCEvent.ExecReply, stdout.toString())
    }
    catch (error) {
      console.error(error)
      win.webContents.send(IPCEvent.ExecError, error)
    }
  })

  // Register electron screen proxy
  // see https://www.electronjs.org/docs/api/screen
  ipcMain.on(IPCEvent.ElectronScreenProxy, async (_event, method: keyof Screen, ...args: any[]) => {
    try {
      const screenMethod = screen[method]
      const result = await (screenMethod as Function)(...args)
      win.webContents.send(IPCEvent.ElectronScreenProxyResponse, JSON.stringify(result))
    }
    catch (error) {
      console.error(error)
      win.webContents.send(IPCEvent.ElectronScreenProxyThrowError, error)
    }
  })
}

export async function ipcExec(command: string) {
  const { ipcRenderer } = await import('electron')
  return new Promise<string>((resolve, reject) => {
    ipcRenderer.send(IPCEvent.Exec, command)
    ipcRenderer.on(IPCEvent.ExecReply, (_event, stdout: string) =>
      resolve(stdout.replace('Active code page: 65001', '').trim()),
    )
    ipcRenderer.on(IPCEvent.ExecError, (_event, error) => reject(error))
  })
}

export async function ipcElectronScreenProxy<K extends keyof Screen>(method: K, ...args: Parameters<Screen[K]>) {
  const { ipcRenderer } = await import('electron')
  return new Promise<ReturnType<Screen[K]>>((resolve, reject) => {
    ipcRenderer.send(IPCEvent.ElectronScreenProxy, method, ...args)
    ipcRenderer.on(IPCEvent.ElectronScreenProxyResponse, (_event, data: string) => resolve(JSON.parse(data)))
    ipcRenderer.on(IPCEvent.ElectronScreenProxyThrowError, (_event, error) => reject(error))
  })
}
