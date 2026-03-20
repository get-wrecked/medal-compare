export interface ComparisonRow {
  feature: string;
  medal: string;
  competitor: string;
  medalWins: boolean | null; // null = tie
  competitorWins: boolean | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DetailSection {
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  embedUrl?: string;
  video?: string;
}

export interface ComparisonPage {
  slug: string;
  competitor: string;
  competitorShort: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  competitorUrl: string;
  comparisonRows: ComparisonRow[];
  detailSections: DetailSection[];
  faqs: FAQItem[];
  verdict: string;
}

export const allComparisons: ComparisonPage[] = [
  {
    slug: 'medal-vs-obs',
    competitor: 'OBS',
    competitorShort: 'OBS',
    title: 'Medal vs OBS: Best Game Clipping Software Compared (2026)',
    metaDescription:
      'Compare Medal and OBS for game recording and clipping. See which is better for instant replays, editing, sharing, and performance impact.',
    heroSubtitle:
      "Medal is built to clip your best moments and share them instantly. OBS is a powerhouse for streaming and advanced recording. If you're wondering which one you actually need, here's the breakdown.",
    competitorUrl: 'https://obsproject.com/',
    comparisonRows: [
      {
        feature: 'Auto-clipping',
        medal: 'Biggest moments auto-clipped',
        competitor: 'No',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Instant replay',
        medal: 'Built-in, no clip buffer needed',
        competitor: 'Requires plugin setup',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Built-in editor',
        medal: 'Trim, cut, effects, text',
        competitor: 'No editor',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'One-click sharing',
        medal: 'Instant link',
        competitor: 'Manual upload',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android',
        competitor: 'Desktop only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Yes (free + premium)',
        competitor: 'Local only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Live streaming',
        medal: 'No',
        competitor: 'Full streaming suite',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Scene / source management',
        medal: 'No',
        competitor: 'Advanced scenes, sources, transitions',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Setup time',
        medal: 'Install and go (< 2 min)',
        competitor: 'Requires configuration',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Low-end PC friendly',
        medal: 'Optimized, minimal RAM',
        competitor: 'Needs manual tuning',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Advanced encoding control',
        medal: 'Limited settings',
        competitor: 'Full bitrate, codec, preset control',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Price',
        medal: 'Free',
        competitor: 'Free',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'GPU support',
        medal: 'NVIDIA, AMD, Intel',
        competitor: 'NVIDIA, AMD, Intel',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Multitrack audio',
        medal: 'Separate game, mic, and Discord tracks',
        competitor: 'Separate tracks (with setup)',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Platform',
        medal: 'Windows, iOS, Android',
        competitor: 'Windows, Mac, Linux',
        medalWins: null,
        competitorWins: null,
      },
    ],
    detailSections: [
      {
        title: 'Light-Speed Instant Replays Captured',
        content:
          'Medal lets you hit a clutch 1v4 in Valorant or a ceiling shot in Rocket League, press F8, and the last 15 seconds are saved. Done. OBS has a Replay Buffer, but you have to dig through settings to configure it. Medal was built for capturing plays and sharing them in under 10 seconds. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/compare/images/medal-instant-replay.mp4',
      },
      {
        title: 'Never Miss a Moment with Smart Auto-Clips',
        content:
          'Medal allows you to play your game at ease with <a href="https://medal.tv/auto-clipping">auto-clipping</a> present in the background. Your best moments with your friends in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, and <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a> are saved by the time you\'re back in the lobby. OBS only records manually.',
        image: '/compare/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping a kill in Apex Legends without pressing any button',
      },
      {
        title: 'Too Focused? Your Voice Is All You Need',
        content:
          "Just say \"clip that\" and Medal captures the moment instantly, hands-free, and distraction-free. OBS does not offer voice features.",
        image: '/compare/images/medal-editor-demo.gif',
        imageAlt: 'Medal voice command clipping a gaming highlight hands-free',
      },
      {
        title: 'Easily Edit and Share on All Platforms',
        content:
          'Medal lets you instantly edit and share links of clips to Discord, TikTok, Reddit, and anywhere else. You can also follow friends, see their clips, and discover clips you\'re in. OBS saves files locally with no sharing or social features built in.',
        video: '/compare/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'The Only Recorder with a Mobile App',
        content:
          'Medal provides a mobile app and a mobile recorder, so you can record, manage, comment, and share clips on the go. Share highlights directly to TikTok, Discord, or anywhere else from your phone. OBS is desktop-only.',
        image: '/compare/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app - browse clips, tap to clip, play any mobile game',
      },
      {
        title: 'When Should You Use OBS Instead?',
        content:
          'Medal is the go-to for almost all PC gamers. OBS is a great product if you stream on Twitch or YouTube and need scenes and facecam, it is the right tool. It is also better if you need professional-grade encoding control for long-form content or if you record on Mac or Linux. <strong class="text-medal-primary">For everything else - clipping highlights, sharing with friends, auto-capturing kills, even finding clips you\'re in - Medal is the faster, simpler tool.</strong>',
      },
    ],
    faqs: [
      {
        question: 'Is Medal free?',
        answer:
          'Yes. Medal is completely free for instant replay, auto-clipping, editing, and sharing. Optional premium features include extra cloud storage and higher quality exports. <a href="https://medal.tv/download">Download Medal</a> and start clipping in under two minutes.',
      },
      {
        question: 'How to auto-clip game highlights with Medal?',
        answer:
          'Just install Medal and play. Medal\'s smart AI auto-clips kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, and 100+ more games. No button press needed.',
      },
      {
        question: 'Can I share my clips to Discord, TikTok, or Reddit from Medal?',
        answer:
          'Yes. Medal generates an instant link for every clip that embeds on Discord, TikTok, Reddit, Twitter, and anywhere else. No file uploading, no compression, no size limits. One click and it is shared.',
      },
      {
        question: 'What games does Medal support?',
        answer:
          'Medal works with every PC game for recording and supports smart auto-clipping in <a href="https://medal.tv/games">100+ games</a> including Valorant, Fortnite, Apex Legends, CS2, Call of Duty, Rocket League, League of Legends, and more.',
      },
      {
        question: 'How to use Medal on PC, iPhone, or Android?',
        answer:
          'Medal works on Windows, iOS, and Android. <a href="https://medal.tv/download">Download Medal</a> on your PC to record and clip. Install the mobile app to browse, edit, and share clips from your phone. Your clips sync across devices.',
      },
      {
        question: 'How to use Medal and OBS together?',
        answer:
          'Run OBS for your stream and Medal in the background for instant clips. They do not conflict. OBS handles your scenes and facecam, Medal captures your highlights with light-speed instant replay.',
      },
    ],
    verdict:
      "OBS is the right tool if you're streaming on Twitch, need full scene management, or genuinely enjoy fine-tuning encoding presets on a high-end rig. If you just want to share clips fast, see what your friends are clipping, discover clips you're in, and get auto-clipping in most games you're already playing - Medal is the better choice with over 15 million gamers already on board.",
  },
  {
    slug: 'medal-vs-xbox-game-bar',
    competitor: 'Xbox Game Bar',
    competitorShort: 'Xbox Game Bar',
    title:
      'Medal vs Xbox Game Bar: Which Records Better Gaming Clips? (2026)',
    metaDescription:
      "Compare Medal and Xbox Game Bar for game recording. See how Medal's editing, sharing, and clip quality stack up against Windows' built-in recorder.",
    heroSubtitle:
      "Medal is built to clip, edit, and share your best gaming moments in seconds. Xbox Game Bar comes pre-installed on every Windows PC, but \"already there\" and \"actually good\" are two very different things. Here's the full breakdown.",
    competitorUrl:
      'https://www.xbox.com/en-US/apps/xbox-game-bar',
    comparisonRows: [
      {
        feature: 'Instant replay',
        medal: 'Built-in, no clip buffer needed',
        competitor: 'Limited (up to 10 min)',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Auto-clipping',
        medal: 'Biggest moments auto-clipped',
        competitor: 'No',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Built-in editor',
        medal: 'Full editor',
        competitor: 'Basic trim only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'One-click sharing',
        medal: 'Instant link',
        competitor: 'Manual file sharing',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android',
        competitor: 'No',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Yes',
        competitor: 'Local only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Recording quality',
        medal: 'Up to 4K 144fps',
        competitor: 'Up to 1080p 60fps',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Game compatibility',
        medal: 'All PC games',
        competitor: 'Most (some issues with certain games)',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'GPU support',
        medal: 'NVIDIA, AMD, Intel',
        competitor: 'NVIDIA, AMD, Intel',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Price',
        medal: 'Free',
        competitor: 'Free',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Audio splitting',
        medal: 'Separate tracks',
        competitor: 'Single track',
        medalWins: true,
        competitorWins: false,
      },
    ],
    detailSections: [
      {
        title: 'Light-Speed Instant Replays Captured',
        content:
          'Medal lets you press F8 after a clutch 1v4 in <a href="https://medal.tv/games/valorant">Valorant</a> or an insane flick in <a href="https://medal.tv/games/cs2">CS2</a> and the last 15 seconds are saved instantly. Xbox Game Bar has a replay feature, but it caps at 1080p 60fps and requires you to dig into Windows settings to enable it. Medal was built for speed - capture, edit, and share in under 10 seconds. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/compare/images/medal-instant-replay.mp4',
      },
      {
        title: 'Never Miss a Moment with Smart Auto-Clips',
        content:
          'Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> runs quietly in the background and saves your best plays automatically. Kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, and <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a> are clipped by the time you are back in the lobby. Xbox Game Bar has no auto-clipping at all - every clip requires a manual hotkey.',
        image: '/compare/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping a kill in Apex Legends without pressing any button',
      },
      {
        title: 'Too Focused? Your Voice Is All You Need',
        content:
          'Just say "clip that" and Medal captures the moment instantly - hands-free and distraction-free. Perfect for ranked matches in <a href="https://medal.tv/games/rocket-league">Rocket League</a> or <a href="https://medal.tv/games/fortnite">Fortnite</a> when your hands are busy. Xbox Game Bar does not support voice commands for clipping.',
        image: '/compare/images/medal-editor-demo.gif',
        imageAlt: 'Medal voice command clipping a gaming highlight hands-free',
      },
      {
        title: 'Easily Edit and Share on All Platforms',
        content:
          'Medal gives you an instant link for every clip that embeds on Discord, TikTok, Reddit, and anywhere else - no file uploading, no compression. You can also follow friends, see their clips, and discover clips you are in. Xbox Game Bar saves files to a local folder with no editor and no sharing workflow built in.',
        video: '/compare/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'The Only Recorder with a Mobile App',
        content:
          'Medal has a full mobile app on iOS and Android so you can record mobile games, browse clips, edit, and share from your phone. Share highlights directly to TikTok, Discord, or anywhere else on the go. Xbox Game Bar is desktop-only with no mobile support whatsoever.',
        image: '/compare/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app - browse clips, tap to clip, play any mobile game',
      },
      {
        title: 'When Should You Use Xbox Game Bar Instead?',
        content:
          'Medal is the go-to for almost all PC gamers. Xbox Game Bar is a decent tool if you need a quick, no-install screen recording on a fresh Windows PC. It is pre-installed and works for basic captures in a pinch. It is also handy for monitoring FPS and system performance through its overlay widgets. <strong class="text-medal-primary">For everything else - clipping highlights, sharing with friends, auto-capturing kills, even finding clips you\'re in - Medal is the faster, simpler tool.</strong>',
      },
    ],
    faqs: [
      {
        question: 'Is Medal free?',
        answer:
          'Yes. Medal is completely free for instant replay, auto-clipping, editing, and sharing. Optional premium features include extra cloud storage and higher quality exports. <a href="https://medal.tv/download">Download Medal</a> and start clipping in under two minutes.',
      },
      {
        question: 'How to auto-clip game highlights with Medal?',
        answer:
          'Just install Medal and play. Medal\'s smart AI auto-clips kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, and 100+ more games. No button press needed.',
      },
      {
        question: 'Can I share my clips to Discord, TikTok, or Reddit from Medal?',
        answer:
          'Yes. Medal generates an instant link for every clip that embeds on Discord, TikTok, Reddit, Twitter, and anywhere else. No file uploading, no compression, no size limits. One click and it is shared.',
      },
      {
        question: 'What games does Medal support?',
        answer:
          'Medal works with every PC game for recording and supports smart auto-clipping in <a href="https://medal.tv/games">100+ games</a> including <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, League of Legends, and more.',
      },
      {
        question: 'How to use Medal on PC, iPhone, or Android?',
        answer:
          'Medal works on Windows, iOS, and Android. <a href="https://medal.tv/download">Download Medal</a> on your PC to record and clip. Install the mobile app to browse, edit, and share clips from your phone. Your clips sync across devices.',
      },
      {
        question: 'How to use Medal and Xbox Game Bar together?',
        answer:
          'Run Xbox Game Bar for its system performance widgets and Medal in the background for instant clips. They do not conflict. Game Bar handles your FPS overlay, Medal captures your highlights with light-speed instant replay and auto-clipping.',
      },
    ],
    verdict:
      "Xbox Game Bar is fine for your very first clip ever. It is there, it is free, it works (mostly). But once you have captured that first highlight and realize you cannot properly edit it, cannot easily share it, and it maxed out at 1080p - you are going to want more. Medal gives you better quality, real editing, instant sharing, cloud storage, and a social experience where you can follow friends and discover clips you are in - and it is just as free. Medal is the better choice with over 15 million gamers already on board.",
  },
  {
    slug: 'medal-vs-shadowplay',
    competitor: 'NVIDIA ShadowPlay',
    competitorShort: 'ShadowPlay',
    title: 'Medal vs ShadowPlay: Best Game Clipping Software Compared (2026)',
    metaDescription:
      'Compare Medal and NVIDIA ShadowPlay for game recording. See which offers better editing, sharing, game support, and GPU compatibility.',
    heroSubtitle:
      "Medal clips, edits, and shares your best gaming moments on any GPU in seconds. ShadowPlay comes free with your NVIDIA card, but it stops at basic local recording. Here is what you are missing.",
    competitorUrl:
      'https://www.nvidia.com/en-us/geforce/geforce-experience/shadowplay/',
    comparisonRows: [
      {
        feature: 'Game compatibility',
        medal: 'Capture any game on PC',
        competitor: 'NVIDIA-supported games/GPUs only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Hardware requirement',
        medal: 'Works with NVIDIA, AMD, and Intel GPUs',
        competitor: 'NVIDIA GPUs only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Clip editing',
        medal: 'Built-in editor with trimming, captions, effects',
        competitor: 'No built-in editing',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'Mobile app to watch, edit, and upload clips',
        competitor: 'No mobile support',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Clip on mobile',
        medal: 'Full mobile recording support',
        competitor: 'No',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Uploads',
        medal: 'Instantly generate share links (free)',
        competitor: 'Manual file exports only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Unlimited cloud storage (Premium)',
        competitor: 'None',
        medalWins: true,
        competitorWins: false,
      },
    ],
    detailSections: [
      {
        title: 'Light-Speed Instant Replays Captured',
        content:
          'Medal lets you press F8 after a clutch ace in <a href="https://medal.tv/games/valorant">Valorant</a> or a nasty flick in <a href="https://medal.tv/games/cs2">CS2</a> and the last 15 seconds are saved. Done. ShadowPlay has Instant Replay too, but it only works on NVIDIA GPUs and requires GeForce Experience running. Medal works on NVIDIA, AMD, and Intel - no extra software needed. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/compare/images/medal-instant-replay.mp4',
      },
      {
        title: 'Never Miss a Moment with Smart Auto-Clips',
        content:
          'Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> saves your best plays in the background without any button press. Kills, aces, and clutch rounds in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, and <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a> are clipped before you are back in the lobby. ShadowPlay Highlights only works with a limited list of titles and has not expanded much.',
        image: '/compare/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping a kill in Apex Legends without pressing any button',
      },
      {
        title: 'Too Focused? Your Voice Is All You Need',
        content:
          'Just say "clip that" and Medal captures the moment instantly - hands-free and distraction-free. Perfect for clutch rounds in <a href="https://medal.tv/games/rocket-league">Rocket League</a> or <a href="https://medal.tv/games/fortnite">Fortnite</a> when your hands are occupied. ShadowPlay does not support voice-activated clipping.',
        image: '/compare/images/medal-editor-demo.gif',
        imageAlt: 'Medal voice command clipping a gaming highlight hands-free',
      },
      {
        title: 'Easily Edit and Share on All Platforms',
        content:
          'Medal gives you an instant link for every clip that embeds on Discord, TikTok, Reddit, and anywhere else. You can also follow friends, see their clips, and discover clips you are in. ShadowPlay saves raw files to your hard drive with no editor and no sharing - you would need a separate app just to trim the clip down.',
        video: '/compare/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'The Only Recorder with a Mobile App',
        content:
          'Medal has a full mobile app on iOS and Android so you can record mobile games, browse clips, edit, and share from your phone. Share highlights directly to TikTok, Discord, or anywhere else on the go. ShadowPlay is desktop-only and locked to NVIDIA hardware.',
        image: '/compare/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app - browse clips, tap to clip, play any mobile game',
      },
      {
        title: 'When Should You Use ShadowPlay Instead?',
        content:
          'Medal is the go-to for almost all PC gamers. ShadowPlay is a solid tool if you have an NVIDIA GPU and only need basic local recording with minimal setup. It is also useful if you want NVIDIA-specific features like Freestyle or Ansel for in-game screenshots. If you record on Linux or need tight integration with GeForce Experience, ShadowPlay has that covered. <strong class="text-medal-primary">For everything else - clipping highlights, sharing with friends, auto-capturing kills, even finding clips you\'re in - Medal is the faster, simpler tool.</strong>',
      },
    ],
    faqs: [
      {
        question: 'Is Medal free?',
        answer:
          'Yes. Medal is completely free for instant replay, auto-clipping, editing, and sharing. Optional premium features include extra cloud storage and higher quality exports. <a href="https://medal.tv/download">Download Medal</a> and start clipping in under two minutes.',
      },
      {
        question: 'How to auto-clip game highlights with Medal?',
        answer:
          'Just install Medal and play. Medal\'s smart AI auto-clips kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, and 100+ more games. No button press needed.',
      },
      {
        question: 'Can I share my clips to Discord, TikTok, or Reddit from Medal?',
        answer:
          'Yes. Medal generates an instant link for every clip that embeds on Discord, TikTok, Reddit, Twitter, and anywhere else. No file uploading, no compression, no size limits. One click and it is shared.',
      },
      {
        question: 'What games does Medal support?',
        answer:
          'Medal works with every PC game for recording and supports smart auto-clipping in <a href="https://medal.tv/games">100+ games</a> including <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, League of Legends, and more.',
      },
      {
        question: 'How to use Medal on PC, iPhone, or Android?',
        answer:
          'Medal works on Windows, iOS, and Android. <a href="https://medal.tv/download">Download Medal</a> on your PC to record and clip. Install the mobile app to browse, edit, and share clips from your phone. Your clips sync across devices.',
      },
      {
        question: 'When should I use ShadowPlay instead of Medal?',
        answer:
          'ShadowPlay is worth using if you need NVIDIA-specific features like Freestyle game filters or Ansel screenshots, or if you record on Linux. For clipping, editing, sharing, and auto-capturing highlights, Medal is the better choice - and it works on NVIDIA, AMD, and Intel GPUs.',
      },
    ],
    verdict:
      "ShadowPlay is a decent default if you have an NVIDIA GPU and only need basic local recording. But Medal does everything ShadowPlay does and more: works on any GPU, has a real editor, gives you instant share links, runs on mobile, and lets you follow friends and discover clips you are in. If you have been on ShadowPlay out of habit and never thought about switching, Medal is the better choice with over 15 million gamers already on board.",
  },
  {
    slug: 'medal-vs-outplayed',
    competitor: 'Outplayed (by Overwolf)',
    competitorShort: 'Outplayed',
    title: 'Medal vs Outplayed: Best Auto-Clipping Software Compared (2026)',
    metaDescription:
      'Compare Medal and Outplayed for automatic game clipping. See which captures better highlights, offers better editing, and shares clips faster.',
    heroSubtitle:
      "Medal auto-clips your highlights, edits them, and shares an instant link - all standalone with no extra platform. Outplayed also auto-clips, but it requires Overwolf running in the background. Here is the full breakdown.",
    competitorUrl: 'https://www.overwolf.com/app/overwolf-outplayed',
    comparisonRows: [
      {
        feature: 'Auto-clipping',
        medal: 'Biggest moments auto-clipped',
        competitor: 'Event-based detection',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Supported games',
        medal: '100+ with auto-clip',
        competitor: '100+ with auto-clip',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Built-in editor',
        medal: 'Full editor (trim, effects, text, slow-mo)',
        competitor: 'Basic trimming',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'One-click sharing',
        medal: 'Instant link',
        competitor: 'Manual upload or Overwolf share',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android',
        competitor: 'No',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Yes (free + premium)',
        competitor: 'No (local only)',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Manual clipping hotkey',
        medal: 'Yes',
        competitor: 'Yes',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Recording quality',
        medal: 'Up to 4K 144fps',
        competitor: 'Up to 4K',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'GPU support',
        medal: 'NVIDIA, AMD, Intel',
        competitor: 'NVIDIA, AMD, Intel',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Price',
        medal: 'Free',
        competitor: 'Free',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Requires Overwolf',
        medal: 'No',
        competitor: 'Yes',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Platform',
        medal: 'Windows, iOS, Android',
        competitor: 'Windows only',
        medalWins: true,
        competitorWins: false,
      },
    ],
    detailSections: [
      {
        title: 'Light-Speed Instant Replays Captured',
        content:
          'Medal lets you press F8 after a nasty ace in <a href="https://medal.tv/games/valorant">Valorant</a> or a crazy redirect in <a href="https://medal.tv/games/rocket-league">Rocket League</a> and the last 15 seconds are saved instantly. Outplayed also has a hotkey replay, but it requires the full Overwolf platform running in the background. Medal is standalone - no extra software, no overlays you did not ask for. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/compare/images/medal-instant-replay.mp4',
      },
      {
        title: 'Never Miss a Moment with Smart Auto-Clips',
        content:
          'Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> detects kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, and <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a> and saves them automatically. Outplayed hooks into game events through Overwolf for similar detection, but Medal runs standalone and tends to be more consistent across a wider range of games.',
        image: '/compare/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping a kill in Apex Legends without pressing any button',
      },
      {
        title: 'Too Focused? Your Voice Is All You Need',
        content:
          'Just say "clip that" and Medal captures the moment instantly - hands-free and distraction-free. Perfect for intense ranked matches in <a href="https://medal.tv/games/apex-legends">Apex Legends</a> or <a href="https://medal.tv/games/cs2">CS2</a> when your hands are busy. Outplayed does not offer voice-activated clipping.',
        image: '/compare/images/medal-editor-demo.gif',
        imageAlt: 'Medal voice command clipping a gaming highlight hands-free',
      },
      {
        title: 'Easily Edit and Share on All Platforms',
        content:
          'Medal gives you an instant link for every clip that embeds on Discord, TikTok, Reddit, and anywhere else - no file uploading, no compression. You can also follow friends, see their clips, and discover clips you are in. Outplayed saves clips locally and sharing means manually uploading or going through Overwolf\'s ecosystem.',
        video: '/compare/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'The Only Recorder with a Mobile App',
        content:
          'Medal has a full mobile app on iOS and Android so you can record mobile games, browse clips, edit, and share from your phone. Share highlights directly to TikTok, Discord, or anywhere else on the go. Outplayed is desktop-only with no mobile app and no cloud storage.',
        image: '/compare/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app - browse clips, tap to clip, play any mobile game',
      },
      {
        title: 'When Should You Use Outplayed Instead?',
        content:
          'Medal is the go-to for almost all PC gamers. Outplayed is a reasonable option if you are already deep in the Overwolf ecosystem and use other Overwolf apps alongside it. It also offers some Overwolf-specific integrations for game overlays and stats tracking that Medal does not. <strong class="text-medal-primary">For everything else - clipping highlights, sharing with friends, auto-capturing kills, even finding clips you\'re in - Medal is the faster, simpler tool.</strong>',
      },
    ],
    faqs: [
      {
        question: 'Is Medal free?',
        answer:
          'Yes. Medal is completely free for instant replay, auto-clipping, editing, and sharing. Optional premium features include extra cloud storage and higher quality exports. <a href="https://medal.tv/download">Download Medal</a> and start clipping in under two minutes.',
      },
      {
        question: 'How to auto-clip game highlights with Medal?',
        answer:
          'Just install Medal and play. Medal\'s smart AI auto-clips kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, and 100+ more games. No button press needed.',
      },
      {
        question: 'Can I share my clips to Discord, TikTok, or Reddit from Medal?',
        answer:
          'Yes. Medal generates an instant link for every clip that embeds on Discord, TikTok, Reddit, Twitter, and anywhere else. No file uploading, no compression, no size limits. One click and it is shared.',
      },
      {
        question: 'What games does Medal support?',
        answer:
          'Medal works with every PC game for recording and supports smart auto-clipping in <a href="https://medal.tv/games">100+ games</a> including <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, League of Legends, and more.',
      },
      {
        question: 'How to use Medal on PC, iPhone, or Android?',
        answer:
          'Medal works on Windows, iOS, and Android. <a href="https://medal.tv/download">Download Medal</a> on your PC to record and clip. Install the mobile app to browse, edit, and share clips from your phone. Your clips sync across devices.',
      },
      {
        question: 'How to use Medal and Outplayed together?',
        answer:
          'Medal runs standalone and does not conflict with Outplayed or Overwolf. You can run both side by side - use Outplayed for Overwolf-specific integrations and Medal for instant clipping, editing, and sharing. Most gamers who try both end up sticking with Medal for its faster workflow.',
      },
    ],
    verdict:
      "Outplayed is a decent option if you are already deep in the Overwolf ecosystem and just want auto-clipping tacked on. But if you do not need Overwolf, Medal is the standalone tool that handles everything - real editing, instant sharing, cloud storage, mobile access, a social experience where you follow friends and discover clips you are in, and no extra platform dependency. Most gamers who try both end up dropping the Overwolf layer and sticking with Medal. Medal is the better choice with over 15 million gamers already on board.",
  },
  {
    slug: 'medal-vs-insights-capture',
    competitor: 'Insights',
    competitorShort: 'Insights',
    title: 'Medal vs Insights: Game Clipping Software Compared (2026)',
    metaDescription:
      'Compare Medal and Insights for game recording and clipping. See which is better for editing, sharing, auto-highlights, and performance.',
    heroSubtitle:
      "Medal is built for capturing your best moments, editing them, and sharing them instantly with a single hotkey. Insights is built for esports teams and structured VOD review. They solve different problems - here is how to figure out which one you actually need.",
    competitorUrl: 'https://insights.gg/',
    comparisonRows: [
      {
        feature: 'Primary focus',
        medal: 'Clip, edit, share',
        competitor: 'Record & improve gameplay',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Auto-clipping',
        medal: 'Biggest moments auto-clipped',
        competitor: 'Event-based bookmarks',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Built-in editor',
        medal: 'Full editor (trim, effects, text)',
        competitor: 'Basic trimming',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'One-click sharing',
        medal: 'Instant link',
        competitor: 'Manual export',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android',
        competitor: 'No',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Yes (free + premium)',
        competitor: 'Limited',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Gameplay analytics',
        medal: 'No',
        competitor: 'Performance stats & insights',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'VOD review tools',
        medal: 'No',
        competitor: 'Timeline markers, team review',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Recording quality',
        medal: 'Up to 4K 144fps',
        competitor: 'Up to 4K',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'GPU support',
        medal: 'NVIDIA, AMD, Intel',
        competitor: 'NVIDIA, AMD, Intel',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Price',
        medal: 'Free',
        competitor: 'Free',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Platform',
        medal: 'Windows, iOS, Android',
        competitor: 'Windows',
        medalWins: true,
        competitorWins: false,
      },
    ],
    detailSections: [
      {
        title: 'Light-Speed Instant Replays Captured',
        content:
          'Medal lets you press F8 after a clutch 1v3 in <a href="https://medal.tv/games/cs2">CS2</a> or a ceiling shot in <a href="https://medal.tv/games/rocket-league">Rocket League</a> and the last 15 seconds are saved instantly. Insights is built for recording full sessions and reviewing VODs with a coach - not for quick highlight captures. Medal was purpose-built for the clip-and-share loop. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/compare/images/medal-instant-replay.mp4',
      },
      {
        title: 'Never Miss a Moment with Smart Auto-Clips',
        content:
          'Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> saves your best plays in the background without any button press. Kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, and <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a> are clipped before you are back in the lobby. Insights offers event-based bookmarks for later review, but does not create shareable clips automatically.',
        image: '/compare/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping a kill in Apex Legends without pressing any button',
      },
      {
        title: 'Too Focused? Your Voice Is All You Need',
        content:
          'Just say "clip that" and Medal captures the moment instantly - hands-free and distraction-free. Perfect for intense ranked matches in <a href="https://medal.tv/games/valorant">Valorant</a> or <a href="https://medal.tv/games/fortnite">Fortnite</a> when your hands are busy. Insights does not offer voice-activated clipping.',
        image: '/compare/images/medal-editor-demo.gif',
        imageAlt: 'Medal voice command clipping a gaming highlight hands-free',
      },
      {
        title: 'Easily Edit and Share on All Platforms',
        content:
          'Medal gives you an instant link for every clip that embeds on Discord, TikTok, Reddit, and anywhere else - no file uploading, no compression. You can also follow friends, see their clips, and discover clips you are in. Insights focuses on full-session VOD review for coaching, not the quick clip-and-share workflow.',
        video: '/compare/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'The Only Recorder with a Mobile App',
        content:
          'Medal has a full mobile app on iOS and Android so you can record mobile games, browse clips, edit, and share from your phone. Share highlights directly to TikTok, Discord, or anywhere else on the go. Insights is desktop-only with no mobile app.',
        image: '/compare/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app - browse clips, tap to clip, play any mobile game',
      },
      {
        title: 'When Should You Use Insights Instead?',
        content:
          'Medal is the go-to for almost all PC gamers. Insights is a great product for a specific niche - if you are on an esports team with a coach who wants structured VOD review, timeline annotations, performance stats, and team analysis workflows, Insights was built for that. It is also the better pick if you need detailed gameplay analytics to improve your competitive play. <strong class="text-medal-primary">For everything else - clipping highlights, sharing with friends, auto-capturing kills, even finding clips you\'re in - Medal is the faster, simpler tool.</strong>',
      },
    ],
    faqs: [
      {
        question: 'Is Medal free?',
        answer:
          'Yes. Medal is completely free for instant replay, auto-clipping, editing, and sharing. Optional premium features include extra cloud storage and higher quality exports. <a href="https://medal.tv/download">Download Medal</a> and start clipping in under two minutes.',
      },
      {
        question: 'How to auto-clip game highlights with Medal?',
        answer:
          'Just install Medal and play. Medal\'s smart AI auto-clips kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, and 100+ more games. No button press needed.',
      },
      {
        question: 'Can I share my clips to Discord, TikTok, or Reddit from Medal?',
        answer:
          'Yes. Medal generates an instant link for every clip that embeds on Discord, TikTok, Reddit, Twitter, and anywhere else. No file uploading, no compression, no size limits. One click and it is shared.',
      },
      {
        question: 'What games does Medal support?',
        answer:
          'Medal works with every PC game for recording and supports smart auto-clipping in <a href="https://medal.tv/games">100+ games</a> including <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, League of Legends, and more.',
      },
      {
        question: 'How to use Medal on PC, iPhone, or Android?',
        answer:
          'Medal works on Windows, iOS, and Android. <a href="https://medal.tv/download">Download Medal</a> on your PC to record and clip. Install the mobile app to browse, edit, and share clips from your phone. Your clips sync across devices.',
      },
      {
        question: 'How to use Medal and Insights together?',
        answer:
          'Medal and Insights work great together and do not conflict. Use Insights for structured VOD review sessions with your team or coach, and use Medal for capturing and sharing individual highlights throughout your ranked grind. Medal handles the clip-edit-share workflow while Insights handles the analysis side.',
      },
    ],
    verdict:
      "Insights is a solid tool for a specific niche: competitive esports teams running structured coaching sessions, reviewing VODs, and tracking performance stats. But for the vast majority of gamers who want to capture a highlight, make it look good, share it with friends, and discover clips they are in - that is Medal's entire reason for existing. Different tools for different goals, and most gamers need the clipping workflow, not the coaching one. Medal is the better choice with over 15 million gamers already on board.",
  },
];

export interface PlaceholderPage {
  slug: string;
  competitor: string;
}

export const placeholderPages: PlaceholderPage[] = [];

export const allPages = [
  ...allComparisons.map((c) => ({ slug: c.slug, competitor: c.competitor })),
  ...placeholderPages,
];
