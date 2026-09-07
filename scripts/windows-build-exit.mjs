// Let HTTP sockets close before Vinext's explicit exit on Windows/Node 24.
// Upstream Node issue: https://github.com/nodejs/node/issues/56645
if (process.platform === 'win32') {
  const exit = process.exit.bind(process);
  let pending;
  process.exit = (code = process.exitCode ?? 0) => {
    process.exitCode = code;
    clearTimeout(pending);
    pending = setTimeout(() => exit(process.exitCode), 500);
  };
}
