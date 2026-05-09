const platform = {
    title: 'Blue Letter Bible',
    regular_url: 'https://www.blueletterbible.org',
    url: 'https://www.blueletterbible.org/',
    icon: 'https://raw.githubusercontent.com/b-risk/Grayjay-BlueLetterBible/refs/heads/main/Imgs/BlueLetterBibleIcon.png',
    banner: 'https://www.blueletterbible.org/assets/images/bible_images/audio_Bible.jpg',
    description: 'Listen to narrations of different Bible translations on Blue Letter Bible.'
};

const translations = [
    { id: 'kjv_n', name: 'KJV (Narrated)', language: 'English' },
    { id: 'nkjv_d', name: 'NKJV (Dramatized)', language: 'English' },
    { id: 'nkjv_n', name: 'NKJV (Narrated)', language: 'English' },
    { id: 'nlt_d', name: 'NLT (Dramatized)', language: 'English' },
    { id: 'niv_n', name: 'NIV (Narrated)', language: 'English' },
    { id: 'esv_n', name: 'ESV (Narrated)', language: 'English' },
    { id: 'nasb_n', name: 'NASB95 (Narrated)', language: 'English' },
    { id: 'nav_n', name: 'NAV (Arabic)', language: 'Arabic' },
    { id: 'rvr60_n', name: 'RVR60 (Español)', language: 'Spanish' }
];

const books = [
    { num: 1, name: 'Genesis', chapters: 50 },
    { num: 2, name: 'Exodus', chapters: 40 },
    { num: 3, name: 'Leviticus', chapters: 27 },
    { num: 4, name: 'Numbers', chapters: 36 },
    { num: 5, name: 'Deuteronomy', chapters: 34 },
    { num: 6, name: 'Joshua', chapters: 24 },
    { num: 7, name: 'Judges', chapters: 21 },
    { num: 8, name: 'Ruth', chapters: 4 },
    { num: 9, name: '1 Samuel', chapters: 31 },
    { num: 10, name: '2 Samuel', chapters: 24 },
    { num: 11, name: '1 Kings', chapters: 22 },
    { num: 12, name: '2 Kings', chapters: 25 },
    { num: 13, name: '1 Chronicles', chapters: 29 },
    { num: 14, name: '2 Chronicles', chapters: 36 },
    { num: 15, name: 'Ezra', chapters: 10 },
    { num: 16, name: 'Nehemiah', chapters: 13 },
    { num: 17, name: 'Esther', chapters: 10 },
    { num: 18, name: 'Job', chapters: 42 },
    { num: 19, name: 'Psalms', chapters: 150 },
    { num: 20, name: 'Proverbs', chapters: 31 },
    { num: 21, name: 'Ecclesiastes', chapters: 12 },
    { num: 22, name: 'Song of Songs', chapters: 8 },
    { num: 23, name: 'Isaiah', chapters: 66 },
    { num: 24, name: 'Jeremiah', chapters: 52 },
    { num: 25, name: 'Lamentations', chapters: 5 },
    { num: 26, name: 'Ezekiel', chapters: 48 },
    { num: 27, name: 'Daniel', chapters: 12 },
    { num: 28, name: 'Hosea', chapters: 14 },
    { num: 29, name: 'Joel', chapters: 3 },
    { num: 30, name: 'Amos', chapters: 9 },
    { num: 31, name: 'Obadiah', chapters: 1 },
    { num: 32, name: 'Jonah', chapters: 4 },
    { num: 33, name: 'Micah', chapters: 7 },
    { num: 34, name: 'Nahum', chapters: 3 },
    { num: 35, name: 'Habakkuk', chapters: 3 },
    { num: 36, name: 'Zephaniah', chapters: 3 },
    { num: 37, name: 'Haggai', chapters: 2 },
    { num: 38, name: 'Zechariah', chapters: 14 },
    { num: 39, name: 'Malachi', chapters: 4 },
    { num: 40, name: 'Matthew', chapters: 28 },
    { num: 41, name: 'Mark', chapters: 16 },
    { num: 42, name: 'Luke', chapters: 24 },
    { num: 43, name: 'John', chapters: 21 },
    { num: 44, name: 'Acts', chapters: 28 },
    { num: 45, name: 'Romans', chapters: 16 },
    { num: 46, name: '1 Corinthians', chapters: 16 },
    { num: 47, name: '2 Corinthians', chapters: 13 },
    { num: 48, name: 'Galatians', chapters: 6 },
    { num: 49, name: 'Ephesians', chapters: 6 },
    { num: 50, name: 'Philippians', chapters: 4 },
    { num: 51, name: 'Colossians', chapters: 4 },
    { num: 52, name: '1 Thessalonians', chapters: 5 },
    { num: 53, name: '2 Thessalonians', chapters: 3 },
    { num: 54, name: '1 Timothy', chapters: 6 },
    { num: 55, name: '2 Timothy', chapters: 4 },
    { num: 56, name: 'Titus', chapters: 3 },
    { num: 57, name: 'Philemon', chapters: 1 },
    { num: 58, name: 'Hebrews', chapters: 13 },
    { num: 59, name: 'James', chapters: 5 },
    { num: 60, name: '1 Peter', chapters: 5 },
    { num: 61, name: '2 Peter', chapters: 3 },
    { num: 62, name: '1 John', chapters: 5 },
    { num: 63, name: '2 John', chapters: 1 },
    { num: 64, name: '3 John', chapters: 1 },
    { num: 65, name: 'Jude', chapters: 1 },
    { num: 66, name: 'Revelation', chapters: 22 }
];

