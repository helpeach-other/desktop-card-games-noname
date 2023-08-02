export enum IPCEvent {
  Exec = 'Exec',
  ExecError = 'ExecError',
  ExecReply = 'ExecReply',

  ElectronScreenProxy = 'ElectronScreenProxy',
  ElectronScreenProxyThrowError = 'ElectronScreenProxyThrowError',
  ElectronScreenProxyResponse = 'ElectronScreenProxyResponse',
}

export enum OSType {
  Windows = 'Windows',
  Mac = 'Mac',
  Linux = 'Linux',
  Unknown = 'Unknown',
}
