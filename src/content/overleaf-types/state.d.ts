type OverleafState = {
  queuedHttp: () => Record<string, unknown>;
  globalEditorWatchdogManager: {
    scope: string;
    timeout: number;
    parent: undefined;
    reporter: {
      _onTimeoutHandler: () => Record<string, unknown>;
      _lastReport: undefined;
      _queue: [];
    };
    lastAck: object;
    lastUnackedEdit: object;
  };
  pushEvent: () => Record<string, unknown>;
  reportError: () => Record<string, unknown>;
  showGenericMessageModal: () => Record<string, unknown>;
  showOutOfSyncModal: () => Record<string, unknown>;
  showLockEditorMessageModal: () => Record<string, unknown>;
  toggleReviewPanel: () => Record<string, unknown>;
  validFileRegex: string;
  wsUrl: object;
  project_id: string;
  referencesSearchManager: {
    state: { keys: [] };
    existingIndexHash: Record<string, unknown>;
    inited: boolean;
  };
  loadingManager: { resolveSocketPromise: () => Record<string, unknown> };
  socket: {
    _socket: {
      socket: {
        options: {
          port: number;
          secure: boolean;
          document: {
            location: {
              ancestorOrigins: Record<string, unknown>;
              href: string;
              origin: string;
              protocol: string;
              host: string;
              hostname: string;
              port: string;
              pathname: string;
              search: string;
              hash: string;
              assign: () => Record<string, unknown>;
              reload: () => Record<string, unknown>;
              replace: () => Record<string, unknown>;
              toString: () => Record<string, unknown>;
            };
            jQuery22406981891923722491: {
              events: {
                keypress: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                keydown: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                mouseup: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                visibilitychange: [
                  {
                    type: string;
                    origType: string;
                    data: undefined;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                click: [
                  {
                    type: string;
                    origType: string;
                    data: undefined;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: undefined;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                keyup: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                contextmenu: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
              };
              handle: () => Record<string, unknown>;
            };
            __reactEvents$ctn8he3zo9a: Record<string, unknown>;
          };
          resource: string;
          transports: [string, string, string, string, string];
          'connect timeout': number;
          'try multiple transports': boolean;
          reconnect: boolean;
          'reconnection delay': number;
          'reconnection limit': number;
          'reopen delay': number;
          'max reconnection attempts': number;
          'sync disconnect on unload': boolean;
          'auto connect': boolean;
          'flash policy port': number;
          manualFlush: boolean;
          host: string;
          query: string;
          'force new connection': boolean;
        };
        connected: boolean;
        open: boolean;
        connecting: boolean;
        reconnecting: boolean;
        namespaces: Record<string, unknown>;
        buffer: [];
        doBuffer: boolean;
        sessionid: string;
        closeTimeout: number;
        heartbeatTimeout: number;
        origTransports: [string, string, string, string, string];
        heartbeatTimeoutTimer: number;
        transport: {
          sessid: string;
          websocket: Record<string, unknown>;
          isOpen: boolean;
          closeTimeout: number;
        };
        connectTimeoutTimer: number;
      };
      name: string;
      flags: Record<string, unknown>;
      json: { name: string };
      ackPackets: number;
      acks: Record<string, unknown>;
    };
    publicId: string;
  };
  connectionManager: {
    wsUrl: object;
    userIsLeavingPage: boolean;
    connected: boolean;
    userIsInactive: boolean;
    gracefullyReconnecting: boolean;
    shuttingDown: boolean;
    joinProjectRetryInterval: number;
    lastUserAction: string;
  };
  fileTreeManager: { selected_entity_id: string };
  editorManager: {
    editorOpenDocEpoch: number;
    localStorage: () => Record<string, unknown>;
  };
  onlineUsersManager: { cursorUpdateInterval: number };
  historyManager: Record<string, unknown>;
  pdfManager: Record<string, unknown>;
  permissionsManager: Record<string, unknown>;
  binaryFilesManager: Record<string, unknown>;
  metadataManager: {
    metadata: {
      state: {
        documents: {
          [key: string]: {
            labels: [];
            packages: {
              inputenc: [
                {
                  caption: string;
                  snippet: string;
                  meta: string;
                  score: number;
                }
              ];
            };
          };
        };
      };
      onBroadcastDocMeta: () => Record<string, unknown>;
      onEntityDeleted: () => Record<string, unknown>;
      onFileUploadComplete: () => Record<string, unknown>;
      getAllLabels: () => Record<string, unknown>;
      getAllPackages: () => Record<string, unknown>;
      loadProjectMetaFromServer: () => Record<string, unknown>;
      loadDocMetaFromServer: () => Record<string, unknown>;
      scheduleLoadDocMetaFromServer: () => Record<string, unknown>;
    };
  };
  outlineManager: {
    scope: {
      state: {
        loading: boolean;
        load_progress: number;
        error: object;
      };
      ui: {
        leftMenuShown: boolean;
        view: string;
        chatOpen: boolean;
        pdfLayout: string;
        pdfHidden: boolean;
        pdfWidth: number;
        reviewPanelOpen: object;
        miniReviewPanelVisible: boolean;
        chatResizerSizeOpen: number;
        chatResizerSizeClosed: number;
      };
      user: {
        id: string;
        email: string;
        first_name: string;
        last_name: string;
        referal_id: string;
        signUpDate: string;
        allowedFreeTrial: boolean;
        features: {
          collaborators: number;
          versioning: boolean;
          dropbox: boolean;
          github: boolean;
          gitBridge: boolean;
          compileTimeout: number;
          compileGroup: string;
          templates: boolean;
          references: boolean;
          trackChanges: boolean;
        };
        refProviders: { mendeley: boolean; zotero: boolean };
        alphaProgram: boolean;
        betaProgram: boolean;
        isAdmin: boolean;
      };
      settings: {
        mode: string;
        editorTheme: string;
        fontSize: number;
        autoComplete: boolean;
        autoPairDelimiters: boolean;
        pdfViewer: string;
        syntaxValidation: boolean;
        fontFamily: string;
        lineHeight: string;
        overallTheme: string;
      };
      anonymous: boolean;
      isTokenMember: boolean;
      isRestrictedTokenMember: boolean;
      cobranding: {
        isProjectCobranded: boolean;
        logoImgUrl: undefined;
        submitBtnHtml: undefined;
        brandVariationName: undefined;
        brandVariationHomeUrl: undefined;
      };
      chat: Record<string, unknown>;
      toggleReviewPanel: () => Record<string, unknown>;
      trackHover: () => Record<string, unknown>;
      project_id: string;
      connection: {
        debug: object;
        reconnecting: boolean;
        stillReconnecting: boolean;
        forced_disconnect: boolean;
        inactive_disconnect: boolean;
        jobId: number;
        state: string;
        joining: boolean;
        reconnection_countdown: object;
      };
      tryReconnectNow: () => Record<string, unknown>;
      multiSelectedCount: number;
      editor: {
        sharejs_doc: {
          doc_id: string;
          connected: boolean;
          joined: boolean;
          wantToBeJoined: boolean;
          _checkAceConsistency: () => Record<string, unknown>;
          _checkCMConsistency: () => Record<string, unknown>;
          _unsubscribeReconnectHandler: () => Record<string, unknown>;
          _onUpdateAppliedHandler: () => Record<string, unknown>;
          _onErrorHandler: () => Record<string, unknown>;
          _onDisconnectHandler: () => Record<string, unknown>;
          doc: {
            doc_id: string;
            type: string;
            track_changes: boolean;
            connection: {
              send: () => Record<string, unknown>;
              state: string;
              id: string;
            };
            _doc: {
              flush: () => Record<string, unknown>;
              setFlushDelay: () => Record<string, unknown>;
              shout: () => Record<string, unknown>;
              name: string;
              version: number;
              snapshot: string;
              type: {
                name: string;
                create: () => Record<string, unknown>;
                apply: () => Record<string, unknown>;
                _append: () => Record<string, unknown>;
                compose: () => Record<string, unknown>;
                compress: () => Record<string, unknown>;
                normalize: () => Record<string, unknown>;
                transformCursor: () => Record<string, unknown>;
                _tc: () => Record<string, unknown>;
                invert: () => Record<string, unknown>;
                transformX: () => Record<string, unknown>;
                transform: () => Record<string, unknown>;
                api: {
                  provides: { text: boolean };
                  getLength: () => Record<string, unknown>;
                  getText: () => Record<string, unknown>;
                  insert: () => Record<string, unknown>;
                  del: () => Record<string, unknown>;
                  _register: () => Record<string, unknown>;
                };
              };
              getLength: () => Record<string, unknown>;
              getText: () => Record<string, unknown>;
              insert: () => Record<string, unknown>;
              del: () => Record<string, unknown>;
              _register: () => Record<string, unknown>;
              _events: {
                remoteop: [
                  () => Record<string, unknown>,
                  () => Record<string, unknown>
                ];
                change: [() => Record<string, unknown>];
                acknowledge: [() => Record<string, unknown>];
                flipped_pending_to_inflight: [() => Record<string, unknown>];
                saved: [() => Record<string, unknown>];
                error: [() => Record<string, unknown>];
                insert: [() => Record<string, unknown>];
                delete: [() => Record<string, unknown>];
              };
              state: string;
              autoOpen: boolean;
              _create: boolean;
              inflightOp: object;
              inflightCallbacks: [];
              inflightSubmittedIds: [];
              pendingOp: object;
              pendingCallbacks: [];
              serverOps: Record<string, unknown>;
              _flushDelay: number;
              submitOp: () => Record<string, unknown>;
              created: boolean;
              flushTimeout: object;
              detach_ace: () => Record<string, unknown>;
            };
            EditorWatchdogManager: {
              scope: string;
              timeout: number;
              lastAck: object;
              lastUnackedEdit: object;
            };
            events: {
              error: [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              externalUpdate: [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              remoteop: [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              'op:sent': [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              'op:acknowledged': [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              'op:timeout': [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              flush: [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              change: [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              flipped_pending_to_inflight: [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
              saved: [
                {
                  callback: () => Record<string, unknown>;
                  namespace: undefined;
                }
              ];
            };
            track_changes_id_seeds: {
              pending: string;
              inflight: string;
            };
            _detachEditorWatchdogManager: () => Record<string, unknown>;
          };
          ranges: {
            changes: [];
            comments: [];
            id_seed: string;
            id_increment: number;
            _dirtyState: {
              comment: {
                moved: Record<string, unknown>;
                removed: Record<string, unknown>;
                added: Record<string, unknown>;
              };
              change: {
                moved: Record<string, unknown>;
                removed: Record<string, unknown>;
                added: Record<string, unknown>;
              };
            };
            resolvedThreadIds: Record<string, unknown>;
          };
          events: {
            error: [
              { callback: () => Record<string, unknown>; namespace: undefined }
            ];
            externalUpdate: [
              { callback: () => Record<string, unknown>; namespace: undefined }
            ];
            flipped_pending_to_inflight: [
              { callback: () => Record<string, unknown>; namespace: undefined }
            ];
            'ranges:dirty': [
              { callback: () => Record<string, unknown>; namespace: undefined }
            ];
            'ranges:clear': [
              { callback: () => Record<string, unknown>; namespace: undefined }
            ];
            'ranges:redraw': [
              { callback: () => Record<string, unknown>; namespace: undefined }
            ];
          };
          track_changes_as: object;
          ace: {
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
            renderer: {
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
              session: {
                id: string;
                _eventRegistry: {
                  changeFold: [
                    () => Record<string, unknown>,
                    () => Record<string, unknown>
                  ];
                  change: [
                    () => Record<string, unknown>,
                    () => Record<string, unknown>,
                    () => Record<string, unknown>,
                    () => Record<string, unknown>,
                    () => Record<string, unknown>
                  ];
                  changeMode: [() => Record<string, unknown>];
                  tokenizerUpdate: [
                    () => Record<string, unknown>,
                    () => Record<string, unknown>
                  ];
                  changeTabSize: [() => Record<string, unknown>];
                  changeWrapLimit: [() => Record<string, unknown>];
                  changeWrapMode: [() => Record<string, unknown>];
                  changeFrontMarker: [() => Record<string, unknown>];
                  changeBackMarker: [() => Record<string, unknown>];
                  changeBreakpoint: [() => Record<string, unknown>];
                  changeAnnotation: [
                    () => Record<string, unknown>,
                    () => Record<string, unknown>
                  ];
                  changeOverwrite: [() => Record<string, unknown>];
                  changeScrollTop: [
                    () => Record<string, unknown>,
                    () => Record<string, unknown>,
                    () => Record<string, unknown>,
                    () => Record<string, unknown>,
                    () => Record<string, unknown>,
                    () => Record<string, unknown>
                  ];
                  changeScrollLeft: [() => Record<string, unknown>];
                };
                doc: {
                  _eventRegistry: {
                    change: [
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>,
                      () => Record<string, unknown>
                    ];
                    changeNewLineMode: [() => Record<string, unknown>];
                  };
                };
                selection: {
                  start: { row: number; column: number };
                  end: { row: number; column: number };
                  isBackwards: boolean;
                };
                bgTokenizer: {
                  running: boolean;
                  lines: [
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [],
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [],
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [],
                    [{ type: string; value: string }],
                    [],
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [],
                    [
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string },
                      { type: string; value: string }
                    ],
                    [],
                    object
                  ];
                  states: [
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string
                  ];
                  currentLine: number;
                  tokenizer: {
                    states: {
                      start: [
                        {
                          token: string;
                          regex: string;
                          onMatch: object;
                        },
                        {
                          token: object;
                          regex: string;
                          tokenArray: [
                            string,
                            string,
                            string,
                            string,
                            string,
                            string,
                            string
                          ];
                          onMatch: () => Record<string, unknown>;
                          splitRegex: Record<string, unknown>;
                        },
                        {
                          token: object;
                          regex: string;
                          tokenArray: [string, string, string, string];
                          onMatch: () => Record<string, unknown>;
                          splitRegex: Record<string, unknown>;
                        },
                        {
                          token: object;
                          regex: string;
                          next: string;
                          tokenArray: [string, string, string, string];
                          onMatch: () => Record<string, unknown>;
                          splitRegex: Record<string, unknown>;
                        },
                        {
                          token: object;
                          regex: string;
                          next: string;
                          tokenArray: [string, string, string, string];
                          onMatch: () => Record<string, unknown>;
                          splitRegex: Record<string, unknown>;
                        },
                        {
                          token: object;
                          regex: string;
                          tokenArray: [string, string, string, string];
                          onMatch: () => Record<string, unknown>;
                          splitRegex: Record<string, unknown>;
                        },
                        {
                          token: string;
                          regex: string;
                          next: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          next: string;
                          onMatch: object;
                        }
                      ];
                      equation: [
                        {
                          token: string;
                          regex: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          next: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          onMatch: object;
                        },
                        {
                          token: string;
                          regex: string;
                          next: string;
                          onMatch: object;
                        },
                        { defaultToken: string }
                      ];
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
                      start: {
                        0: number;
                        1: number;
                        2: number;
                        3: number;
                        4: number;
                        5: number;
                        6: number;
                        7: number;
                        8: number;
                        9: number;
                        10: number;
                        11: number;
                        defaultToken: string;
                      };
                      equation: {
                        0: number;
                        1: number;
                        2: number;
                        3: number;
                        defaultToken: string;
                      };
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
                foldWidgets: [
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string
                ];
                getFoldWidget: () => Record<string, unknown>;
                getFoldWidgetRange: () => Record<string, unknown>;
                _defaultHandlers: Record<string, unknown>;
                screenWidth: number;
              };
              onChangeNewLineMode: () => Record<string, unknown>;
              resizing: number;
              gutterWidth: number;
            };
            id: string;
            commands: {
              platform: string;
              commands: {
                goToNextError: {
                  name: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                goToPreviousError: {
                  name: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectall: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                centerselection: {
                  name: string;
                  description: string;
                  bindKey: { win: object; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                gotoline: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                fold: {
                  name: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                unfold: {
                  name: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                toggleFoldWidget: {
                  name: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                toggleParentFoldWidget: {
                  name: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                foldAllComments: {
                  name: string;
                  description: string;
                  bindKey: { win: object; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                foldOther: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                unfoldall: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                findnext: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                findprevious: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectOrFindNext: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                selectOrFindPrevious: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                overwrite: {
                  name: string;
                  description: string;
                  bindKey: string;
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                selecttostart: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  readOnly: boolean;
                  scrollIntoView: string;
                  aceCommandGroup: string;
                };
                gotostart: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  readOnly: boolean;
                  scrollIntoView: string;
                  aceCommandGroup: string;
                };
                selectup: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                golineup: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selecttoend: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  readOnly: boolean;
                  scrollIntoView: string;
                  aceCommandGroup: string;
                };
                gotoend: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  readOnly: boolean;
                  scrollIntoView: string;
                  aceCommandGroup: string;
                };
                selectdown: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                golinedown: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectwordleft: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                gotowordleft: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selecttolinestart: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                gotolinestart: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectleft: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                gotoleft: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectwordright: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                gotowordright: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selecttolineend: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                gotolineend: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectright: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                gotoright: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectpagedown: {
                  name: string;
                  description: string;
                  bindKey: string;
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                pagedown: {
                  name: string;
                  description: string;
                  bindKey: { win: object; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                gotopagedown: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                selectpageup: {
                  name: string;
                  description: string;
                  bindKey: string;
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                pageup: {
                  name: string;
                  description: string;
                  bindKey: { win: object; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                gotopageup: {
                  name: string;
                  description: string;
                  bindKey: string;
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                scrollup: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: object };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                scrolldown: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: object };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                selectlinestart: {
                  name: string;
                  description: string;
                  bindKey: string;
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selectlineend: {
                  name: string;
                  description: string;
                  bindKey: string;
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                togglerecording: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                replaymacro: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                jumptomatching: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                selecttomatching: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                expandToMatching: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
                passKeysToBrowser: {
                  name: string;
                  description: string;
                  bindKey: { win: object; mac: object };
                  exec: () => Record<string, unknown>;
                  passEvent: boolean;
                  readOnly: boolean;
                };
                copy: {
                  name: string;
                  description: string;
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
                cut: {
                  name: string;
                  description: string;
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  multiSelectAction: string;
                };
                paste: {
                  name: string;
                  description: string;
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                };
                removeline: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  multiSelectAction: string;
                };
                duplicateSelection: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  multiSelectAction: string;
                };
                sortlines: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  multiSelectAction: string;
                };
                modifyNumberUp: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  multiSelectAction: string;
                };
                modifyNumberDown: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                  multiSelectAction: string;
                };
                replace: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                };
                undo: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                };
                redo: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                };
                copylinesup: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                };
                movelinesup: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                };
                copylinesdown: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                };
                movelinesdown: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  scrollIntoView: string;
                };
                del: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                backspace: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                cut_or_delete: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: object };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                removetolinestart: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                removetolineend: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                removetolinestarthard: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: object };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                removetolineendhard: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: object };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                removewordleft: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                removewordright: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                outdent: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                indent: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                blockoutdent: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                blockindent: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
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
                  scrollIntoView: string;
                };
                splitline: {
                  name: string;
                  description: string;
                  bindKey: { win: object; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                touppercase: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                tolowercase: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                autoindent: {
                  name: string;
                  description: string;
                  bindKey: { win: object; mac: object };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                };
                expandtoline: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  multiSelectAction: string;
                  scrollIntoView: string;
                  readOnly: boolean;
                };
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
                openCommandPallete: {
                  name: string;
                  description: string;
                  bindKey: { win: string; mac: string };
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
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
                splitSelectionIntoLines: {
                  name: string;
                  description: string;
                  exec: () => Record<string, unknown>;
                  readOnly: boolean;
                };
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
              mousedown: [
                () => Record<string, unknown>,
                () => Record<string, unknown>
              ];
              mousemove: [
                () => Record<string, unknown>,
                () => Record<string, unknown>
              ];
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
                    0: { jQuery22406981891923722492: Record<string, unknown> };
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
          oldInflightOp: object;
        };
        open_doc_id: string;
        open_doc_name: string;
        opening: boolean;
        trackChanges: boolean;
        wantTrackChanges: boolean;
        showRichText: boolean;
        showSymbolPalette: boolean;
        toggleSymbolPalette: () => Record<string, unknown>;
        insertSymbol: () => Record<string, unknown>;
      };
      onlineUsers: Record<string, unknown>;
      onlineUserCursorHighlights: Record<string, unknown>;
      onlineUsersArray: [];
      onlineUsersCount: number;
      getHueForUserId: () => Record<string, unknown>;
      history: {
        updates: [];
        nextBeforeTimestamp: object;
        atEnd: boolean;
        selection: {
          updates: [];
          doc: object;
          range: {
            fromV: object;
            toV: object;
            start_ts: object;
            end_ts: object;
          };
        };
        diff: object;
      };
      toggleHistory: () => Record<string, unknown>;
      pdf: {
        url: string;
        error: boolean;
        timeout: boolean;
        failure: boolean;
        compiling: boolean;
        uncompiled: boolean;
        logEntries: {
          all: [];
          errors: [];
          warnings: [];
          typesetting: [];
        };
        logEntryAnnotations: Record<string, unknown>;
        rawLog: string;
        validation: Record<string, unknown>;
        view: string;
        showRawLog: boolean;
        highlights: [];
        position: object;
        lastCompileTimestamp: number;
        clearingCache: boolean;
        isAutoCompileOnLoad: boolean;
        timedout: boolean;
        updateConsumedBandwidth: () => Record<string, unknown>;
        firstRenderDone: () => Record<string, unknown>;
        clsiMaintenance: boolean;
        tooRecentlyCompiled: boolean;
        renderingError: boolean;
        projectTooLarge: boolean;
        compileTerminated: boolean;
        compileExited: boolean;
        failedCheck: boolean;
        compileInProgress: boolean;
        autoCompileDisabled: boolean;
        downloadUrl: string;
        outputFiles: [
          {
            name: string;
            url: string;
            main: boolean;
            fileName: string;
            type: string;
          },
          {
            name: string;
            url: string;
            main: boolean;
            fileName: string;
            type: string;
          },
          {
            name: string;
            url: string;
            main: boolean;
            fileName: string;
            type: string;
          },
          {
            name: string;
            url: string;
            main: boolean;
            fileName: string;
            type: string;
          },
          {
            name: string;
            url: string;
            main: boolean;
            fileName: string;
            type: string;
          },
          {
            name: string;
            url: string;
            main: boolean;
            fileName: string;
            type: string;
          },
          {
            name: string;
            url: string;
            main: boolean;
            fileName: string;
            type: string;
          }
        ];
      };
      permissions: {
        read: boolean;
        write: boolean;
        admin: boolean;
        comment: boolean;
      };
      darkTheme: boolean;
      switchToFlatLayout: () => Record<string, unknown>;
      switchToSideBySideLayout: () => Record<string, unknown>;
      recompile: () => Record<string, unknown>;
      recompileViaKey: () => Record<string, unknown>;
      protocolVersion: number;
      project: {
        rootDoc_id: string;
        _id: string;
        name: string;
        rootFolder: [OverleafFolder];
        publicAccesLevel: string;
        dropboxEnabled: boolean;
        compiler: string;
        description: string;
        spellCheckLanguage: string;
        deletedByExternalDataSource: boolean;
        deletedDocs: [];
        members: [];
        invites: [];
        imageName: string;
        owner: {
          _id: string;
          first_name: string;
          last_name: string;
          email: string;
          privileges: string;
          signUpDate: string;
        };
        features: {
          trackChanges: boolean;
          references: boolean;
          templates: boolean;
          compileGroup: string;
          compileTimeout: number;
          dropbox: boolean;
          versioning: boolean;
          collaborators: number;
          gitBridge: boolean;
          github: boolean;
          referencesSearch: boolean;
          mendeley: boolean;
          trackChangesVisible: boolean;
        };
        trackChangesState: boolean;
      };
      permissionsLevel: string;
      rootFolder: never;
      deletedDocs: [];
      docs: [{ path: string }];
      currentPosition: { row: number; column: number };
    };
    isTexFile: boolean;
    flatOutline: [{ line: number; title: string; level: number }];
    outline: [null];
    highlightedLine: object;
    ignoreNextScroll: boolean;
    ignoreNextCursorUpdate: boolean;
  };
  localStorage: () => Record<string, unknown>;
  browserIsSafari: boolean;
  featureToggle: undefined;
  compileGroup: string;
};