// Regex patterns for parsing HTML meta tags
var OG_TITLE_REGEX = /<meta\s+property="og:title"\s+content="([^"]+)"/;
var OG_DESCRIPTION_REGEX = /<meta\s+property="og:description"\s+content="([^"]+)"/;
var OG_IMAGE_REGEX = /<meta\s+property="og:image"\s+content="([^"]+)"/;

// Regex patterns for parsing ColdFusion session cookies from Set-Cookie headers
var CFID_DIRECT_REGEX = /(?:^|,\s*)CFID=([^;,]+)/;
var CFTOKEN_DIRECT_REGEX = /(?:^|,\s*)CFTOKEN=([^;,]+)/;
var CFGLOBALS_REGEX = /(?:^|,\s*)CFGLOBALS=([^;,]+)/;

// Regex patterns for extracting CFID/CFTOKEN from within the URL-encoded CFGLOBALS value
var CFID_IN_CFGLOBALS = /(?:CFID%23%3D|cfid%3D)(\d+)/;
var CFTOKEN_IN_CFGLOBALS = /(?:CFTOKEN%23%3D|cftoken%3D)([a-fA-F0-9%\-]+)/;

var config = {};
var settings = {};

source.enable = function (conf, _settings) {
    config = conf;
    settings = _settings;
}

// Home: lists all Bible translations as channels
source.getHome = function () {
    var channels = translations.map(function (t) {
        return new PlatformChannel({
            id: getPlatformIDForTranslation(t.id, t.name),
            name: 'Blue Letter Bible ' + t.name,
            thumbnail: platform.icon,
            banner: platform.banner,
            subscribers: null,
            description: t.name + ' - ' + t.language,
            url: platform.regular_url + '/audio_video/popPlayer.cfm?type=' + t.id,
            links: {}
        });
    });
    return new ChannelPager(channels, false);
}

source.searchSuggestions = function (query) {
    return [];
}

source.getSearchCapabilities = function () {
    return {
        types: [Type.Feed.Mixed],
        sorts: [Type.Order.Chronological],
        filters: []
    };
}

source.search = function (query, type, order, filters, continuationToken) {
    var parsed = parseSearchQuery(query);
    var lower = query.toLowerCase();

    if (parsed && parsed.book) {
        var transId = parsed.transId || translations[0].id;
        return getAllChaptersPager(transId, continuationToken, query);
    }

    if (parsed && parsed.transId) {
        var trans = getTranslation(parsed.transId);
        var channel = new PlatformChannel({
            id: getPlatformIDForTranslation(trans.id, trans.name),
            name: 'Blue Letter Bible ' + trans.name,
            thumbnail: platform.icon,
            banner: platform.banner,
            subscribers: null,
            description: trans.name + ' - ' + trans.language,
            url: platform.regular_url + '/audio_video/popPlayer.cfm?type=' + trans.id,
            links: {}
        });
        return new ChannelPager([channel], false);
    }

    var showAll = lower.indexOf('blue letter bible') !== -1;
    var results = translations
        .filter(function (t) {
            return showAll || t.name.toLowerCase().indexOf(lower) !== -1;
        })
        .map(function (t) {
            return new PlatformChannel({
                id: getPlatformIDForTranslation(t.id, t.name),
                name: 'Blue Letter Bible ' + t.name,
                thumbnail: platform.icon,
                banner: platform.banner,
                subscribers: null,
                description: t.name + ' - ' + t.language,
                url: platform.regular_url + '/audio_video/popPlayer.cfm?type=' + t.id,
                links: {}
            });
        });
    return new ChannelPager(results, false);
}

