import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  intro: ['index', 'tos', 'privacy', 'trademark', 'thanks', 'contact'],
  discord: [
    'discord/index',
    {
      type: 'category',
      label: 'JSTimerBot',
      link: {
        type: 'doc',
        id: 'discord/timer/index'
      },
      items: [
        'discord/timer/index',
        'discord/timer/changelog',
        'discord/timer/channel',
        'discord/timer/mention',
        {
          type: 'category',
          label: 'コマンド',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'discord/timer/commands/index'
          },
          items: [
            'discord/timer/commands/set',
            'discord/timer/commands/repeat',
            'discord/timer/commands/cancel',
            'discord/timer/commands/list',
            'discord/timer/commands/test'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '[非公式] 整地鯖Bot',
      link: {
        type: 'doc',
        id: 'discord/seichi/index'
      },
      items: [
        'discord/seichi/index',
        'discord/seichi/changelog',
        {
          type: 'category',
          label: 'コマンド',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'discord/seichi/commands/index'
          },
          items: [
            'discord/seichi/commands/ranking',
            'discord/seichi/commands/filter',
            'discord/seichi/commands/player',
            'discord/seichi/commands/map',
            'discord/seichi/commands/crop',
            'discord/seichi/commands/playerlist',
            'discord/seichi/commands/search',
            'discord/seichi/commands/schedule'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '4Tunes',
      link: {
        type: 'doc',
        id: 'discord/4tunes/index'
      },
      items: [
        'discord/4tunes/index',
        {
          type: 'category',
          label: '変更履歴',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'discord/4tunes/changelog/index'
          },
          items: [
            'discord/4tunes/changelog/v2',
            'discord/4tunes/changelog/v1',
            'discord/4tunes/changelog/v0'
          ]
        },
        {
          type: 'category',
          label: 'コマンド',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'discord/4tunes/commands/index'
          },
          items: [
            'discord/4tunes/commands/avatar',
            'discord/4tunes/commands/color',
            'discord/4tunes/commands/daily',
            'discord/4tunes/commands/delete',
            'discord/4tunes/commands/ping',
            'discord/4tunes/commands/point',
            'discord/4tunes/commands/random',
            'discord/4tunes/commands/ranking',
            'discord/4tunes/commands/rolepanel',
            'discord/4tunes/commands/settings',
            'discord/4tunes/commands/snowflake',
            'discord/4tunes/commands/status'
          ]
        },
        {
          type: 'category',
          label: '機能',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'discord/4tunes/functions/index'
          },
          items: [
            'discord/4tunes/functions/calculator',
            'discord/4tunes/functions/quote',
            'discord/4tunes/functions/leveling',
            'discord/4tunes/functions/logging',
            'discord/4tunes/functions/role-panel'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'poker',
      link: {
        type: 'doc',
        id: 'discord/poker/index'
      },
      items: [
        'discord/poker/index'
      ]
    },
    {
      type: 'category',
      label: 'voice',
      link: {
        type: 'doc',
        id: 'discord/voice/index'
      },
      items: [
        'discord/voice/index'
      ]
    }
  ],
  api: [
    'api/index',
    {
      type: 'category',
      label: '整地鯖Bot',
      link: {
        type: 'doc',
        id: 'api/seichi/index'
      },
      collapsed: false,
      items: [
        'api/seichi/search',
        'api/seichi/ranking',
        'api/seichi/player-ranking',
        'api/seichi/player-data',
      ]
    }
  ],
  vrchat: [
    'vrchat/index',
    'vrchat/v-suitch/index'
  ]
};

export default sidebars;
