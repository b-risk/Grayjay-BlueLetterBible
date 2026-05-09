### <a name="notice"></a>Notice
> This plugin currently requires `allowAllHttpHeaderAccess` to read the `Set-Cookie` response headers. It may be possible to work around this requirement in the future, any help is appreciated.

### Grayjay Blue Letter Bible
This plugin adds support for audio narrations on the platform Blue Letter Bible, allowing you to use it in Grayjay.

### Installation
You can install the plugin by scanning this QR code:  
![QR Code](https://raw.githubusercontent.com/b-risk/Grayjay-BlueLetterBible/refs/heads/main/qr-code.png)

Alternatively, you can add it manually by using this link:
```
grayjay://plugin/https://raw.githubusercontent.com/b-risk/Grayjay-BlueLetterBible/refs/heads/main/BlueLetterBibleConfig.json
```

### Features
- [x] Chapters as individual videos
- [x] Next chapters as video recommendations
- [x] Translations (and narrative type) as individual channels
- [x] Video searches
- [x] Books as individual channel Playlists
- [x] Homepage results (randomized)
- [ ] Sign plugin
- [ ] Remove allowAllHttpHeaderAccess requirement, [see notice](#notice)


### Contributions
Contributions are welcome, feel free to submit pull requests if you think you can improve something or fix a bug.

### Signing
```bash
# Generate keypair
ssh-keygen -t rsa -b 2048 -m PEM -f ./private-key.pem

# Encode it in Base64 and set the environment variable
export SIGNING_PRIVATE_KEY="$(base64 -w 0 ./private-key.pem)"

# Run the sign script:
sh ./sign-script.sh "{SCRIPT_FILE_PATH}" "{CONFIG_FILE_PATH}"
```

### Transparency
This was coded in part with the use of OpenCode.