source.getSearchChannelContentsCapabilities = function () {
    return {
        types: [Type.Feed.Mixed],
        sorts: [Type.Order.Chronological],
        filters: []
    };
}

source.searchChannelContents = function (url, query, type, order, filters, continuationToken) {
    var transId = extractTranslationFromUrl(url);
    if (!transId) return new VideoPager([], false);
    return getAllChaptersPager(transId, continuationToken, query);
}

source.searchChannels = function (query) {
    var lower = query.toLowerCase();
    var showAll = lower.indexOf('blue letter bible') !== -1;
    var results = translations
        .filter(function (t) {
            return showAll || t.name.toLowerCase().indexOf(lower) !== -1;
        })
        .map(function (t) {
            return new PlatformChannel({
                id: getPlatformIDForTranslation(t.id, t.name),
                name: 'Blue Letter Bible ' + t.name,
                thumbnail: platform.icon,
                banner: platform.banner,
                subscribers: null,
                description: t.name + ' - ' + t.language,
                url: platform.regular_url + '/audio_video/popPlayer.cfm?type=' + t.id,
                links: {}
            });
        });
    return new ChannelPager(results, false);
}

// Checks if a URL points to a channel (translation list, not a specific chapter)
source.isChannelUrl = function (url) {
    try {
        var u = new URL(url);
        return u.hostname === 'www.blueletterbible.org' &&
            u.pathname.indexOf('popPlayer.cfm') !== -1 &&
            !!u.searchParams.get('type') &&
            !u.searchParams.get('b');
    } catch {
        return false;
    }
}

// Returns channel metadata for a translation
source.getChannel = function (url) {
    var transId = extractTranslationFromUrl(url);
    var trans = getTranslation(transId);
    if (!trans) return null;
    return new PlatformChannel({
        id: getPlatformIDForTranslation(trans.id, trans.name),
        name: 'Blue Letter Bible ' + trans.name,
        thumbnail: platform.icon,
        banner: platform.banner,
        subscribers: null,
        description: trans.name + ' - ' + trans.language,
        url: url,
        links: {}
    });
}

source.getChannelContents = function (url, type, order, filters, continuationToken) {
    var transId = extractTranslationFromUrl(url);
    if (!transId) return new VideoPager([], false);
    return getAllChaptersPager(transId, continuationToken);
}

// Checks if a URL points to a specific chapter (has b=book&c=chapter params)
source.isContentDetailsUrl = function (stringUrl) {
    try {
        var url = new URL(stringUrl);
        var b = url.searchParams.get('b');
        var c = url.searchParams.get('c');
        return url.hostname === 'www.blueletterbible.org' &&
            url.pathname.indexOf('popPlayer.cfm') !== -1 &&
            !!url.searchParams.get('type') &&
            !!b && !!c;
    } catch {
        return false;
    }
}

// Extracts a cookie value by name from a Combine Set-Cookie header string
function extractCookie(headers, name) {
    if (!headers) return null;
    var raw = headers['Set-Cookie'] || headers['set-cookie'] || null;
    if (!raw) return null;
    if (Array.isArray(raw)) raw = raw.join(',');
    var pattern = new RegExp('(?:^|,\\s*)' + name + '=([^;,]+)');
    var match = raw.match(pattern);
    return match ? match[1] : null;
}

