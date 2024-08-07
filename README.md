# HOW TO

1. run:

```
npm i
node server.js
```

2. install assets/bahnschrift.ttf

3. open control-panel.html in a browser that isn't IE or Lynx

4. pass match-overlay.html to OBS browser source as local file, width=1920 height=1080

5. select a game in control-panel.html and hit UPDATE OVERLAY!

# FAQ

**Q: match-overlay.html isn't displaying anything, it's just empty**

A: you need to set a game in control-panel.html. the default setting is overlay hidden.

**Q: i'm editing fields in control-panel.html but the overlay stays the same.**

A: you have to hit the UPDATE OVERLAY! button to save changes and update the overlay.

**Q: i'm hitting UPDATE OVERLAY but the overlay won't change anyway.**

A: make sure `node server.js` is running. 

**Q: why do some field names have a pink background in control-panel.html?**

A: pink background means edited but unsaved

# TODO

- [ ] bug: font-stretch doesn't work in OBS when using font-face
- [ ] feat: animate updates
- [ ] feat: cycling multiple logos
- [ ] feat: error states
