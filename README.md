# electron-iframe-bug
Repo reproducing issue on electron when `app.commandLine.appendSwitch('disable-site-isolation-trials');` flag is set

Steps:
    *   Run with `npm start`
    *   Go to Sources tab in DevTools
    *   Add multiple iframe using the UI button
    *   Remove all iframe instances with the UI button
    *   Notice the iframes not cleaning up under Sources
    *   In the long run, this creates and OOM exception