// Extracts CFID and CFTOKEN session identifiers from response headers.
// The server may set these as direct cookies, or embed them inside the
// URL-encoded CFGLOBALS cookie. This function tries direct cookies first,
// then falls back to parsing the CFGLOBALS value.
function extractCFIDCFTOKEN(headers) {
    if (!headers) return { cfid: null, cftoken: null };
    var raw = headers['Set-Cookie'] || headers['set-cookie'] || null;
    if (!raw) return { cfid: null, cftoken: null };
    if (Array.isArray(raw)) raw = raw.join(',');

    var cfid = null, cftoken = null;

    // Try direct CFID and CFTOKEN cookies
    var cfidMatch = raw.match(CFID_DIRECT_REGEX);
    if (cfidMatch) cfid = cfidMatch[1];
    var cftokenMatch = raw.match(CFTOKEN_DIRECT_REGEX);
    if (cftokenMatch) cftoken = cftokenMatch[1];

    if (cfid && cftoken) return { cfid: cfid, cftoken: cftoken };

    // Fallback: parse CFGLOBALS cookie which contains URL-encoded session data
    var cfgMatch = raw.match(CFGLOBALS_REGEX);
    if (cfgMatch) {
        var enc = cfgMatch[1];
        var cfidG = enc.match(CFID_IN_CFGLOBALS);
        var cftokenG = enc.match(CFTOKEN_IN_CFGLOBALS);
        if (cfidG && !cfid) cfid = cfidG[1];
        if (cftokenG && !cftoken) cftoken = cftokenG[1].replace(/%2D/g, '-');
    }

    return { cfid: cfid, cftoken: cftoken };
}

// Fetches audio details for a specific chapter.
// BLB uses ColdFusion session cookies (CFID/CFTOKEN) tied to chapter metadata.
// The popPlayer page primes the server session with chapter info from its URL params.
// We extract CFID/CFTOKEN from response headers and append them as URL parameters
// on the stream URL, because Grayjay's media player doesn't share the script's
// HTTP client cookie jar.
source.getContentDetails = function (url) {
    var fullUrl = (url.indexOf('://') !== -1) ? url : platform.regular_url + url;
    var u = new URL(fullUrl);
    var transId = u.searchParams.get('type');
    var bookNum = parseInt(u.searchParams.get('b'));
    var chapterNum = parseInt(u.searchParams.get('c'));

    var trans = getTranslation(transId);
    var book = getBook(bookNum);
    var transName = trans ? trans.name : transId;
    var bookName = book ? book.name : 'Book ' + bookNum;

    var title = bookName + ' Chapter ' + chapterNum;
    var description = transName + ': ' + bookName + ' ' + chapterNum;

    var cfid = null;
    var cftoken = null;

    // Use a fresh HTTP client so each chapter gets a new ColdFusion session
    var freshClient = http.newClient(false);
    var videoResponse = freshClient.GET(fullUrl, { Accept: 'text/html' });

    if (!videoResponse.isOk) {
        throw new ScriptException('Failed to fetch video ' + fullUrl + ' with code [' + videoResponse.code + ']');
    }

    // Extract CFID/CFTOKEN from the Set-Cookie response headers
    if (videoResponse.headers) {
        var extracted = extractCFIDCFTOKEN(videoResponse.headers);
        cfid = extracted.cfid;
        cftoken = extracted.cftoken;
    }

    // Parse Open Graph meta tags from the popPlayer page HTML
    var ogTitleMatch = videoResponse.body.match(OG_TITLE_REGEX);
    if (ogTitleMatch) title = ogTitleMatch[1];

    var ogDescMatch = videoResponse.body.match(OG_DESCRIPTION_REGEX);
    if (ogDescMatch) description = ogDescMatch[1];

    var ogImageMatch = videoResponse.body.match(OG_IMAGE_REGEX);
    var thumbnail = '';
    if (ogImageMatch) {
        thumbnail = ogImageMatch[1];
        if (thumbnail.indexOf('://') === -1) {
            thumbnail = platform.regular_url + thumbnail;
        }
    }

    // Build the stream URL with session identifiers encoded as query parameters.
    // The popPlayer page already primed the server session with the correct
    // book/chapter, so the stream endpoint just needs to know which session to use.
    var ts = new Date().getTime();
    var streamUrl = platform.regular_url + '/audio_video/stream/mp3/bible/' + ts;

    if (cfid && cftoken) {
        streamUrl += '?CFID=' + encodeURIComponent(cfid) + '&CFTOKEN=' + encodeURIComponent(cftoken);
    }

    var audioSrc = new AudioUrlSource({
        name: 'Audio (' + transName + ')',
        duration: 300,
        container: 'audio/mpeg',
        codec: 'mp3',
        url: streamUrl,
        language: Language.UNKNOWN,
        bitrate: 0,
        requestModifier: {
            headers: { 'Referer': fullUrl }
        }
    });

    return new PlatformVideoDetails({
        id: new PlatformID(platform.title, title, config.id),
        name: title,
        thumbnails: new Thumbnails([new Thumbnail(thumbnail, 0)]),
        author: new PlatformAuthorLink(
            getPlatformIDForTranslation(transId, transName),
            'Blue Letter Bible ' + transName,
            platform.url,
            platform.icon
        ),
        url: fullUrl,
        uploadDate: null,
        duration: 300,
        description: description,
        isLive: false,
        video: new UnMuxVideoSourceDescriptor([], [audioSrc])
    });
}

