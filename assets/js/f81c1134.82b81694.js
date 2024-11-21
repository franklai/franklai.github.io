"use strict";(self.webpackChunkfranks543_website=self.webpackChunkfranks543_website||[]).push([["5524"],{5865:function(n){n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/06/01/wifi-6-devices","metadata":{"permalink":"/blog/2024/06/01/wifi-6-devices","source":"@site/blog/2024-06-01-wifi-6-devices.md","title":"Wi-Fi 6 Devices","description":"- Wi-Fi 6","date":"2024-06-01T00:00:00.000Z","tags":[],"readingTime":0.605,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"\u5C0B\u627E\u6700\u4F73 Ubuntu APT Repository Mirror","permalink":"/blog/2024/05/11/find-best-apt-repository-mirror"}},"content":"- Wi-Fi 6\\r\\n  - Samsung Galaxy S22\\r\\n  - Apple iPhone 14 Pro Max\\r\\n  - Apple iPad Air 5 (2022)\\r\\n  - LG gram Z90Q i5-1240p (2022)\\r\\n  - MacBook Air 13 M3 (2024)\\r\\n  - Apple TV 4K (2022)\\r\\n  - ASUS ROG STRIX B760-A GAMING WIFI D4\\r\\n- Wi-Fi 5\\r\\n  - Apple iPad mini 5 (2019)\\r\\n  - PS4\\r\\n  - Nintendo Switch\\r\\n  - Chromecast with Google TV\\r\\n  - LG OLED evo C2\\r\\n\\r\\n\u76EE\u524D\u624B\u4E0A\u8A2D\u5099\u5927\u6982\u5C31 iPad mini 5 \u9084\u6C92 Wi-Fi 6\\r\\n\\r\\n\u5176\u4ED6\u5C31\u662F\u96FB\u8996\u3001\u4E3B\u6A5F\u76F8\u95DC\uFF0C\u7136\u5F8C\u6700\u8FD1\u90FD\u662F\u7528 Apple TV\uFF0C\u8F03\u5C11\u7528\u96FB\u8996\u672C\u8EAB\u7DB2\u8DEF\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8003\u616E\u500B Wi-Fi 6"},{"id":"/2024/05/11/find-best-apt-repository-mirror","metadata":{"permalink":"/blog/2024/05/11/find-best-apt-repository-mirror","source":"@site/blog/2024-05-11-find-best-apt-repository-mirror.md","title":"\u5C0B\u627E\u6700\u4F73 Ubuntu APT Repository Mirror","description":"Ubuntu 24.04 \u51FA\u4E86\uFF0C\u53C8\u662F\u4F86\u5B89\u88DD WSL \u7684\u6642\u5019(\uFF01\uFF1F)","date":"2024-05-11T00:00:00.000Z","tags":[],"readingTime":0.9,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Wi-Fi 6 Devices","permalink":"/blog/2024/06/01/wifi-6-devices"},"nextItem":{"title":"MacBook Air M3, First Day","permalink":"/blog/2024/05/01/macbook-air-m3-first-day"}},"content":"Ubuntu 24.04 \u51FA\u4E86\uFF0C\u53C8\u662F\u4F86\u5B89\u88DD WSL \u7684\u6642\u5019(\uFF01\uFF1F)\\r\\n\\r\\n- [How To Find Best Ubuntu APT Repository Mirror](https://ostechnix.com/how-to-find-best-ubuntu-apt-repository-mirror/)\\r\\n\\r\\n\u9019\u7BC7\u63D0\u5230\u4E86\u900F\u904E Ubuntu Software & Updates \u7684 GUI \u4ECB\u9762\\r\\n\\r\\n\u4EE5\u53CA apt-select \u548C apt-smart\\r\\n\\r\\n\u9019\u5169\u500B\u6D41\u7A0B\u4E0A\u90FD\u662F\u5148\u88DD pip\\r\\n\\r\\n```\\r\\nsudo apt install python3-pip\\r\\n\\r\\npip3 install apt-select\\r\\n\\r\\npip3 install --user apt-smart\\r\\n```\\r\\n\\r\\n\u4E0D\u904E\u9019\u500B\u5B89\u88DD pip \u5C31\u8981\u52DE\u5E2B\u52D5\u773E\u554A\u2026\u5C31 apt \u5728\u6162\u8981\u63DB\uFF0C\u9084\u5F97\u5148\u6490\u904E\u9019\u4E00\u5806\uFF0C\u6709\u9EDE\u2026\\r\\n\\r\\n![sudo apt install python3-pip](images/2024-05-11-sudo-apt-install-python3-pip.png)\\r\\n\\r\\n\u4F86\u770B\u53E6\u4E00\u7BC7 [How to select the fastest apt mirror on Ubuntu Linux](https://linuxconfig.org/how-to-select-the-fastest-apt-mirror-on-ubuntu-linux)\\r\\n\\r\\nmirror protocol\\r\\n\\r\\nchange `deb http://us.archive.ubuntu.com/ubuntu/ focal main restricted` to `deb mirror://mirrors.ubuntu.com/mirrors.txt focal main restricted`\\r\\n\\r\\n\u6216\u662F\u76F4\u63A5\u554F\\r\\n\\r\\n```\\r\\ncurl mirrors.ubuntu.com/mirrors.txt\\r\\n```\\r\\n\\r\\n\u7136\u5F8C\u525B\u624D\u624D\u767C\u73FE Ubuntu 24.04 \u7684\u8A2D\u5B9A\u6A94\u6539\u7248\u5566\\r\\n\\r\\n\u8B8A\u6210 `/etc/apt/sources.list.d/ubuntu.sources`\\r\\n\\r\\n\u8CBC\u4E00\u4E0B `curl mirrors.ubuntu.com/mirrors.txt` \u7684\u7D50\u679C\\r\\n\\r\\n```\\r\\nhttp://ftp.tku.edu.tw/ubuntu/\\r\\nhttp://mirror01.idc.hinet.net/ubuntu/\\r\\nhttp://ubuntu.cs.nctu.edu.tw/ubuntu/\\r\\nhttp://free.nchc.org.tw/ubuntu/\\r\\nhttps://mirror.twds.com.tw/ubuntu-ports/\\r\\nhttp://mirror.nwlab.tk/ubuntu/\\r\\nhttp://ftp.tw.debian.org/ubuntu/\\r\\nhttps://tw1.mirror.blendbyte.net/ubuntu/\\r\\nhttp://ftp.mirror.tw/pub/ubuntu/ubuntu/\\r\\nhttps://mirror.twds.com.tw/ubuntu/\\r\\nhttps://ftp.ubuntu-tw.net/ubuntu/\\r\\nhttps://ubuntu.ccns.ncku.edu.tw/ubuntu/\\r\\nhttps://mirror.ossplanet.net/ubuntu/\\r\\nhttp://archive.ubuntu.com/ubuntu/\\r\\n```"},{"id":"/2024/05/01/macbook-air-m3-first-day","metadata":{"permalink":"/blog/2024/05/01/macbook-air-m3-first-day","source":"@site/blog/2024-05-01-macbook-air-m3-first-day.md","title":"MacBook Air M3, First Day","description":"PChome \u914D\u9001\u9084\u883B\u5FEB\u7684\uFF0C\u6253\u958B PChome \u7D19\u7BB1\uFF0C\u88E1\u9762\u662F DHL \u7684\u7D19\u7BB1\uFF0C\u518D\u62C6\u958B\u624D\u662F MacBook Air \u7684\u76D2\u5B50","date":"2024-05-01T00:00:00.000Z","tags":[],"readingTime":1.605,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u5C0B\u627E\u6700\u4F73 Ubuntu APT Repository Mirror","permalink":"/blog/2024/05/11/find-best-apt-repository-mirror"},"nextItem":{"title":"2024 \u5E74\uFF0C\u65B0\u96FB\u8166\u914D\u5099","permalink":"/blog/2024/03/30/desktop-pc"}},"content":"PChome \u914D\u9001\u9084\u883B\u5FEB\u7684\uFF0C\u6253\u958B PChome \u7D19\u7BB1\uFF0C\u88E1\u9762\u662F DHL \u7684\u7D19\u7BB1\uFF0C\u518D\u62C6\u958B\u624D\u662F MacBook Air \u7684\u76D2\u5B50\\n\\n\u9996\u5148\u91CD\u91CF\uFF0C\u4E4B\u524D\u7528\u7684\u662F MacBook Pro 2017\uFF0C\u65B0\u7684 Air \u6709\u611F\u53D7\u5230\u8F15\u4E00\u9EDE (1.24 \u516C\u65A4\u8207 1.37 \u516C\u65A4\u7684\u5DEE\u8DDD)\\n\\n\u64CD\u4F5C\u6700\u660E\u986F\u7684\u9375\u76E4\u5DEE\u7570\uFF0C\u65B0\u7684\u771F\u7684\u662F\u597D\u6253\u5F88\u591A\u554A\uFF0C\u7562\u7ADF 2017 MBP \u90A3\u6642\u671F\u662F\u8A55\u50F9\u6700\u4F4E\u7684\u9375\u76E4\u518D\u52A0 Touch Bar\\n\\n\u73FE\u5728\u662F\u5168\u6309\u9375\uFF0CTouch ID \u548C esc \u90FD\u8B8A\u5927\\n\\n\u4E0D\u904E\u89F8\u63A7\u677F\u7684\u56DE\u994B\uFF0C\u8072\u97F3\uFF1F\u548C\u4E4B\u524D\u4E0D\u540C\uFF0C\u9084\u9700\u8981\u6642\u9593\u7FD2\u6163\uFF0C\u4E5F\u6709\u958B\u555F\u8A2D\u5B9A\u7684\u300C\u9EDE\u4E00\u4E0B\u4F86\u9078\u6309\u300D\\n\\n\u5207\u63DB\u8F38\u5165\u6CD5\uFF0C\u5728 2017 \u90A3\u4EE3\uFF0C\u5176\u5BE6\u9810\u8A2D\u5C31\u63DB\u6210 ctrl + space \u4E86\uFF0C\u4F46\u9084\u7DAD\u6301\u5728\u66F4\u65E9\u4E4B\u524D\u7684\u7FD2\u6163\uFF0C\u8981\u7528 cmd + space\uFF0C\u8981\u5230\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u8A2D\u5B9A\u4FEE\u6539\\n\\n\u8A71\u8AAA\u73FE\u5728 fn \u9375\u73FE\u5728\u9084\u6709\u591A\u4E86\u5730\u7403\u7684\u5716\u793A\u8036\\n\\n\u5E38\u7528\u8EDF\u9AD4\u5B89\u88DD\\n\\n\u958B\u767C\u7CFB\\n- VS Code\\n- iTerm2\\n- Xcode\\n- Homebrew\\n- nvm\\n- ag, rg, fd\\n\\nPython \u9810\u8A2D\u662F 3.9.6\uFF0C\u5148\u653E\u8457\\n\\n\u6587\u5B57\u7DE8\u8F2F\u5668\u4E4B\u524D\u90FD\u662F\u7528 BBEdit\uFF0C\u9019\u6B21\u4F86\u8A66\u500B CotEditor\\n\\n\u6709\u9047\u5230\u8EDF\u9AD4\u5B89\u88DD\u6642\uFF0C\u8AAA\u9700\u8981 Rosetta\uFF0C\u55EF\u2026\u5148\u8DF3\u904E XD\uFF0C\u5982\u679C\u90FD\u4E0D\u88DD\u7684\u8A71\uFF0C\u53EF\u4EE5\u6490\u591A\u4E45\u5462\\n\\nmacOS \u7248\u672C\u958B\u7BB1\u662F Sonoma 14.3\uFF0CSafari \u662F 17.3\\n\\n\u96FB\u91CF\u7684\u8A71\uFF0C\u8981\u9577\u6642\u9593\u4F7F\u7528\u624D\u77E5\u9053\u4E86\uFF0C\u9084\u6709\u6EAB\u5EA6"},{"id":"/2024/03/30/desktop-pc","metadata":{"permalink":"/blog/2024/03/30/desktop-pc","source":"@site/blog/2024-03-30-desktop-pc.md","title":"2024 \u5E74\uFF0C\u65B0\u96FB\u8166\u914D\u5099","description":"\u5728\u4E8C\u6708\u7684\u6642\u5019\uFF0C\u7D42\u65BC\u8CB7\u4E86\u65B0 PC\uFF01","date":"2024-03-30T00:00:00.000Z","tags":[],"readingTime":1.975,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"MacBook Air M3, First Day","permalink":"/blog/2024/05/01/macbook-air-m3-first-day"},"nextItem":{"title":"2023 \u5E74\u5E95\uFF0C\u96FB\u8166\u914D\u5099","permalink":"/blog/2023/12/31/desktop-pc"}},"content":"\u5728\u4E8C\u6708\u7684\u6642\u5019\uFF0C\u7D42\u65BC\u8CB7\u4E86\u65B0 PC\uFF01\\n\\n\u505A\u500B\u689D\u5217\u5F0F\u6BD4\u8F03\uFF1F\\n\\n| \u9805\u76EE    | \u820A                                        | \u65B0                                          |\\n| ------- | ----------------------------------------- | ------------------------------------------- |\\n| CPU     | Intel Core i5-6400                        | Intel Core i5-12400                         |\\n| MB      | ASUS B150M-A/M.2                          | ASUS ROG STRIX B760-A GAMING WIFI D4        |\\n| RAM     | Kingston DDR4-2133 16 GB                  | TEAM T-CREATE EXPERT DDR4-3200 32G (16G\\\\*2) |\\n| SSD     | Intel 330, 120 GB                         | KIOXIA Exceria Pro 1TB                      |\\n| SSD     | Plextor M9PeGN 1 TB, M.2 PCIe             | \u6CBF\u7528                                        |\\n| Graphic | Zotac GTX 1650 Super Twin Fan, GDDR6 4 GB | MSI 4060 VENTUS 2X BLACK OC 8G              |\\n| PSU     | Cooler Master New GX 550W                 | SeaSonic Focus GX 650                       |\\n| Case    | Lian Li ?                                 | Fractal Design North Charcoal               |\\n| Monitor | MSI MP243                                 | \u6CBF\u7528                                        |\\n| OS      | Microsoft Windows 10 Professional         | Microsoft Windows 11 Home                   |\\n\\n\u5206\u958B\u5728\u6B23\u4E9E\u548C PChome \u8CB7\\n\\n\u56E0\u70BA\u6B23\u4E9E\u53EF\u4EE5\u7528 LINE pay\uFF0C\u4F46\u6703\u8D85\u904E\u56DE\u994B\u4E0A\u9650\\n\\nPChome \u7528\u62CD\u9322\u5305\uFF0C\u8CB7\u50F9\u5DEE\u4E0D\u5927\u7684\uFF0C\u4F8B\u5982\u4F5C\u696D\u7CFB\u7D71\u3001SSD\u3001PSU\\n\\nWin 11 \u7528\u5230\u76EE\u524D\uFF0C\u6BD4\u60F3\u50CF\u4E2D ok\\n\\n\u4E0D\u904E\u6709\u4E9B\u90FD\u4E0D\u662F\u9810\u8A2D\u503C\uFF0C\u628A\u4ECB\u9762\u8ABF\u6574\u5F97\u6BD4\u8F03\u63A5\u8FD1 Win 10\uFF0C\u4F8B\u5982\u958B\u59CB\u7F6E\u5DE6\u3001\u4E0D\u5408\u4F75\u5DE5\u4F5C\u5217\u6309\u9215\\n\\n\u986F\u5361\u6C92\u6709\u592A\u885D\uFF0C\u4F46\u9084\u662F\u8CB7\u4E86 n \u5BB6\\n\\n\u64DA\u8AAA\u56E0\u70BA SUPER \u7CFB\u5217\u51FA\u4E86\uFF0C\u6703\u6709\u4E00\u6CE2\u964D\u50F9\uFF0C\u4E0D\u904E\u5C31\u662F\u65E9\u8CB7\u65E9\u4EAB\u53D7\u5566\\n\\n\u7136\u5F8C\u63DB\u6A5F\u96D6\u7136\u770B\u4E86\u5F88\u4E45\uFF0C\u4E00\u5927\u885D\u52D5\u662F\u73A9\u5E15\u9B6F\u5076\u723E\u6703\u9813\uFF0C\u4F46\u63DB\u6A5F\u5F8C\u6C92\u958B\u5E7E\u6B21\u5E15\u9B6F\u554AXD\\n\\nFractal Design North Charcoal \u9019\u6A5F\u6BBC\uFF0C\u88DD\u8D77\u4F86\u5176\u5BE6\u89BA\u5F97\u6C92\u6709\u820A\u7684\u806F\u529B\u9806\u624B\u8036\uFF0C\u4E0D\u904E\u73FE\u5728\u53EA\u88DD SSD \u6C92\u786C\u789F\u3001\u5149\u789F\u6A5F\uFF0C\u662F\u4E5F\u4E0D\u6703\u592A\u9EBB\u7169\\n\\n\u6B63\u9762\u6728\u689D\u9084\u662F\u883B\u4E0D\u932F\\n\\n\u767C\u71B1\u8207\u6563\u71B1\uFF0C\u4EE5\u53CA\u98A8\u6247\u8072\u97F3\uFF0C\u5C31\u7B49\u590F\u5929\u5427\uFF0C\u4F46\u590F\u5929\u901A\u5E38\u5C31\u76F4\u63A5\u958B\u51B7\u6C23\u554A"},{"id":"/2023/12/31/desktop-pc","metadata":{"permalink":"/blog/2023/12/31/desktop-pc","source":"@site/blog/2023-12-31-desktop-pc.md","title":"2023 \u5E74\u5E95\uFF0C\u96FB\u8166\u914D\u5099","description":"\u5176\u5BE6\u6C92\u63DB\u6771\u897F\u554A\uFF0C\u53EA\u662F\u4E4B\u524D blogger \u6C92\u4E86\uFF0C\u6539\u5728\u9019\u8A18\u9304\u4E00\u4E0B","date":"2023-12-31T00:00:00.000Z","tags":[],"readingTime":1.38,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"2024 \u5E74\uFF0C\u65B0\u96FB\u8166\u914D\u5099","permalink":"/blog/2024/03/30/desktop-pc"},"nextItem":{"title":"\u96F2\u7AEF\u7A7A\u9593\u50F9\u683C 2023-12","permalink":"/blog/2023/12/08/cloud-space-price"}},"content":"\u5176\u5BE6\u6C92\u63DB\u6771\u897F\u554A\uFF0C\u53EA\u662F\u4E4B\u524D blogger \u6C92\u4E86\uFF0C\u6539\u5728\u9019\u8A18\u9304\u4E00\u4E0B\\n\\n- CPU: Intel Core i5-6400\\n- Mainboard: ASUS B150M-A/M.2\\n- Memory: Kingston DDR4-2133 16 GB\\n- Graphics: Zotac GTX 1650 Super Twin Fan, GDDR6 4 GB\\n- Storage:\\n  - Intel 330, 120 GB\\n  - Plextor M9PeGN 1 TB, M.2 PCIe\\n- Power: Cooler Master New GX 550W\\n- Monitor: MSI MP243\\n- OS: Microsoft Windows 10 Professional\\n\\n\u986F\u5361\u662F 2020 \u5E74\uFF0C\u70BA\u4E86\u73A9\u4E09\u570B\u5FD7 14 \u53BB\u8CB7\u7684\\n\\nPlextor SSD \u662F 2019 \u5E74\u4E2D\\n\\nMSI MP243 \u87A2\u5E55\u662F 2022 \u5E74\u4E2D\u63DB\u7684\uFF0C\u4E0D\u904E\u5176\u5BE6\u5230\u76EE\u524D\u7528\u8D77\u4F86\uFF0C\u6C92\u6709\u5347\u7D1A\u611F\u554A\\n\\n\u5176\u4ED6\u662F 2016 \u5E74\u5E95\u63DB\u7684\\n\\n\u6A5F\u6BBC\u662F\u66F4\u65E9\u7684\u806F\u529B\u6BBC\\n\\n\u9019\u5E7E\u5E74\u89C0\u671B\u63DB\u65B0\u6A5F\uFF0C\u4F46\u6C92\u6709\u5F37\u5927\u7684\u52D5\u529B\uFF0C\u6C92\u73A9\u4EC0\u9EBC\u904A\u6232\u5927\u4F5C\uFF0C\u6216\u662F\u904B\u7B97\u8DD1\u4E0D\u52D5\\n\\n\u5370\u8C61\u4E2D 2016 \u5E74\u5E95\u63DB\u7684\u6642\u5019\uFF0C\u662F\u56E0\u70BA build React Native \u592A\u6162\uFF0C\u4F46\u5230\u73FE\u5728\u5176\u5BE6\u4E5F\u6C92\u6709\u5728\u5BEB React Native...\\n\\n\u6700\u8FD1\u5982\u679C\u8981\u63DB\u7684\u8A71\uFF0C\u7A0D\u5FAE\u6392\u4E86\u4E00\u4E0B\u83DC\u55AE\u6703\u662F\\n\\n- CPU: Intel Core i5-12400\\n- Mainboard: MSI PRO B760M-A WIFI DDR4\\n- Memory: ADATA \u6216 Kingston 16GB DDR4-3200\\n- Graphics: \u5148\u6CBF\u7528\\n- Storage: \u4E09\u9078\u4E00\\n  - Micron Crucial P5 Plus 1TB\\n  - KIOXIA Exceria Pro 1TB\\n  - Solidigm P44 Pro 1TB\\n- Power: EVGA 650 G6\\n\\nOS \u53EA\u80FD\u4E0A Windows 11 \u4E86\u8036"},{"id":"/2023/12/08/cloud-space-price","metadata":{"permalink":"/blog/2023/12/08/cloud-space-price","source":"@site/blog/2023-12-08-cloud-space-price.md","title":"\u96F2\u7AEF\u7A7A\u9593\u50F9\u683C 2023-12","description":"\u8A18\u9304\u4E00\u4E0B\u76EE\u524D\u50F9\u683C","date":"2023-12-08T00:00:00.000Z","tags":[{"inline":true,"label":"JavaScript","permalink":"/blog/tags/java-script"},{"inline":true,"label":"Node.js","permalink":"/blog/tags/node-js"}],"readingTime":1.8,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["JavaScript","Node.js"]},"unlisted":false,"prevItem":{"title":"2023 \u5E74\u5E95\uFF0C\u96FB\u8166\u914D\u5099","permalink":"/blog/2023/12/31/desktop-pc"},"nextItem":{"title":"Docusaurus v3","permalink":"/blog/2023/12/02/docusaurus-v3"}},"content":"\u8A18\u9304\u4E00\u4E0B\u76EE\u524D\u50F9\u683C\\n\\n- [Google One](https://one.google.com/about/plans)\\n- [OneDrive](https://www.microsoft.com/microsoft-365/onedrive/compare-onedrive-plans)\\n- [iCloud+](https://support.apple.com/HT201238)\\n- [Dropbox](https://www.dropbox.com/plans)\\n\\n### Google One\\n\\n\u524D 3 \u500B\u6708\u512A\u60E0\u5C31\u4E0D\u5BEB\u4E86\\n\\nGoogle One \u53EF\u4EE5\u9078\u64C7\u6708\u7E73\u6216\u5E74\u7E73\uFF0C\u4EE5\u4E0B\u50F9\u683C\u662F\u5E74\u7E73\\n\\n|     \u540D\u7A31      |  \u50F9\u683C |   \u5BB9\u91CF |\\n| :-----------: | ----: | -----: |\\n|       -       |  Free |  15 GB |\\n|  \u57FA\u672C Basic   |  $650 | 100 GB |\\n| \u6A19\u6E96 Standard |  $900 | 200 GB |\\n| \u9032\u968E Premium  | $3300 |   2 TB |\\n\\n### OneDrive\\n\\n\u5206\u6210\u57FA\u672C\u7248 (Basic)\u3001\u500B\u4EBA\u7248 (Personal)\u3001\u5BB6\u7528\u7248 (Family)\\n\\n\u5176\u4E2D\u500B\u4EBA\u7248\u8207\u5BB6\u7528\u7248\u5305\u542B Office (Word, Excel, PowerPoint, ...)\uFF0C\u50F9\u683C\u9AD8\u51FA\u4E0D\u5C11\\n\\n|     \u540D\u7A31      |  \u50F9\u683C |      \u5BB9\u91CF |\\n| :-----------: | ----: | --------: |\\n|       -       |  Free |      5 GB |\\n|  \u57FA\u672C Basic   |  $600 |    100 GB |\\n| \u500B\u4EBA Personal | $2190 |      1 TB |\\n|  \u5BB6\u7528 Family  | $3190 | 1 TB \u516D\u4EBA |\\n\\n### iCloud+\\n\\niCloud+ \u662F\u6708\u7E73\u8A02\u95B1\uFF0C\u4EE5\u4E0B\u7528\u4E58\u65BC 12 \u7684\u50F9\u683C\\n\\n|   \u50F9\u683C |   \u5BB9\u91CF |\\n| -----: | -----: |\\n|   Free |   5 GB |\\n|   $360 |  50 GB |\\n|  $1080 | 200 GB |\\n|  $3600 |   2 TB |\\n| $10800 |   6 TB |\\n| $21480 |  12 TB |\\n\\n### Dropbox\\n\\n\u53EA\u6709\u7F8E\u91D1\u50F9\u683C\\n\\n|     \u540D\u7A31      |         \u50F9\u683C |  \u5BB9\u91CF |\\n| :-----------: | -----------: | ----: |\\n|     Basic     |         Free |  2 GB |\\n|     Plus      | \u6BCF\u6708 US$9.99 |  2 TB |\\n|  Essentials   |   \u6BCF\u6708 US$18 |  3 TB |\\n|   Business    |   \u6BCF\u6708 US$20 |  9 TB |\\n| Business Plus |   \u6BCF\u6708 US$26 | 15 TB |\\n\\n### \u5FC3\u5F97\\n\\n\u5176\u5BE6\u5404\u5BB6\u63D0\u4F9B\u7684\u65B9\u6848\u4E0D\u592A\u76F8\u540C\uFF0C\u883B\u96E3\u55AE\u7D14\u7528\u50F9\u683C\u3001\u5BB9\u91CF\u6BD4\u8F03\\n\\nGoogle One \u7684\u5BB9\u91CF\u662F\u548C\u6700\u591A 5 \u4F4D\u4F7F\u7528\u8005\u5171\u7528\\n\\nOneDrive \u5BB6\u7528\u4ECD\u662F\u6BCF\u4EBA\u6700\u591A 1 TB\uFF0C\u548C\u500B\u4EBA\u76F8\u540C\u4E0A\u9650\\n\\nDropbox \u7684 Business \u662F\u5BEB\u548C\u5DE5\u4F5C\u5718\u968A\u5171\u4EAB\u7A7A\u9593"},{"id":"/2023/12/02/docusaurus-v3","metadata":{"permalink":"/blog/2023/12/02/docusaurus-v3","source":"@site/blog/2023-12-02-docusaurus-v3.md","title":"Docusaurus v3","description":"\u5728 2023 \u5E74 10 \u6708\u5E95\u767C\u8868","date":"2023-12-02T00:00:00.000Z","tags":[{"inline":true,"label":"JavaScript","permalink":"/blog/tags/java-script"},{"inline":true,"label":"Node.js","permalink":"/blog/tags/node-js"}],"readingTime":0.33,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["JavaScript","Node.js"]},"unlisted":false,"prevItem":{"title":"\u96F2\u7AEF\u7A7A\u9593\u50F9\u683C 2023-12","permalink":"/blog/2023/12/08/cloud-space-price"},"nextItem":{"title":"markdown \u60F3\u8981 br \u63DB\u884C\u6548\u679C","permalink":"/blog/2022/01/23/markdown-br-linebreak"}},"content":"\u5728 2023 \u5E74 10 \u6708\u5E95\u767C\u8868\\n\\nhttps://docusaurus.io/blog/releases/3.0\\n\\n\u525B\u624D\u628A\u7DB2\u7AD9\u5347\u7D1A\u4E00\u4E0B\uFF0C\u99AC\u4E0A\u5C31\u9047\u5230 search \u4E5F\u9700\u8981\u5347\u7D1A\uFF0C\u7136\u5F8C config \u8981\u8ABF\u6574\\n\\n\u539F\u4F86\u5F9E plugins \u642C\u5230 themes \u8D85\u904E\u4E00\u5E74\u4E86\u554A\u2026\\n\\n\u7136\u5F8C\u641E\u7B11\u5730\u5347\u7D1A `prism-react-renderer` \u5F8C\uFF0C\u6C92\u6709\u6E2C\u8A66\uFF0Cconfig \u53C8\u70B8\u2026"},{"id":"/2022/01/23/markdown-br-linebreak","metadata":{"permalink":"/blog/2022/01/23/markdown-br-linebreak","source":"@site/blog/2022-01-23-markdown-br-linebreak.md","title":"markdown \u60F3\u8981 br \u63DB\u884C\u6548\u679C","description":"\u4ECA\u5929\u624D\u77E5\u9053\u2026","date":"2022-01-23T00:00:00.000Z","tags":[{"inline":true,"label":"Markdown","permalink":"/blog/tags/markdown"}],"readingTime":0.185,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["Markdown"]},"unlisted":false,"prevItem":{"title":"Docusaurus v3","permalink":"/blog/2023/12/02/docusaurus-v3"},"nextItem":{"title":"\u7528 Docusaurus \u5BEB blog","permalink":"/blog/2022/01/23/using-docusaurus-for-blog"}},"content":"\u4ECA\u5929\u624D\u77E5\u9053\u2026\\n\\nhttps://stackoverflow.com/a/33191810  \\nHow to add new line in Markdown presentation?\\n\\n\u5728\u8A72\u884C\u7684\u7D50\u5C3E\uFF0C\u52A0\u4E0A **2\u500B** \u4EE5\u4E0A\u7684\u7A7A\u767D\uFF0C\u5C31\u6703\u6709 `<br>` \u6548\u679C\u5566"},{"id":"/2022/01/23/using-docusaurus-for-blog","metadata":{"permalink":"/blog/2022/01/23/using-docusaurus-for-blog","source":"@site/blog/2022-01-23-using-docusaurus-for-blog.md","title":"\u7528 Docusaurus \u5BEB blog","description":"\u7D42\u65BC\u4F86\u5617\u8A66\u4E00\u4E0B","date":"2022-01-23T00:00:00.000Z","tags":[],"readingTime":0.695,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"markdown \u60F3\u8981 br \u63DB\u884C\u6548\u679C","permalink":"/blog/2022/01/23/markdown-br-linebreak"},"nextItem":{"title":"Parvel v2","permalink":"/blog/2022/01/22/parcel-v2"}},"content":"\u7D42\u65BC\u4F86\u5617\u8A66\u4E00\u4E0B\\n\\n\u67B6\u5230 GitHub Pages \u4E0A\\n\\n\u8CBC\u6B4C\u8A5E\uFF0C\u53EF\u4EE5 embed YouTube video\\n\\n\u6B4C\u8A5E\u770B\u8D77\u4F86\u7528 code block \u6BD4\u8F03\u65B9\u4FBF\uFF0C\u9084\u53EF\u4EE5 copy to clipboard\uFF0C\u4E0D\u904E\u5C31\u662F\u6703\u8B8A\u9ED1\u5E95\u5566\\n\\n\u7136\u5F8C\u624D\u5B78\u5230\u5982\u4F55\u53EF\u4EE5 br \u63DB\u884C\u6548\u679C\u2026\\n\\nh1 \u76EE\u524D\u6A19\u984C\u611F\u89BA\u5B57\u6709\u9EDE\u5927\uFF0C\u4E0D\u904E\u5148\u8A66\u770B\u770B\u5427\\n\\n\u90A3\u2026\u9019\u6A23 Blogger \u5C31\u5148\u505C\u55CE\uFF1F\\n\\n\u628A\u4E00\u4E9B\u820A\u6587\u90FD\u642C\u904E\u4F86\\n\\n\u662F\u8AAA\u65E5\u671F\u662F\u5F9E\u6A94\u540D\u4F86\u7684\uFF0C\u4F46\u540C\u4E00\u5929\u6709\u591A\u7BC7\u6587\u7AE0\u7684\u8A71\uFF0C\u6392\u5E8F\u662F\uFF1F\u770B\u8D77\u4F86\u53EF\u80FD\u662F alphabet\\n\\n\u7136\u5F8C\u9019\u7BC7\u662F\u7528 GitHub editor \u6253\u7684"},{"id":"/2022/01/22/parcel-v2","metadata":{"permalink":"/blog/2022/01/22/parcel-v2","source":"@site/blog/2022-01-22-parcel-v2.md","title":"Parvel v2","description":"\u7576\u521D\u597D\u50CF\u6709\u7528 Parcel v1 \u5BEB\u904E\u5C0F project","date":"2022-01-22T00:00:00.000Z","tags":[{"inline":true,"label":"JavaScript","permalink":"/blog/tags/java-script"},{"inline":true,"label":"Node.js","permalink":"/blog/tags/node-js"}],"readingTime":0.37,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["JavaScript","Node.js"]},"unlisted":false,"prevItem":{"title":"\u7528 Docusaurus \u5BEB blog","permalink":"/blog/2022/01/23/using-docusaurus-for-blog"},"nextItem":{"title":"sshfs on Win 10","permalink":"/blog/2022/01/22/sshfs-on-win10"}},"content":"\u7576\u521D\u597D\u50CF\u6709\u7528 Parcel v1 \u5BEB\u904E\u5C0F project\\n\\n\u4E0D\u904E\u5C31\u662F\u5E0C\u671B zero configuration\uFF0C\u4E5F\u6C92\u6709\u5617\u8A66\u52A0 plugin\\n\\n\u770B\u5230 2021 \u5E74 10 \u6708\u51FA v2\\n\\n[Announcing Parcel v2!](https://parceljs.org/blog/v2/)\\n\\nincluding a new JavaScript compiler written in Rust\\n\\n\u9019\u5E74\u982D\u90FD\u8981\u7528\u5176\u4ED6\u8A9E\u8A00\u6539\u5BEB\u554A\u2026\u9664\u4E86 esbuild \u7684 GO\uFF0CRust \u4E5F\u662F\u500B\u8FD1\u671F\u71B1\u9580\u9078\u64C7"},{"id":"/2022/01/22/sshfs-on-win10","metadata":{"permalink":"/blog/2022/01/22/sshfs-on-win10","source":"@site/blog/2022-01-22-sshfs-on-win10.md","title":"sshfs on Win 10","description":"\u53C8\u5F97\u9060\u7AEF\u5566","date":"2022-01-22T00:00:00.000Z","tags":[{"inline":true,"label":"Win10","permalink":"/blog/tags/win-10"}],"readingTime":0.435,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["Win10"]},"unlisted":false,"prevItem":{"title":"Parvel v2","permalink":"/blog/2022/01/22/parcel-v2"},"nextItem":{"title":"Media Player Classic - Home Cinema 1.9.18","permalink":"/blog/2022/01/13/mpc-hc"}},"content":"\u53C8\u5F97\u9060\u7AEF\u5566\\n\\n\u9019\u6B21\u5617\u8A66\u7528\u4EE5\u4E0B\u7D44\u5408\\n\\n- SSHFS-Win\\n  - https://github.com/billziss-gh/sshfs-win\\n- WinFsp\\n  - https://github.com/billziss-gh/winfsp\\n- SSHFS-Win Manager\\n  - https://github.com/evsar3/sshfs-win-manager\\n\\n\u7528 SSHFS-Win Manager\uFF0C\u6709\u500B GUI \u53EF\u4EE5\u8A2D\u5B9A\u4E5F\u662F\u883B\u65B9\u4FBF\u7684\\n\\n\u81EA\u5DF1\u7528\u9023\u7DDA\u7DB2\u8DEF\u78C1\u789F\u6A5F\uFF0C\u5C31\u6709\u9047\u5230\u8DEF\u5F91\u5BEB\u6CD5\u554F\u984C\\n\\n\u4E00\u822C\u662F\u5BEB `\\\\\\\\sshfs\\\\[LOCUSER=]REMUSER@HOST[!PORT][\\\\PATH]`\\n\\n\u8DEF\u5F91\u662F\u76F8\u5C0D\u65BC home path\\n\\n\u8981\u5F9E\u6839\u76EE\u9304\u958B\u59CB\u7684\u8A71\uFF0C\u8981\u7528 sshfs.r"},{"id":"/2022/01/13/mpc-hc","metadata":{"permalink":"/blog/2022/01/13/mpc-hc","source":"@site/blog/2022-01-13-mpc-hc.md","title":"Media Player Classic - Home Cinema 1.9.18","description":"\u539F\u4F86 mpc-hc \u5F8C\u4F86\u6709 fork \u554A\u2026","date":"2022-01-13T00:00:00.000Z","tags":[],"readingTime":0.365,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"sshfs on Win 10","permalink":"/blog/2022/01/22/sshfs-on-win10"}},"content":"\u539F\u4F86 mpc-hc \u5F8C\u4F86\u6709 fork \u554A\u2026\\n\\nhttps://github.com/clsid2/mpc-hc\\n\\n\u6839\u64DA wikipedia \u5BEB\u7684  \\nhttps://en.wikipedia.org/wiki/Media_Player_Classic\\n\\n\u6700\u65E9\u7684 Media Player Classic \u505C\u5728 6.4.9.1\uFF0C\u662F 2010 \u5E74\\n\\n\u5F8C\u4F86 fork \u4E86 MPC-HC\uFF0C\u6700\u5F8C\u7248\u672C\u662F 1.7.13\uFF0C\u662F 2017 \u5E74\\n\\n\u5F8C\u4F86 2018 \u5E74 fork \u51FA\u53BB\uFF0C\u5F9E 1.7.14 \u9678\u7E8C\u66F4\u65B0\uFF0C\u73FE\u5728\u6700\u65B0\u5230 1.9.18\\n\\n\u53E6\u4E00\u500B MPC-BE \u4E5F\u9084\u6709\u66F4\u65B0\uFF0C\u662F\u5728 sourceforge"}]}}')}}]);