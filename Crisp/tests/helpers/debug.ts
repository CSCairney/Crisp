export function debugJSON(input: unknown): void {
    console.warn(JSON.stringify(input, null, 2));
  }
  
  const originalConsole = { ...console };
  
  // Use this to clean up the test output from error messages.
  // Only use it to muffle _expected_ errors, since unexpected ones need investigating
  export function muteConsole(...keys: (keyof Console)[]) {
    // @ts-expect-error - fixme doesnt like console????
    // eslint-disable-next-line no-console,no-return-assign
    keys.forEach((key) => (console[key] = vi.fn()));
  }
  
  export function unmuteConsole() {
    // eslint-disable-next-line no-global-assign
    console = originalConsole;
  }
  