// Looks up a translation object by its ID (e.g. 'kjv_n')
function getTranslation(id) {
    if (!id) return null;
    var lower = id.toLowerCase();
    for (var i = 0; i < translations.length; i++) {
        if (translations[i].id === lower) return translations[i];
    }
    return null;
}

// Looks up a book object by its number (1-66)
function getBook(num) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].num === num) return books[i];
    }
    return null;
}

// Extracts the translation type from a popPlayer URL's query string
function extractTranslationFromUrl(url) {
    try {
        var u = new URL(url);
        return u.searchParams.get('type');
    } catch {
        return null;
    }
}

function getPlatformIDForTranslation(transId, transName) {
    return new PlatformID(platform.title, transName, config.id);
}

// Parses a search query to extract book name, chapter number, and translation.
function parseSearchQuery(query) {
    var lower = query.toLowerCase().trim();
    var result = { transId: null, book: null, chapter: null };

    for (var i = 0; i < translations.length; i++) {
        var t = translations[i];
        if (lower.indexOf(t.name.toLowerCase()) !== -1) {
            result.transId = t.id;
            break;
        }
        var abbr = t.id.split('_')[0];
        if (lower.indexOf(abbr) !== -1) {
            result.transId = t.id;
            break;
        }
    }

    var chapterMatch = lower.match(/\bchapter\s+(\d+)\b/i);
    if (chapterMatch) {
        result.chapter = parseInt(chapterMatch[1]);
    }

    var sortedBooks = books.slice().sort(function (a, b) {
        return b.name.length - a.name.length;
    });
    for (var i = 0; i < sortedBooks.length; i++) {
        if (lower.indexOf(sortedBooks[i].name.toLowerCase()) !== -1) {
            result.book = sortedBooks[i];
            break;
        }
    }

    if (result.book && !result.chapter) {
        var bookLower = result.book.name.toLowerCase();
        var idx = lower.indexOf(bookLower);
        if (idx !== -1) {
            var after = lower.substring(idx + bookLower.length).trim();
            var numMatch = after.match(/^(\d+)/);
            if (numMatch) {
                result.chapter = parseInt(numMatch[1]);
            }
        }
    }

    return result;
}

// Creates a PlatformVideo for a single Bible chapter
function createChapterVideo(transId, transName, book, chapterNum) {
    var popUrl = platform.regular_url + '/audio_video/popPlayer.cfm?type=' + transId + '&b=' + book.num + '&c=' + chapterNum;
    return new PlatformVideo({
        id: new PlatformID(platform.title + '-' + transId, book.name + ' Chapter ' + chapterNum, config.id),
        name: book.name + ' Chapter ' + chapterNum,
        thumbnails: new Thumbnails([new Thumbnail(platform.banner, 0)]),
        author: new PlatformAuthorLink(
            getPlatformIDForTranslation(transId, transName),
            'Blue Letter Bible ' + transName,
            platform.url,
            platform.icon
        ),
        datetime: null,
        duration: null,
        viewCount: null,
        url: popUrl,
        shareUrl: popUrl,
        isLive: false
    });
}

