export type ChangeEvent = {
  action: string;
  end: { row: number; column: number };
  id: number;
  lines: string[];
  start: { row: number; column: number };
};

type EventEmitterEvent = MouseEvent & ChangeEvent;

type EventEmitter = {
  on: (key: string, cb: (e: EventEmitterEvent) => void) => void;
};

type Command = {
  name: string;
  bindKey: { win: string; mac: string };
  exec: () => Record<string, unknown>;
  scrollIntoView: string;
  readOnly: boolean;
};

export type AceManager = EventEmitter & {
  container: {
    env: {
      document: {
        id: string;
        _eventRegistry: Record<string, unknown>;
        doc: {
          _eventRegistry: {
            change: [() => Record<string, unknown>];
            changeNewLineMode: [];
          };
        };
        selection: {
          start: { row: number; column: number };
          end: { row: number; column: number };
          isBackwards: boolean;
        };
        bgTokenizer: object;
        tokenRe: Record<string, unknown>;
        nonTokenRe: Record<string, unknown>;
        _defaultHandlers: undefined;
        multiSelect: {
          start: { row: number; column: number };
          end: { row: number; column: number };
          isBackwards: boolean;
        };
        screenWidth: number;
      };
      onResize: () => Record<string, unknown>;
    };
  };
  session: {
    id: string;
    getLine: (y: number) => string;
    doc: {
      $newLineMode: string;
      $lines: string[];
    };
    selection: {
      start: { row: number; column: number };
      end: { row: number; column: number };
      isBackwards: boolean;
    };
    bgTokenizer: {
      running: boolean;
      lines: { type: string; value: string }[][];
      states: string[];
      currentLine: number;
      tokenizer: {
        states: {
          start: {
            token: object;
            regex: string;
            tokenArray: string[];
            onMatch: () => Record<string, unknown>;
            splitRegex: Record<string, unknown>;
          }[];
          equation: {
            token: string;
            regex: string;
            onMatch: object;
          }[];
          verbatim: [
            {
              token: object;
              regex: string;
              next: string;
              tokenArray: [string, string, string, string];
              onMatch: () => Record<string, unknown>;
              splitRegex: Record<string, unknown>;
            },
            { defaultToken: string }
          ];
          lstlisting: [
            {
              token: object;
              regex: string;
              next: string;
              tokenArray: [string, string, string, string];
              onMatch: () => Record<string, unknown>;
              splitRegex: Record<string, unknown>;
            },
            { defaultToken: string }
          ];
          'storage.type': [
            {
              token: object;
              regex: string;
              next: string;
              tokenArray: [string, string, string];
              onMatch: () => Record<string, unknown>;
              splitRegex: Record<string, unknown>;
            }
          ];
        };
        regExps: {
          start: Record<string, unknown>;
          equation: Record<string, unknown>;
          verbatim: Record<string, unknown>;
          lstlisting: Record<string, unknown>;
          'storage.type': Record<string, unknown>;
        };
        matchMappings: {
          start: number[];
          equation: number[];
          verbatim: { 0: number; defaultToken: string };
          lstlisting: { 0: number; defaultToken: string };
          'storage.type': {
            0: number;
            defaultToken: string;
          };
        };
      };
      _eventRegistry: { update: [() => Record<string, unknown>] };
    };
    multiSelect: {
      start: { row: number; column: number };
      end: { row: number; column: number };
      isBackwards: boolean;
    };
    curOp: {
      command: Record<string, unknown>;
      args: undefined;
      scrollTop: number;
      selectionBefore: undefined;
      docChanged: boolean;
      selectionChanged: boolean;
      selectionAfter: {
        start: { row: number; column: number };
        end: { row: number; column: number };
        isBackwards: boolean;
      };
    };
    foldWidgets: string[];
    getFoldWidget: () => Record<string, unknown>;
    getFoldWidgetRange: () => Record<string, unknown>;
    _defaultHandlers: Record<string, unknown>;
    screenWidth: number;
  };
  renderer: {
    screenToTextCoordinates: (
      x: number,
      y: number
    ) => {
      row: number;
      column: number;
    };
    $textLayer: {
      $lines: {
        cells: {
          element: HTMLElement;
          text: '';
          row: number;
        }[];
      };
    };
    _eventRegistry: {
      scrollbarVisibilityChanged: [() => Record<string, unknown>];
      changeCharacterSize: [() => Record<string, unknown>];
      resize: [() => Record<string, unknown>];
    };
    _defaultHandlers: Record<string, unknown>;
    theme: {
      isDark: boolean;
      cssClass: string;
      cssText: string;
    };
    scroller: Record<string, unknown>;
    content: Record<string, unknown>;
    canvas: Record<string, unknown>;
    scrollBarV: {
      element: Record<string, unknown>;
      inner: Record<string, unknown>;
      isVisible: boolean;
      coeff: number;
      skipEvent: boolean;
      scrollTop: number;
      scrollHeight: number;
      width: number;
      _eventRegistry: { scroll: [() => Record<string, unknown>] };
      scrollLeft: object;
    };
    scrollBarH: {
      element: Record<string, unknown>;
      inner: Record<string, unknown>;
      isVisible: boolean;
      coeff: number;
      skipEvent: boolean;
      scrollLeft: number;
      height: number;
      _eventRegistry: { scroll: [() => Record<string, unknown>] };
    };
    scrollTop: number;
    scrollLeft: number;
    cursorPos: { row: number; column: number };
    layerConfig: {
      width: number;
      padding: number;
      firstRow: number;
      firstRowScreen: number;
      lastRow: number;
      lineHeight: number;
      characterWidth: number;
      minHeight: number;
      maxHeight: number;
      offset: number;
      gutterOffset: number;
      height: number;
    };
    scrollMargin: {
      left: number;
      right: number;
      top: number;
      bottom: number;
      v: number;
      h: number;
    };
    margin: {
      left: number;
      right: number;
      top: number;
      bottom: number;
      v: number;
      h: number;
    };
    characterWidth: number;
    lineHeight: number;
    textarea: Record<string, unknown>;
    onChangeNewLineMode: () => Record<string, unknown>;
    resizing: number;
    gutterWidth: number;
  };
  id: string;
  commands: {
    platform: string;
    commands: {
      goToNextError: Command;
      goToPreviousError: Command;
      selectall: Command;
      centerselection: Command;
      gotoline: Command;
      fold: Command;
      unfold: Command;
      toggleFoldWidget: Command;
      toggleParentFoldWidget: Command;
      foldAllComments: Command;
      foldOther: Command;
      unfoldall: Command;
      findnext: Command;
      findprevious: Command;
      selectOrFindNext: Command;
      selectOrFindPrevious: Command;
      overwrite: Command;
      selecttostart: Command;
      gotostart: Command;
      selectup: Command;
      golineup: Command;
      selecttoend: Command;
      gotoend: Command;
      selectdown: Command;
      golinedown: Command;
      selectwordleft: Command;
      gotowordleft: Command;
      selecttolinestart: Command;
      gotolinestart: Command;
      selectleft: Command;
      gotoleft: Command;
      selectwordright: Command;
      gotowordright: Command;
      selecttolineend: Command;
      gotolineend: Command;
      selectright: Command;
      gotoright: Command;
      selectpagedown: Command;
      pagedown: Command;
      gotopagedown: Command;
      selectpageup: Command;
      pageup: Command;
      gotopageup: Command;
      scrollup: Command;
      scrolldown: Command;
      selectlinestart: Command;
      selectlineend: Command;
      togglerecording: Command;
      replaymacro: Command;
      jumptomatching: Command;
      selecttomatching: Command;
      expandToMatching: Command;
      passKeysToBrowser: Command;
      copy: Command;
      cut: Command;
      paste: Command;
      removeline: Command;
      duplicateSelection: Command;
      sortlines: Command;
      modifyNumberUp: Command;
      modifyNumberDown: Command;
      replace: Command;
      undo: Command;
      redo: Command;
      copylinesup: Command;
      movelinesup: Command;
      copylinesdown: Command;
      movelinesdown: Command;
      del: Command;
      backspace: Command;
      cut_or_delete: Command;
      removetolinestart: Command;
      removetolineend: Command;
      removetolinestarthard: Command;
      removetolineendhard: Command;
      removewordleft: Command;
      removewordright: Command;
      outdent: Command;
      indent: Command;
      blockoutdent: Command;
      blockindent: Command;
      insertstring: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        scrollIntoView: string;
      };
      inserttext: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        scrollIntoVieew: string;
      };
      splitline: {
        name: string;
        description: string;
        bindKey: { win: object; mac: string };
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        scrollIntoView: string;
      };
      touppercase: Command;
      tolowercase: Command;
      autoindent: {
        name: string;
        description: string;
        bindKey: { win: object; mac: object };
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        scrollIntoView: string;
      };
      expandtoline: Command;
      joinlines: {
        name: string;
        description: string;
        bindKey: { win: object; mac: object };
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        readOnly: boolean;
      };
      invertSelection: {
        name: string;
        description: string;
        bindKey: { win: object; mac: object };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
        scrollIntoView: string;
      };
      addLineAfter: {
        name: string;
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        scrollIntoView: string;
      };
      addLineBefore: {
        name: string;
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        scrollIntoView: string;
      };
      openCommandPallete: Command;
      modeSelect: {
        name: string;
        description: string;
        bindKey: { win: object; mac: object };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      foldToLevel1: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      foldToLevel2: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      foldToLevel3: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      foldToLevel4: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      foldToLevel5: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      foldToLevel6: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      foldToLevel7: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      foldToLevel8: {
        name: string;
        description: string;
        level: number;
        exec: () => Record<string, unknown>;
        scrollIntoView: string;
        readOnly: boolean;
      };
      addCursorAbove: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      addCursorBelow: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      addCursorAboveSkipCurrent: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      addCursorBelowSkipCurrent: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      selectMoreBefore: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      selectMoreAfter: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      selectNextBefore: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      selectNextAfter: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      toggleSplitSelectionIntoLines: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        readOnly: boolean;
      };
      splitSelectionIntoLines: Command;
      alignCursors: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
      };
      findAll: {
        name: string;
        description: string;
        exec: () => Record<string, unknown>;
        bindKey: { win: string; mac: string };
        scrollIntoView: string;
        readOnly: boolean;
      };
      togglecomment: {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        multiSelectAction: string;
        scrollIntoView: string;
      };
      find: {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      bold: {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      italics: {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      startAutocomplete: {
        name: string;
        exec: () => Record<string, unknown>;
        bindKey: string;
      };
      expandSnippet: {
        name: string;
        exec: () => Record<string, unknown>;
        bindKey: string;
      };
      save: {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      recompile_v1: {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      compile: {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      'toggle-review-panel': {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      'add-new-comment': {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
      'toggle-track-changes': {
        name: string;
        bindKey: { win: string; mac: string };
        exec: () => Record<string, unknown>;
        readOnly: boolean;
      };
    };
    commandKeyBinding: {
      'shift-end': [null, null];
      tab: [null, null];
    };
    _defaultHandlers: {
      _disabled_: Record<string, unknown>;
      exec: () => Record<string, unknown>;
    };
    _eventRegistry: {
      exec: [
        () => Record<string, unknown>,
        () => Record<string, unknown>,
        () => Record<string, unknown>
      ];
      afterExec: [() => Record<string, unknown>];
    };
  };
  _eventRegistry: {
    beforeEndOperation: [() => Record<string, unknown>];
    changeSession: [
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>
    ];
    mousedown: [() => Record<string, unknown>, () => Record<string, unknown>];
    mousemove: [() => Record<string, unknown>, () => Record<string, unknown>];
    click: [() => Record<string, unknown>];
    gutterclick: [() => Record<string, unknown>];
    gutterdblclick: [() => Record<string, unknown>];
    change: [
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>,
      () => Record<string, unknown>
    ];
    changeSelection: [
      () => Record<string, unknown>,
      () => Record<string, unknown>
    ];
    destroy: [() => Record<string, unknown>];
    changeMode: [() => Record<string, unknown>];
    nativecontextmenu: [() => Record<string, unknown>];
    cut: [() => Record<string, unknown>];
    paste: [() => Record<string, unknown>];
  };
  textInput: {
    focus: () => Record<string, unknown>;
    blur: () => Record<string, unknown>;
    isFocused: () => Record<string, unknown>;
    resetSelection: () => Record<string, unknown>;
    setInputHandler: () => Record<string, unknown>;
    getInputHandler: () => Record<string, unknown>;
    getElement: () => Record<string, unknown>;
    setCommandMode: () => Record<string, unknown>;
    setReadOnly: () => Record<string, unknown>;
    setCopyWithEmptySelection: () => Record<string, unknown>;
    onContextMenu: () => Record<string, unknown>;
    moveToMouse: () => Record<string, unknown>;
    onContextMenuClose: () => Record<string, unknown>;
  };
  _defaultHandlers: {
    _disabled_: Record<string, unknown>;
    mousedown: () => Record<string, unknown>;
    dblclick: () => Record<string, unknown>;
    tripleclick: () => Record<string, unknown>;
    quadclick: () => Record<string, unknown>;
    mousewheel: () => Record<string, unknown>;
    guttermousedown: () => Record<string, unknown>;
    guttermousemove: () => Record<string, unknown>;
  };
  keyBinding: Record<string, unknown>;
  _$emitInputEvent: () => Record<string, unknown>;
  curOp: object;
  selection: {
    start: { row: number; column: number };
    end: { row: number; column: number };
    isBackwards: boolean;
  };
  multiSelect: {
    start: { row: number; column: number };
    end: { row: number; column: number };
    isBackwards: boolean;
  };
  showCommandLine: () => Record<string, unknown>;
  completers: [
    {
      metadataManager: {
        element: {
          0: {
            jQuery22406981891923722492: Record<string, unknown>;
          };
          length: number;
        };
        debouncer: Record<string, unknown>;
      };
    },
    Record<string, unknown>,
    Record<string, unknown>,
    { getCompletions: () => Record<string, unknown> },
    { getCompletions: () => Record<string, unknown> },
    { getCompletions: () => Record<string, unknown> },
    { getCompletions: () => Record<string, unknown> }
  ];
  initing: boolean;
  previousCommand: object;
};
