import { platform } from 'node:os'
import { OSType } from '@/modules/System/Core'

export function getOSType(): OSType {
  const osType = platform()
  if (osType.includes('darwin'))
    return OSType.Mac
  if (osType.includes('win'))
    return OSType.Windows
  if (osType.includes('linux'))
    return OSType.Linux
  return OSType.Unknown
}

/** 操作系统类型(常量) */
export const OS_TYPE = getOSType()
export const isWindows = () => OS_TYPE === OSType.Windows
export const isMac = () => OS_TYPE === OSType.Mac
export const isLinux = () => OS_TYPE === OSType.Linux

export async function exec(command: string) {
  // 避免渲染进程执行命令
  const childProcess = await import('node:child_process')
  return new Promise<string>((resolve, reject) =>
    // chcp 65001: 解决 Windows 下乱码问题
    childProcess.exec(`${isWindows() ? 'chcp 65001&&' : ''}${command}`, (err, stdout) => {
      if (err)
        reject(err)
      else resolve(stdout)
    }),
  )
}