// Generates a paginated list of all chapters for a given translation.
// Each chapter is returned as a PlatformVideo with the correct
// channel name matching the parent translation channel.
function getAllChaptersPager(transId, continuationToken, query) {
    var startIndex = continuationToken ? parseInt(continuationToken) : 0;
    var pageSize = 50;

    var trans = getTranslation(transId);
    var transName = trans ? trans.name : transId;

    var parsed = query ? parseSearchQuery(query) : null;
    var lowerQuery = query ? query.toLowerCase() : '';

    var allItems = [];
    var totalIndex = 0;

    for (var b = 0; b < books.length; b++) {
        var book = books[b];

        var bookMatches = !query;
        if (query) {
            if (parsed && parsed.book) {
                bookMatches = parsed.book.num === book.num;
            } else {
                bookMatches = book.name.toLowerCase().indexOf(lowerQuery) !== -1;
            }
        }
        if (!bookMatches) continue;

        var chaptersToInclude = [];
        if (parsed && parsed.chapter) {
            if (parsed.chapter <= book.chapters) {
                chaptersToInclude.push(parsed.chapter);
            }
        } else {
            for (var c = 1; c <= book.chapters; c++) {
                chaptersToInclude.push(c);
            }
        }

        for (var ci = 0; ci < chaptersToInclude.length; ci++) {
            var c = chaptersToInclude[ci];
            if (totalIndex >= startIndex && totalIndex < startIndex + pageSize) {
                allItems.push({
                    title: book.name + ' Chapter ' + c,
                    bookNum: book.num,
                    chapterNum: c,
                    bookName: book.name
                });
            }
            totalIndex++;
        }
    }

    var nextStart = startIndex + pageSize;
    var hasMore = nextStart < totalIndex;

    var videos = allItems.map(function (item) {
        return createChapterVideo(transId, transName, getBook(item.bookNum), item.chapterNum);
    });

    var nextToken = hasMore ? '' + nextStart : null;
    return new BLBChapterPager(videos, hasMore, { transId: transId, nextToken: nextToken, query: query });
}

// Returns all books of the Bible as playlists for a translation channel.
source.getChannelPlaylists = function (url) {
    var transId = extractTranslationFromUrl(url);
    if (!transId) return new PlaylistPager([], false);

    var trans = getTranslation(transId);
    var transName = trans ? trans.name : transId;
    var channelName = 'Blue Letter Bible ' + transName;

    var playlists = books.map(function (book) {
        var playlistUrl = platform.regular_url + '/audio_video/popPlayer.cfm?type=' + transId + '&b=' + book.num;
        return new PlatformPlaylist({
            id: new PlatformID(platform.title + '-' + transId, book.name, config.id),
            name: book.name,
            thumbnail: platform.banner,
            videoCount: book.chapters,
            url: playlistUrl,
            author: new PlatformAuthorLink(
                getPlatformIDForTranslation(transId, transName),
                channelName,
                platform.url,
                platform.icon
            )
        });
    });

    return new PlaylistPager(playlists, false);
}

// Checks if a URL points to a playlist (book without chapter): ?type=kjv_n&b=1
source.isPlaylistUrl = function (url) {
    try {
        var u = new URL(url);
        var b = u.searchParams.get('b');
        var c = u.searchParams.get('c');
        return u.hostname === 'www.blueletterbible.org' &&
            u.pathname.indexOf('popPlayer.cfm') !== -1 &&
            !!u.searchParams.get('type') &&
            !!b && !c;
    } catch {
        return false;
    }
}

// Returns a book's chapters as playlist contents.
source.getPlaylist = function (url) {
    try {
        var u = new URL(url);
        var transId = u.searchParams.get('type');
        var bookNum = parseInt(u.searchParams.get('b'));

        var trans = getTranslation(transId);
        var book = getBook(bookNum);
        if (!trans || !book) return null;

        var transName = trans ? trans.name : transId;
        var channelName = 'Blue Letter Bible ' + transName;

        var videos = [];
        for (var c = 1; c <= book.chapters; c++) {
            videos.push(createChapterVideo(transId, transName, book, c));
        }

        return new PlatformPlaylistDetails({
            id: new PlatformID(platform.title + '-' + transId, book.name, config.id),
            name: book.name,
            thumbnails: new Thumbnails([new Thumbnail(platform.banner, 0)]),
            url: url,
            thumbnail: platform.banner,
            author: new PlatformAuthorLink(
                getPlatformIDForTranslation(transId, transName),
                channelName,
                platform.url,
                platform.icon
            ),
            contents: new PlaylistChapterPager(videos, false)
        });
    } catch {
        return null;
    }
}

class PlaylistChapterPager extends VideoPager {
    constructor(results, hasMore) {
        super(results, hasMore);
    }
}

class BLBChapterPager extends VideoPager {
    constructor(results, hasMore, context) {
        super(results, hasMore, context);
    }

    nextPage() {
        return getAllChaptersPager(
            this.context.transId,
            this.context.nextToken,
            this.context.query
        );
    }
}
