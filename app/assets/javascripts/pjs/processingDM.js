(function (D, d, q, t) {
    var G = function () {};
    var s = function () {
        if ("console" in D) {
            return function (N) {
                D.console.log("Processing.js: " + N)
            }
        }
        return G
    }();
    var w = function (N) {
        var O = new XMLHttpRequest;
        O.open("GET", N, false);
        if (O.overrideMimeType) {
            O.overrideMimeType("text/plain")
        }
        O.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
        O.send(null);
        if (O.status !== 200 && O.status !== 0) {
            throw "XMLHttpRequest failed, status code " + O.status
        }
        return O.responseText
    };
    var n = "document" in this && !("fake" in this.document);
    d.head = d.head || d.getElementsByTagName("head")[0];

    function C(N, O) {
        if (N in D) {
            return D[N]
        }
        if (typeof D[O] === "function") {
            return D[O]
        }
        return function (Q) {
            if (Q instanceof Array) {
                return Q
            }
            if (typeof Q === "number") {
                var P = [];
                P.length = Q;
                return P
            }
        }
    }
    if (d.documentMode >= 9 && !d.doctype) {
        throw "The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>"
    }
    var e = C("Float32Array", "WebGLFloatArray"),
        K = C("Int32Array", "WebGLIntArray"),
        y = C("Uint16Array", "WebGLUnsignedShortArray"),
        b = C("Uint8Array", "WebGLUnsignedByteArray");
    var B = {
        X: 0,
        Y: 1,
        Z: 2,
        R: 3,
        G: 4,
        B: 5,
        A: 6,
        U: 7,
        V: 8,
        NX: 9,
        NY: 10,
        NZ: 11,
        EDGE: 12,
        SR: 13,
        SG: 14,
        SB: 15,
        SA: 16,
        SW: 17,
        TX: 18,
        TY: 19,
        TZ: 20,
        VX: 21,
        VY: 22,
        VZ: 23,
        VW: 24,
        AR: 25,
        AG: 26,
        AB: 27,
        DR: 3,
        DG: 4,
        DB: 5,
        DA: 6,
        SPR: 28,
        SPG: 29,
        SPB: 30,
        SHINE: 31,
        ER: 32,
        EG: 33,
        EB: 34,
        BEEN_LIT: 35,
        VERTEX_FIELD_COUNT: 36,
        P2D: 1,
        JAVA2D: 1,
        WEBGL: 2,
        P3D: 2,
        OPENGL: 2,
        PDF: 0,
        DXF: 0,
        OTHER: 0,
        WINDOWS: 1,
        MAXOSX: 2,
        LINUX: 3,
        EPSILON: 0.0001,
        MAX_FLOAT: 3.4028235e+38,
        MIN_FLOAT: -3.4028235e+38,
        MAX_INT: 2147483647,
        MIN_INT: -2147483648,
        PI: q.PI,
        TWO_PI: 2 * q.PI,
        HALF_PI: q.PI / 2,
        THIRD_PI: q.PI / 3,
        QUARTER_PI: q.PI / 4,
        DEG_TO_RAD: q.PI / 180,
        RAD_TO_DEG: 180 / q.PI,
        WHITESPACE: " \t\n\r\u000c\u00a0",
        RGB: 1,
        ARGB: 2,
        HSB: 3,
        ALPHA: 4,
        CMYK: 5,
        TIFF: 0,
        TARGA: 1,
        JPEG: 2,
        GIF: 3,
        BLUR: 11,
        GRAY: 12,
        INVERT: 13,
        OPAQUE: 14,
        POSTERIZE: 15,
        THRESHOLD: 16,
        ERODE: 17,
        DILATE: 18,
        REPLACE: 0,
        BLEND: 1 << 0,
        ADD: 1 << 1,
        SUBTRACT: 1 << 2,
        LIGHTEST: 1 << 3,
        DARKEST: 1 << 4,
        DIFFERENCE: 1 << 5,
        EXCLUSION: 1 << 6,
        MULTIPLY: 1 << 7,
        SCREEN: 1 << 8,
        OVERLAY: 1 << 9,
        HARD_LIGHT: 1 << 10,
        SOFT_LIGHT: 1 << 11,
        DODGE: 1 << 12,
        BURN: 1 << 13,
        ALPHA_MASK: 4278190080,
        RED_MASK: 16711680,
        GREEN_MASK: 65280,
        BLUE_MASK: 255,
        CUSTOM: 0,
        ORTHOGRAPHIC: 2,
        PERSPECTIVE: 3,
        POINT: 2,
        POINTS: 2,
        LINE: 4,
        LINES: 4,
        TRIANGLE: 8,
        TRIANGLES: 9,
        TRIANGLE_STRIP: 10,
        TRIANGLE_FAN: 11,
        QUAD: 16,
        QUADS: 16,
        QUAD_STRIP: 17,
        POLYGON: 20,
        PATH: 21,
        RECT: 30,
        ELLIPSE: 31,
        ARC: 32,
        SPHERE: 40,
        BOX: 41,
        GROUP: 0,
        PRIMITIVE: 1,
        GEOMETRY: 3,
        VERTEX: 0,
        BEZIER_VERTEX: 1,
        CURVE_VERTEX: 2,
        BREAK: 3,
        CLOSESHAPE: 4,
        OPEN: 1,
        CLOSE: 2,
        CORNER: 0,
        CORNERS: 1,
        RADIUS: 2,
        CENTER_RADIUS: 2,
        CENTER: 3,
        DIAMETER: 3,
        CENTER_DIAMETER: 3,
        BASELINE: 0,
        TOP: 101,
        BOTTOM: 102,
        NORMAL: 1,
        NORMALIZED: 1,
        IMAGE: 2,
        MODEL: 4,
        SHAPE: 5,
        SQUARE: "butt",
        ROUND: "round",
        PROJECT: "square",
        MITER: "miter",
        BEVEL: "bevel",
        AMBIENT: 0,
        DIRECTIONAL: 1,
        SPOT: 3,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 10,
        RETURN: 13,
        ESC: 27,
        DELETE: 127,
        CODED: 65535,
        SHIFT: 16,
        CONTROL: 17,
        ALT: 18,
        CAPSLK: 20,
        PGUP: 33,
        PGDN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLK: 144,
        META: 157,
        INSERT: 155,
        ARROW: "default",
        CROSS: "crosshair",
        HAND: "pointer",
        MOVE: "move",
        TEXT: "text",
        WAIT: "wait",
        NOCURSOR: "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",
        DISABLE_OPENGL_2X_SMOOTH: 1,
        ENABLE_OPENGL_2X_SMOOTH: -1,
        ENABLE_OPENGL_4X_SMOOTH: 2,
        ENABLE_NATIVE_FONTS: 3,
        DISABLE_DEPTH_TEST: 4,
        ENABLE_DEPTH_TEST: -4,
        ENABLE_DEPTH_SORT: 5,
        DISABLE_DEPTH_SORT: -5,
        DISABLE_OPENGL_ERROR_REPORT: 6,
        ENABLE_OPENGL_ERROR_REPORT: -6,
        ENABLE_ACCURATE_TEXTURES: 7,
        DISABLE_ACCURATE_TEXTURES: -7,
        HINT_COUNT: 10,
        SINCOS_LENGTH: 720,
        PRECISIONB: 15,
        PRECISIONF: 1 << 15,
        PREC_MAXVAL: (1 << 15) - 1,
        PREC_ALPHA_SHIFT: 24 - 15,
        PREC_RED_SHIFT: 16 - 15,
        NORMAL_MODE_AUTO: 0,
        NORMAL_MODE_SHAPE: 1,
        NORMAL_MODE_VERTEX: 2,
        MAX_LIGHTS: 8
    };

    function h(P) {
        if (typeof P === "string") {
            var O = 0;
            for (var N = 0; N < P.length; ++N) {
                O = O * 31 + P.charCodeAt(N) & 4294967295
            }
            return O
        }
        if (typeof P !== "object") {
            return P & 4294967295
        }
        if (P.hashCode instanceof Function) {
            return P.hashCode()
        }
        if (P.$id === t) {
            P.$id = q.floor(q.random() * 65536) - 32768 << 16 | q.floor(q.random() * 65536)
        }
        return P.$id
    }
    function r(O, N) {
        if (O === null || N === null) {
            return O === null && N === null
        }
        if (typeof O === "string") {
            return O === N
        }
        if (typeof O !== "object") {
            return O === N
        }
        if (O.equals instanceof Function) {
            return O.equals(N)
        }
        return O === N
    }
    var o = function (O) {
        if (O.iterator instanceof Function) {
            return O.iterator()
        }
        if (O instanceof Array) {
            var N = -1;
            this.hasNext = function () {
                return ++N < O.length
            };
            this.next = function () {
                return O[N]
            }
        } else {
            throw "Unable to iterate: " + O
        }
    };
    var f = function () {
        function O(Q) {
            var P = 0;
            this.hasNext = function () {
                return P < Q.length
            };
            this.next = function () {
                return Q[P++]
            };
            this.remove = function () {
                Q.splice(P, 1)
            }
        }
        function N(P) {
            var Q;
            if (P instanceof N) {
                Q = P.toArray()
            } else {
                Q = [];
                if (typeof P === "number") {
                    Q.length = P > 0 ? P : 0
                }
            }
            this.get = function (R) {
                return Q[R]
            };
            this.contains = function (R) {
                return this.indexOf(R) > -1
            };
            this.indexOf = function (T) {
                for (var S = 0, R = Q.length; S < R; ++S) {
                    if (r(T, Q[S])) {
                        return S
                    }
                }
                return -1
            };
            this.lastIndexOf = function (S) {
                for (var R = Q.length - 1; R >= 0; --R) {
                    if (r(S, Q[R])) {
                        return R
                    }
                }
                return -1
            };
            this.add = function () {
                if (arguments.length === 1) {
                    Q.push(arguments[0])
                } else {
                    if (arguments.length === 2) {
                        var R = arguments[0];
                        if (typeof R === "number") {
                            if (R >= 0 && R <= Q.length) {
                                Q.splice(R, 0, arguments[1])
                            } else {
                                throw R + " is not a valid index"
                            }
                        } else {
                            throw typeof R + " is not a number"
                        }
                    } else {
                        throw "Please use the proper number of parameters."
                    }
                }
            };
            this.addAll = function (S, R) {
                var T;
                if (typeof S === "number") {
                    if (S < 0 || S > Q.length) {
                        throw "Index out of bounds for addAll: " + S + " greater or equal than " + Q.length
                    }
                    T = new o(R);
                    while (T.hasNext()) {
                        Q.splice(S++, 0, T.next())
                    }
                } else {
                    T = new o(S);
                    while (T.hasNext()) {
                        Q.push(T.next())
                    }
                }
            };
            this.set = function () {
                if (arguments.length === 2) {
                    var R = arguments[0];
                    if (typeof R === "number") {
                        if (R >= 0 && R < Q.length) {
                            Q.splice(R, 1, arguments[1])
                        } else {
                            throw R + " is not a valid index."
                        }
                    } else {
                        throw typeof R + " is not a number"
                    }
                } else {
                    throw "Please use the proper number of parameters."
                }
            };
            this.size = function () {
                return Q.length
            };
            this.clear = function () {
                Q.length = 0
            };
            this.remove = function (R) {
                if (typeof R === "number") {
                    return Q.splice(R, 1)[0]
                }
                R = this.indexOf(R);
                if (R > -1) {
                    Q.splice(R, 1);
                    return true
                }
                return false
            };
            this.removeAll = function (V) {
                var S, R, U, T = new N;
                T.addAll(this);
                this.clear();
                for (S = 0, R = 0; S < T.size(); S++) {
                    U = T.get(S);
                    if (!V.contains(U)) {
                        this.add(R++, U)
                    }
                }
                if (this.size() < T.size()) {
                    return true
                }
                return false
            };
            this.isEmpty = function () {
                return !Q.length
            };
            this.clone = function () {
                return new N(this)
            };
            this.toArray = function () {
                return Q.slice(0)
            };
            this.iterator = function () {
                return new O(Q)
            }
        }
        return N
    }();
    var x = function () {
        function N() {
            if (arguments.length === 1 && arguments[0] instanceof N) {
                return arguments[0].clone()
            }
            var W = arguments.length > 0 ? arguments[0] : 16;
            var X = arguments.length > 1 ? arguments[1] : 0.75;
            var Q = [];
            Q.length = W;
            var S = 0;
            var O = this;

            function U(Z) {
                var Y = h(Z) % Q.length;
                return Y < 0 ? Q.length + Y : Y
            }
            function R() {
                if (S <= X * Q.length) {
                    return
                }
                var ab = [];
                for (var aa = 0; aa < Q.length; ++aa) {
                    if (Q[aa] !== t) {
                        ab = ab.concat(Q[aa])
                    }
                }
                var ac = Q.length * 2;
                Q = [];
                Q.length = ac;
                for (var Z = 0; Z < ab.length; ++Z) {
                    var Y = U(ab[Z].key);
                    var ad = Q[Y];
                    if (ad === t) {
                        Q[Y] = ad = []
                    }
                    ad.push(ab[Z])
                }
            }
            function P(ad, ae) {
                var Y = 0;
                var ac = -1;
                var ab = false;
                var aa;

                function Z() {
                    while (!ab) {
                        ++ac;
                        if (Y >= Q.length) {
                            ab = true
                        } else {
                            if (Q[Y] === t || ac >= Q[Y].length) {
                                ac = -1;
                                ++Y
                            } else {
                                return
                            }
                        }
                    }
                }
                this.hasNext = function () {
                    return !ab
                };
                this.next = function () {
                    aa = ad(Q[Y][ac]);
                    Z();
                    return aa
                };
                this.remove = function () {
                    if (aa !== t) {
                        ae(aa);
                        --ac;
                        Z()
                    }
                };
                Z()
            }
            function V(Y, Z, aa) {
                this.clear = function () {
                    O.clear()
                };
                this.contains = function (ab) {
                    return Z(ab)
                };
                this.containsAll = function (ac) {
                    var ab = ac.iterator();
                    while (ab.hasNext()) {
                        if (!this.contains(ab.next())) {
                            return false
                        }
                    }
                    return true
                };
                this.isEmpty = function () {
                    return O.isEmpty()
                };
                this.iterator = function () {
                    return new P(Y, aa)
                };
                this.remove = function (ab) {
                    if (this.contains(ab)) {
                        aa(ab);
                        return true
                    }
                    return false
                };
                this.removeAll = function (ae) {
                    var ab = ae.iterator();
                    var ad = false;
                    while (ab.hasNext()) {
                        var ac = ab.next();
                        if (this.contains(ac)) {
                            aa(ac);
                            ad = true
                        }
                    }
                    return true
                };
                this.retainAll = function (af) {
                    var ad = this.iterator();
                    var ac = [];
                    while (ad.hasNext()) {
                        var ae = ad.next();
                        if (!af.contains(ae)) {
                            ac.push(ae)
                        }
                    }
                    for (var ab = 0; ab < ac.length; ++ab) {
                        aa(ac[ab])
                    }
                    return ac.length > 0
                };
                this.size = function () {
                    return O.size()
                };
                this.toArray = function () {
                    var ab = [];
                    var ac = this.iterator();
                    while (ac.hasNext()) {
                        ab.push(ac.next())
                    }
                    return ab
                }
            }
            function T(Y) {
                this._isIn = function (Z) {
                    return Z === O && Y.removed === t
                };
                this.equals = function (Z) {
                    return r(Y.key, Z.getKey())
                };
                this.getKey = function () {
                    return Y.key
                };
                this.getValue = function () {
                    return Y.value
                };
                this.hashCode = function (Z) {
                    return h(Y.key)
                };
                this.setValue = function (aa) {
                    var Z = Y.value;
                    Y.value = aa;
                    return Z
                }
            }
            this.clear = function () {
                S = 0;
                Q = [];
                Q.length = W
            };
            this.clone = function () {
                var Y = new N;
                Y.putAll(this);
                return Y
            };
            this.containsKey = function (aa) {
                var Y = U(aa);
                var ab = Q[Y];
                if (ab === t) {
                    return false
                }
                for (var Z = 0; Z < ab.length; ++Z) {
                    if (r(ab[Z].key, aa)) {
                        return true
                    }
                }
                return false
            };
            this.containsValue = function (aa) {
                for (var Z = 0; Z < Q.length; ++Z) {
                    var ab = Q[Z];
                    if (ab === t) {
                        continue
                    }
                    for (var Y = 0; Y < ab.length; ++Y) {
                        if (r(ab[Y].value, aa)) {
                            return true
                        }
                    }
                }
                return false
            };
            this.entrySet = function () {
                return new V(function (Y) {
                    return new T(Y)
                }, function (Y) {
                    return Y instanceof T && Y._isIn(O)
                }, function (Y) {
                    return O.remove(Y.getKey())
                })
            };
            this.get = function (aa) {
                var Y = U(aa);
                var ab = Q[Y];
                if (ab === t) {
                    return null
                }
                for (var Z = 0; Z < ab.length; ++Z) {
                    if (r(ab[Z].key, aa)) {
                        return ab[Z].value
                    }
                }
                return null
            };
            this.isEmpty = function () {
                return S === 0
            };
            this.keySet = function () {
                return new V(function (Y) {
                    return Y.key
                }, function (Y) {
                    return O.containsKey(Y)
                }, function (Y) {
                    return O.remove(Y)
                })
            };
            this.values = function () {
                return new V(function (Y) {
                    return Y.value
                }, function (Y) {
                    return O.containsValue(Y)
                }, function (Y) {
                    return O.removeByValue(Y)
                })
            };
            this.put = function (aa, ac) {
                var Y = U(aa);
                var ad = Q[Y];
                if (ad === t) {
                    ++S;
                    Q[Y] = [{
                        key: aa,
                        value: ac
                    }];
                    R();
                    return null
                }
                for (var Z = 0; Z < ad.length; ++Z) {
                    if (r(ad[Z].key, aa)) {
                        var ab = ad[Z].value;
                        ad[Z].value = ac;
                        return ab
                    }
                }++S;
                ad.push({
                    key: aa,
                    value: ac
                });
                R();
                return null
            };
            this.putAll = function (Y) {
                var Z = Y.entrySet().iterator();
                while (Z.hasNext()) {
                    var aa = Z.next();
                    this.put(aa.getKey(), aa.getValue())
                }
            };
            this.remove = function (aa) {
                var Y = U(aa);
                var ac = Q[Y];
                if (ac === t) {
                    return null
                }
                for (var Z = 0; Z < ac.length; ++Z) {
                    if (r(ac[Z].key, aa)) {
                        --S;
                        var ab = ac[Z].value;
                        ac[Z].removed = true;
                        if (ac.length > 1) {
                            ac.splice(Z, 1)
                        } else {
                            Q[Y] = t
                        }
                        return ab
                    }
                }
                return null
            };
            this.removeByValue = function (aa) {
                var ac, Z, Y, ab;
                for (ac in Q) {
                    if (Q.hasOwnProperty(ac)) {
                        for (Z = 0, Y = Q[ac].length; Z < Y; Z++) {
                            ab = Q[ac][Z];
                            if (ab.value === aa) {
                                Q[ac].splice(Z, 1);
                                return true
                            }
                        }
                    }
                }
                return false
            };
            this.size = function () {
                return S
            }
        }
        return N
    }();
    var A = function () {
        function N(Q, S, R) {
            this.x = Q || 0;
            this.y = S || 0;
            this.z = R || 0
        }
        N.dist = function (R, Q) {
            return R.dist(Q)
        };
        N.dot = function (R, Q) {
            return R.dot(Q)
        };
        N.cross = function (R, Q) {
            return R.cross(Q)
        };
        N.angleBetween = function (R, Q) {
            return q.acos(R.dot(Q) / (R.mag() * Q.mag()))
        };
        N.prototype = {
            set: function (Q, S, R) {
                if (arguments.length === 1) {
                    this.set(Q.x || Q[0] || 0, Q.y || Q[1] || 0, Q.z || Q[2] || 0)
                } else {
                    this.x = Q;
                    this.y = S;
                    this.z = R
                }
            },
            get: function () {
                return new N(this.x, this.y, this.z)
            },
            mag: function () {
                var Q = this.x,
                    S = this.y,
                    R = this.z;
                return q.sqrt(Q * Q + S * S + R * R)
            },
            add: function (Q, S, R) {
                if (arguments.length === 1) {
                    this.x += Q.x;
                    this.y += Q.y;
                    this.z += Q.z
                } else {
                    this.x += Q;
                    this.y += S;
                    this.z += R
                }
            },
            sub: function (Q, S, R) {
                if (arguments.length === 1) {
                    this.x -= Q.x;
                    this.y -= Q.y;
                    this.z -= Q.z
                } else {
                    this.x -= Q;
                    this.y -= S;
                    this.z -= R
                }
            },
            mult: function (Q) {
                if (typeof Q === "number") {
                    this.x *= Q;
                    this.y *= Q;
                    this.z *= Q
                } else {
                    this.x *= Q.x;
                    this.y *= Q.y;
                    this.z *= Q.z
                }
            },
            div: function (Q) {
                if (typeof Q === "number") {
                    this.x /= Q;
                    this.y /= Q;
                    this.z /= Q
                } else {
                    this.x /= Q.x;
                    this.y /= Q.y;
                    this.z /= Q.z
                }
            },
            dist: function (T) {
                var S = this.x - T.x,
                    R = this.y - T.y,
                    Q = this.z - T.z;
                return q.sqrt(S * S + R * R + Q * Q)
            },
            dot: function (Q, S, R) {
                if (arguments.length === 1) {
                    return this.x * Q.x + this.y * Q.y + this.z * Q.z
                }
                return this.x * Q + this.y * S + this.z * R
            },
            cross: function (R) {
                var Q = this.x,
                    T = this.y,
                    S = this.z;
                return new N(T * R.z - R.y * S, S * R.x - R.z * Q, Q * R.y - R.x * T)
            },
            normalize: function () {
                var Q = this.mag();
                if (Q > 0) {
                    this.div(Q)
                }
            },
            limit: function (Q) {
                if (this.mag() > Q) {
                    this.normalize();
                    this.mult(Q)
                }
            },
            heading2D: function () {
                return -q.atan2(-this.y, this.x)
            },
            toString: function () {
                return "[" + this.x + ", " + this.y + ", " + this.z + "]"
            },
            array: function () {
                return [this.x, this.y, this.z]
            }
        };

        function O(Q) {
            return function (T, S) {
                var R = T.get();
                R[Q](S);
                return R
            }
        }
        for (var P in N.prototype) {
            if (N.prototype.hasOwnProperty(P) && !N.hasOwnProperty(P)) {
                N[P] = O(P)
            }
        }
        return N
    }();

    function M() {}
    M.prototype = B;
    var g = new M;
    g.ArrayList = f;
    g.HashMap = x;
    g.PVector = A;
    g.ObjectIterator = o;
    g.PConstants = B;
    g.defineProperty = function (O, N, P) {
        if ("defineProperty" in Object) {
            Object.defineProperty(O, N, P)
        } else {
            if (P.hasOwnProperty("get")) {
                O.__defineGetter__(N, P.get)
            }
            if (P.hasOwnProperty("set")) {
                O.__defineSetter__(N, P.set)
            }
        }
    };

    function m(O, N, R) {
        if (!O.hasOwnProperty(N) || typeof O[N] !== "function") {
            O[N] = R;
            return
        }
        var Q = O[N];
        if ("$overloads" in Q) {
            Q.$defaultOverload = R;
            return
        }
        if (!("$overloads" in R) && Q.length === R.length) {
            return
        }
        var T, P;
        if ("$overloads" in R) {
            T = R.$overloads.slice(0);
            T[Q.length] = Q;
            P = R.$defaultOverload
        } else {
            T = [];
            T[R.length] = R;
            T[Q.length] = Q;
            P = Q
        }
        var S = function () {
            var U = S.$overloads[arguments.length] || ("$methodArgsIndex" in S && arguments.length > S.$methodArgsIndex ? S.$overloads[S.$methodArgsIndex] : null) || S.$defaultOverload;
            return U.apply(this, arguments)
        };
        S.$overloads = T;
        if ("$methodArgsIndex" in R) {
            S.$methodArgsIndex = R.$methodArgsIndex
        }
        S.$defaultOverload = P;
        S.name = N;
        O[N] = S
    }
    function i(Q, P) {
        function R(S) {
            g.defineProperty(Q, S, {
                get: function () {
                    return P[S]
                },
                set: function (T) {
                    P[S] = T
                },
                enumerable: true
            })
        }
        var O = [];
        for (var N in P) {
            if (typeof P[N] === "function") {
                m(Q, N, P[N])
            } else {
                if (N.charAt(0) !== "$" && !(N in Q)) {
                    O.push(N)
                }
            }
        }
        while (O.length > 0) {
            R(O.shift())
        }
        Q.$super = P
    }
    g.extendClassChain = function (O) {
        var P = [O];
        for (var N = O.$upcast; N; N = N.$upcast) {
            i(N, O);
            P.push(N);
            O = N
        }
        while (P.length > 0) {
            P.pop().$self = O
        }
    };
    g.extendStaticMembers = function (N, O) {
        i(N, O)
    };
    g.extendInterfaceMembers = function (N, O) {
        i(N, O)
    };
    g.addMethod = function (Q, P, S, R) {
        var N = Q[P];
        if (N || R) {
            var O = S.length;
            if ("$overloads" in N) {
                N.$overloads[O] = S
            } else {
                var T = function () {
                    var V = T.$overloads[arguments.length] || ("$methodArgsIndex" in T && arguments.length > T.$methodArgsIndex ? T.$overloads[T.$methodArgsIndex] : null) || T.$defaultOverload;
                    return V.apply(this, arguments)
                };
                var U = [];
                if (N) {
                    U[N.length] = N
                }
                U[O] = S;
                T.$overloads = U;
                T.$defaultOverload = N || S;
                if (R) {
                    T.$methodArgsIndex = O
                }
                T.name = P;
                Q[P] = T
            }
        } else {
            Q[P] = S
        }
    };

    function l(N) {
        if (typeof N !== "string") {
            return false
        }
        return ["byte", "int", "char", "color", "float", "long", "double"].indexOf(N) !== -1
    }
    g.createJavaArray = function (S, T) {
        var O = null,
            P = null;
        if (typeof S === "string") {
            if (S === "boolean") {
                P = false
            } else {
                if (l(S)) {
                    P = 0
                }
            }
        }
        if (typeof T[0] === "number") {
            var N = 0 | T[0];
            if (T.length <= 1) {
                O = [];
                O.length = N;
                for (var R = 0; R < N; ++R) {
                    O[R] = P
                }
            } else {
                O = [];
                var U = T.slice(1);
                for (var Q = 0; Q < N; ++Q) {
                    O.push(g.createJavaArray(S, U))
                }
            }
        }
        return O
    };
    var E = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgrey: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370d8",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#d87093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    (function (O) {
        var R = ("open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()").split(" "),
            Q = R.length,
            N, S;

        function P(T) {
            return function () {
                throw "Processing.js does not support " + T + "."
            }
        }
        while (Q--) {
            N = R[Q];
            S = N.replace("()", "");
            O[S] = P(N)
        }
    })(g);
    g.defineProperty(g, "screenWidth", {
        get: function () {
            return D.innerWidth
        }
    });
    g.defineProperty(g, "screenHeight", {
        get: function () {
            return D.innerHeight
        }
    });
    g.defineProperty(g, "online", {
        get: function () {
            return true
        }
    });
    var k = [];
    var J = {};
    var L = function (N) {
        k.splice(J[N], 1);
        delete J[N]
    };
    var a = function (N) {
        if (N.externals.canvas.id === t || !N.externals.canvas.id.length) {
            N.externals.canvas.id = "__processing" + k.length
        }
        J[N.externals.canvas.id] = k.length;
        k.push(N)
    };

    function p(X) {
        var Q = 250,
            ae = X.size / Q,
            N = d.createElement("canvas");
        N.width = 2 * Q;
        N.height = 2 * Q;
        N.style.opacity = 0;
        var W = X.getCSSDefinition(Q + "px", "normal"),
            Y = N.getContext("2d");
        Y.font = W;
        var ac = "dbflkhyjqpg";
        N.width = Y.measureText(ac).width;
        Y.font = W;
        var T = d.createElement("div");
        T.style.position = "absolute";
        T.style.opacity = 0;
        T.style.fontFamily = '"' + X.name + '"';
        T.style.fontSize = Q + "px";
        T.innerHTML = ac + "<br/>" + ac;
        d.body.appendChild(T);
        var U = N.width,
            ab = N.height,
            V = ab / 2;
        Y.fillStyle = "white";
        Y.fillRect(0, 0, U, ab);
        Y.fillStyle = "black";
        Y.fillText(ac, 0, V);
        var P = Y.getImageData(0, 0, U, ab).data;
        var Z = 0,
            S = U * 4,
            aa = P.length;
        while (++Z < aa && P[Z] === 255) {
            G()
        }
        var R = q.round(Z / S);
        Z = aa - 1;
        while (--Z > 0 && P[Z] === 255) {
            G()
        }
        var ad = q.round(Z / S);
        X.ascent = ae * (V - R);
        X.descent = ae * (ad - V);
        if (d.defaultView.getComputedStyle) {
            var O = d.defaultView.getComputedStyle(T, null).getPropertyValue("height");
            O = ae * O.replace("px", "");
            if (O >= X.size * 2) {
                X.leading = q.round(O / 2)
            }
        }
        d.body.removeChild(T);
        if (X.caching) {
            return Y
        }
    }
    function H(N, O) {
        if (N === t) {
            N = ""
        }
        this.name = N;
        if (O === t) {
            O = 0
        }
        this.size = O;
        this.glyph = false;
        this.ascent = 0;
        this.descent = 0;
        this.leading = 1.2 * O;
        var R = N.indexOf(" Italic Bold");
        if (R !== -1) {
            N = N.substring(0, R)
        }
        this.style = "normal";
        var Q = N.indexOf(" Italic");
        if (Q !== -1) {
            N = N.substring(0, Q);
            this.style = "italic"
        }
        this.weight = "normal";
        var P = N.indexOf(" Bold");
        if (P !== -1) {
            N = N.substring(0, P);
            this.weight = "bold"
        }
        this.family = "sans-serif";
        if (N !== t) {
            switch (N) {
                case "sans-serif":
                case "serif":
                case "monospace":
                case "fantasy":
                case "cursive":
                    this.family = N;
                    break;
                default:
                    this.family = '"' + N + '", sans-serif';
                    break
            }
        }
        this.context2d = p(this);
        this.css = this.getCSSDefinition();
        if (this.context2d) {
            this.context2d.font = this.css
        }
    }
    H.prototype.caching = true;
    H.prototype.getCSSDefinition = function (P, N) {
        if (P === t) {
            P = this.size + "px"
        }
        if (N === t) {
            N = this.leading + "px"
        }
        var O = [this.style, "normal", this.weight, P + "/" + N, this.family];
        return O.join(" ")
    };
    H.prototype.measureTextWidth = function (N) {
        return this.context2d.measureText(N).width
    };
    H.prototype.measureTextWidthFallback = function (P) {
        var O = d.createElement("canvas"),
            N = O.getContext("2d");
        N.font = this.css;
        return N.measureText(P).width
    };
    H.PFontCache = {
        length: 0
    };
    H.get = function (Q, R) {
        R = (R * 10 + 0.5 | 0) / 10;
        var O = H.PFontCache,
            N = Q + "/" + R;
        if (!O[N]) {
            O[N] = new H(Q, R);
            O.length++;
            if (O.length === 50) {
                H.prototype.measureTextWidth = H.prototype.measureTextWidthFallback;
                H.prototype.caching = false;
                var P;
                for (P in O) {
                    if (P !== "length") {
                        O[P].context2d = null
                    }
                }
                return new H(Q, R)
            }
            if (O.length === 400) {
                H.PFontCache = {};
                H.get = H.getFallback;
                return new H(Q, R)
            }
        }
        return O[N]
    };
    H.getFallback = function (N, O) {
        return new H(N, O)
    };
    H.list = function () {
        return ["sans-serif", "serif", "monospace", "fantasy", "cursive"]
    };
    H.preloading = {
        template: {},
        initialized: false,
        initialize: function () {
            var P = function () {
                var R = "#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#";
                var Q = function (S) {
                    return "AAAAAAAA".substr(~~S ? 7 - S : 6)
                };
                return R.replace(/[#237]/g, Q)
            };
            var N = d.createElement("style");
            N.setAttribute("type", "text/css");
            N.innerHTML = '@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,' + P() + "')\n       format('truetype');\n}";
            d.head.appendChild(N);
            var O = d.createElement("span");
            O.style.cssText = 'position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
            O.innerHTML = "AAAAAAAA";
            d.body.appendChild(O);
            this.template = O;
            this.initialized = true
        },
        getElementWidth: function (N) {
            return d.defaultView.getComputedStyle(N, "").getPropertyValue("width")
        },
        timeAttempted: 0,
        pending: function (R) {
            if (!this.initialized) {
                this.initialize()
            }
            var P, N, Q = this.getElementWidth(this.template);
            for (var O = 0; O < this.fontList.length; O++) {
                P = this.fontList[O];
                N = this.getElementWidth(P);
                if (this.timeAttempted < 4000 && N === Q) {
                    this.timeAttempted += R;
                    return true
                } else {
                    d.body.removeChild(P);
                    this.fontList.splice(O--, 1);
                    this.timeAttempted = 0
                }
            }
            if (this.fontList.length === 0) {
                return false
            }
            return true
        },
        fontList: [],
        addedList: {},
        add: function (N) {
            if (!this.initialized) {
                this.initialize()
            }
            var R = typeof N === "object" ? N.fontFace : N,
                Q = typeof N === "object" ? N.url : N;
            if (this.addedList[R]) {
                return
            }
            var P = d.createElement("style");
            P.setAttribute("type", "text/css");
            P.innerHTML = "@font-face{\n  font-family: '" + R + "';\n  src:  url('" + Q + "');\n}\n";
            d.head.appendChild(P);
            this.addedList[R] = true;
            var O = d.createElement("span");
            O.style.cssText = "position: absolute; top: 0; left: 0; opacity: 0;";
            O.style.fontFamily = '"' + R + '", "PjsEmptyFont", fantasy';
            O.innerHTML = "AAAAAAAA";
            d.body.appendChild(O);
            this.fontList.push(O)
        }
    };
    g.PFont = H;
    var F = this.Processing = function (be, ba) {
        if (!(this instanceof F)) {
            throw "called Processing constructor as if it were a function: missing 'new'."
        }
        var ae, cV = be === t && ba === t;
        if (cV) {
            ae = d.createElement("canvas")
        } else {
            ae = typeof be === "string" ? d.getElementById(be) : be
        }
        if (!(ae instanceof HTMLCanvasElement)) {
            throw "called Processing constructor without passing canvas element reference or id."
        }
        function dw(ea) {
            F.debug("Unimplemented - " + ea)
        }
        var cW = this;
        cW.externals = {
            canvas: ae,
            context: t,
            sketch: t
        };
        cW.name = "Processing.js Instance";
        cW.use3DContext = false;
        cW.focused = false;
        cW.breakShape = false;
        cW.glyphTable = {};
        cW.pmouseX = 0;
        cW.pmouseY = 0;
        cW.mouseX = 0;
        cW.mouseY = 0;
        cW.mouseButton = 0;
        cW.mouseScroll = 0;
        cW.mouseClicked = t;
        cW.mouseDragged = t;
        cW.mouseMoved = t;
        cW.mousePressed = t;
        cW.mouseReleased = t;
        cW.mouseScrolled = t;
        cW.mouseOver = t;
        cW.mouseOut = t;
        cW.touchStart = t;
        cW.touchEnd = t;
        cW.touchMove = t;
        cW.touchCancel = t;
        cW.key = t;
        cW.keyCode = t;
        cW.keyPressed = G;
        cW.keyReleased = G;
        cW.keyTyped = G;
        cW.draw = t;
        cW.setup = t;
        cW.__mousePressed = false;
        cW.__keyPressed = false;
        cW.__frameRate = 60;
        cW.frameCount = 0;
        cW.width = 100;
        cW.height = 100;
        var d8, cQ, dY, bD = true,
            aH = true,
            bo = [1, 1, 1, 1],
            a1 = 4294967295,
            aq = true,
            ce = true,
            c0 = [0, 0, 0, 1],
            cv = 4278190080,
            b3 = true,
            dW = 1,
            ax = false,
            dO = false,
            aC = true,
            b4 = 0,
            bK = 0,
            cN = 3,
            a8 = 0,
            a7 = 0,
            a6 = 0,
            a2 = 0,
            dU = 60,
            az = 1000 / dU,
            Z = "default",
            ck = ae.style.cursor,
            dR = 20,
            cj = 0,
            d6 = [],
            aJ = 0,
            Q = 20,
            cM = false,
            a4 = -3355444,
            cy = 20,
            bU = 255,
            bJ = 255,
            bI = 255,
            bG = 255,
            cZ = false,
            aK = false,
            dN = 0,
            d5 = 0,
            cY = 1,
            bf = null,
            bw = null,
            a5 = false,
            dq = Date.now(),
            dt = dq,
            P = 0,
            cE, c3, aQ, aL, bz, cd, U, dC = {
                attributes: {},
                locations: {}
            }, dx, dQ, bT, bh, cJ, dk, aB, b2, bg, b8, at, aG, bC, aw, af, c7, bS, cs = {
                width: 0,
                height: 0
            }, d4 = 2,
            dT = false,
            cH, ac, R, N = 37,
            c1 = 0,
            cI = 4,
            Y = "Arial",
            d0 = 12,
            a3 = 9,
            dA = 2,
            d7 = 14,
            W = H.get(Y, d0),
            aj, cn = null,
            dV = false,
            d3, bZ = 1000,
            ag = [],
            dI = null,
            dX = [16, 17, 18, 20, 33, 34, 35, 36, 37, 38, 39, 40, 144, 155, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 157];
        var ad, dp, aU, bX;
        if (d.defaultView && d.defaultView.getComputedStyle) {
            ad = parseInt(d.defaultView.getComputedStyle(ae, null)["paddingLeft"], 10) || 0;
            dp = parseInt(d.defaultView.getComputedStyle(ae, null)["paddingTop"], 10) || 0;
            aU = parseInt(d.defaultView.getComputedStyle(ae, null)["borderLeftWidth"], 10) || 0;
            bX = parseInt(d.defaultView.getComputedStyle(ae, null)["borderTopWidth"], 10) || 0
        }
        var dL = 0;
        var bL = 0,
            bM = 0,
            bt = [],
            bs = [],
            br = [],
            ah = new e(720),
            bl = new e(720),
            cF, cA;
        var bV, ch, dJ, aT, am, da, ab, db, ap = false,
            ci = false,
            cK = 60 * (q.PI / 180),
            dl = cW.width / 2,
            dj = cW.height / 2,
            di = dj / q.tan(cK / 2),
            a0 = di / 10,
            av = di * 10,
            b5 = cW.width / cW.height;
        var bb = [],
            cb = [],
            c2 = 0,
            dP = false,
            aa = false,
            du = true;
        var S = 0;
        var bm = [];
        var dh = new e([0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);
        var bH = new e([0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5]);
        var df = new e([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
        var ak = new e([0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]);
        var ai = new e([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
        var aO = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}";
        var bQ = "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}";
        var dE = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}";
        var aW = "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}";
        var bA = /Windows/.test(navigator.userAgent);
        var dn = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );" + (bA ? "  spotAttenuation = 1.0; " : "  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;") + "  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}";
        var aF = "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}";

        function d2(ec, eb, ee, ed) {
            var ea = dC.locations[ec];
            if (ea === t) {
                ea = d8.getUniformLocation(eb, ee);
                dC.locations[ec] = ea
            }
            if (ea !== null) {
                if (ed.length === 4) {
                    d8.uniform4fv(ea, ed)
                } else {
                    if (ed.length === 3) {
                        d8.uniform3fv(ea, ed)
                    } else {
                        if (ed.length === 2) {
                            d8.uniform2fv(ea, ed)
                        } else {
                            d8.uniform1f(ea, ed)
                        }
                    }
                }
            }
        }
        function dZ(ec, eb, ee, ed) {
            var ea = dC.locations[ec];
            if (ea === t) {
                ea = d8.getUniformLocation(eb, ee);
                dC.locations[ec] = ea
            }
            if (ea !== null) {
                if (ed.length === 4) {
                    d8.uniform4iv(ea, ed)
                } else {
                    if (ed.length === 3) {
                        d8.uniform3iv(ea, ed)
                    } else {
                        if (ed.length === 2) {
                            d8.uniform2iv(ea, ed)
                        } else {
                            d8.uniform1i(ea, ed)
                        }
                    }
                }
            }
        }
        function a9(ee, ec, ef, ed, eb) {
            var ea = dC.locations[ee];
            if (ea === t) {
                ea = d8.getUniformLocation(ec, ef);
                dC.locations[ee] = ea
            }
            if (ea !== -1) {
                if (eb.length === 16) {
                    d8.uniformMatrix4fv(ea, ed, eb)
                } else {
                    if (eb.length === 9) {
                        d8.uniformMatrix3fv(ea, ed, eb)
                    } else {
                        d8.uniformMatrix2fv(ea, ed, eb)
                    }
                }
            }
        }
        function dc(ee, ec, ef, eb, ed) {
            var ea = dC.attributes[ee];
            if (ea === t) {
                ea = d8.getAttribLocation(ec, ef);
                dC.attributes[ee] = ea
            }
            if (ea !== -1) {
                d8.bindBuffer(d8.ARRAY_BUFFER, ed);
                d8.vertexAttribPointer(ea, eb, d8.FLOAT, false, 0, 0);
                d8.enableVertexAttribArray(ea)
            }
        }
        function cg(ec, eb, ed) {
            var ea = dC.attributes[ec];
            if (ea === t) {
                ea = d8.getAttribLocation(eb, ed);
                dC.attributes[ec] = ea
            }
            if (ea !== -1) {
                d8.disableVertexAttribArray(ea)
            }
        }
        var bF = function (ec, ee, eb) {
            var ef = ec.createShader(ec.VERTEX_SHADER);
            ec.shaderSource(ef, ee);
            ec.compileShader(ef);
            if (!ec.getShaderParameter(ef, ec.COMPILE_STATUS)) {
                throw ec.getShaderInfoLog(ef)
            }
            var ed = ec.createShader(ec.FRAGMENT_SHADER);
            ec.shaderSource(ed, eb);
            ec.compileShader(ed);
            if (!ec.getShaderParameter(ed, ec.COMPILE_STATUS)) {
                throw ec.getShaderInfoLog(ed)
            }
            var ea = ec.createProgram();
            ec.attachShader(ea, ef);
            ec.attachShader(ea, ed);
            ec.linkProgram(ea);
            if (!ec.getProgramParameter(ea, ec.LINK_STATUS)) {
                throw "Error linking shaders."
            }
            return ea
        };
        var aZ = function (ea, ee, eb, ed, ec) {
            return {
                x: ea,
                y: ee,
                w: eb,
                h: ed
            }
        };
        var bk = aZ;
        var b1 = function (ea, ee, eb, ed, ec) {
            return {
                x: ea,
                y: ee,
                w: ec ? eb : eb - ea,
                h: ec ? ed : ed - ee
            }
        };
        var aN = function (ea, ee, eb, ed, ec) {
            return {
                x: ea - eb / 2,
                y: ee - ed / 2,
                w: eb,
                h: ed
            }
        };
        var ds = function () {};
        var bR = function () {};
        var bB = function () {};
        var ca = function () {};
        bR.prototype = new ds;
        bR.prototype.constructor = bR;
        bB.prototype = new ds;
        bB.prototype.constructor = bB;
        ca.prototype = new ds;
        ca.prototype.constructor = ca;
        ds.prototype.a3DOnlyFunction = G;
        var cl = {};
        var bP = cW.Character = function (ea) {
            if (typeof ea === "string" && ea.length === 1) {
                this.code = ea.charCodeAt(0)
            } else {
                if (typeof ea === "number") {
                    this.code = ea
                } else {
                    if (ea instanceof bP) {
                        this.code = ea
                    } else {
                        this.code = NaN
                    }
                }
            }
            return cl[this.code] === t ? cl[this.code] = this : cl[this.code]
        };
        bP.prototype.toString = function () {
            return String.fromCharCode(this.code)
        };
        bP.prototype.valueOf = function () {
            return this.code
        };
        var O = cW.PShape = function (ea) {
            this.family = ea || 0;
            this.visible = true;
            this.style = true;
            this.children = [];
            this.nameTable = [];
            this.params = [];
            this.name = "";
            this.image = null;
            this.matrix = null;
            this.kind = null;
            this.close = null;
            this.width = null;
            this.height = null;
            this.parent = null
        };
        O.prototype = {
            isVisible: function () {
                return this.visible
            },
            setVisible: function (ea) {
                this.visible = ea
            },
            disableStyle: function () {
                this.style = false;
                for (var eb = 0, ea = this.children.length; eb < ea; eb++) {
                    this.children[eb].disableStyle()
                }
            },
            enableStyle: function () {
                this.style = true;
                for (var eb = 0, ea = this.children.length; eb < ea; eb++) {
                    this.children[eb].enableStyle()
                }
            },
            getFamily: function () {
                return this.family
            },
            getWidth: function () {
                return this.width
            },
            getHeight: function () {
                return this.height
            },
            setName: function (ea) {
                this.name = ea
            },
            getName: function () {
                return this.name
            },
            draw: function (ea) {
                ea = ea || cW;
                if (this.visible) {
                    this.pre(ea);
                    this.drawImpl(ea);
                    this.post(ea)
                }
            },
            drawImpl: function (ea) {
                if (this.family === 0) {
                    this.drawGroup(ea)
                } else {
                    if (this.family === 1) {
                        this.drawPrimitive(ea)
                    } else {
                        if (this.family === 3) {
                            this.drawGeometry(ea)
                        } else {
                            if (this.family === 21) {
                                this.drawPath(ea)
                            }
                        }
                    }
                }
            },
            drawPath: function (ec) {
                var ed, eb;
                if (this.vertices.length === 0) {
                    return
                }
                ec.beginShape();
                if (this.vertexCodes.length === 0) {
                    if (this.vertices[0].length === 2) {
                        for (ed = 0, eb = this.vertices.length; ed < eb; ed++) {
                            ec.vertex(this.vertices[ed][0], this.vertices[ed][1])
                        }
                    } else {
                        for (ed = 0, eb = this.vertices.length; ed < eb; ed++) {
                            ec.vertex(this.vertices[ed][0], this.vertices[ed][1], this.vertices[ed][2])
                        }
                    }
                } else {
                    var ea = 0;
                    if (this.vertices[0].length === 2) {
                        for (ed = 0, eb = this.vertexCodes.length; ed < eb; ed++) {
                            if (this.vertexCodes[ed] === 0) {
                                ec.vertex(this.vertices[ea][0], this.vertices[ea][1], this.vertices[ea]["moveTo"]);
                                ec.breakShape = false;
                                ea++
                            } else {
                                if (this.vertexCodes[ed] === 1) {
                                    ec.bezierVertex(this.vertices[ea + 0][0], this.vertices[ea + 0][1], this.vertices[ea + 1][0], this.vertices[ea + 1][1], this.vertices[ea + 2][0], this.vertices[ea + 2][1]);
                                    ea += 3
                                } else {
                                    if (this.vertexCodes[ed] === 2) {
                                        ec.curveVertex(this.vertices[ea][0], this.vertices[ea][1]);
                                        ea++
                                    } else {
                                        if (this.vertexCodes[ed] === 3) {
                                            ec.breakShape = true
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        for (ed = 0, eb = this.vertexCodes.length; ed < eb; ed++) {
                            if (this.vertexCodes[ed] === 0) {
                                ec.vertex(this.vertices[ea][0], this.vertices[ea][1], this.vertices[ea][2]);
                                if (this.vertices[ea]["moveTo"] === true) {
                                    bb[bb.length - 1]["moveTo"] = true
                                } else {
                                    if (this.vertices[ea]["moveTo"] === false) {
                                        bb[bb.length - 1]["moveTo"] = false
                                    }
                                }
                                ec.breakShape = false
                            } else {
                                if (this.vertexCodes[ed] === 1) {
                                    ec.bezierVertex(this.vertices[ea + 0][0], this.vertices[ea + 0][1], this.vertices[ea + 0][2], this.vertices[ea + 1][0], this.vertices[ea + 1][1], this.vertices[ea + 1][2], this.vertices[ea + 2][0], this.vertices[ea + 2][1], this.vertices[ea + 2][2]);
                                    ea += 3
                                } else {
                                    if (this.vertexCodes[ed] === 2) {
                                        ec.curveVertex(this.vertices[ea][0], this.vertices[ea][1], this.vertices[ea][2]);
                                        ea++
                                    } else {
                                        if (this.vertexCodes[ed] === 3) {
                                            ec.breakShape = true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                ec.endShape(this.close ? 2 : 1)
            },
            drawGeometry: function (ec) {
                var ed, eb;
                ec.beginShape(this.kind);
                if (this.style) {
                    for (ed = 0, eb = this.vertices.length; ed < eb; ed++) {
                        ec.vertex(this.vertices[ed])
                    }
                } else {
                    for (ed = 0, eb = this.vertices.length; ed < eb; ed++) {
                        var ea = this.vertices[ed];
                        if (ea[2] === 0) {
                            ec.vertex(ea[0], ea[1])
                        } else {
                            ec.vertex(ea[0], ea[1], ea[2])
                        }
                    }
                }
                ec.endShape()
            },
            drawGroup: function (eb) {
                for (var ec = 0, ea = this.children.length; ec < ea; ec++) {
                    this.children[ec].draw(eb)
                }
            },
            drawPrimitive: function (ea) {
                if (this.kind === 2) {
                    ea.point(this.params[0], this.params[1])
                } else {
                    if (this.kind === 4) {
                        if (this.params.length === 4) {
                            ea.line(this.params[0], this.params[1], this.params[2], this.params[3])
                        } else {
                            ea.line(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5])
                        }
                    } else {
                        if (this.kind === 8) {
                            ea.triangle(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5])
                        } else {
                            if (this.kind === 16) {
                                ea.quad(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5], this.params[6], this.params[7])
                            } else {
                                if (this.kind === 30) {
                                    if (this.image !== null) {
                                        var ee = bk;
                                        ea.imageMode(0);
                                        ea.image(this.image, this.params[0], this.params[1], this.params[2], this.params[3]);
                                        bk = ee
                                    } else {
                                        var eb = bK;
                                        ea.rectMode(0);
                                        ea.rect(this.params[0], this.params[1], this.params[2], this.params[3]);
                                        bK = eb
                                    }
                                } else {
                                    if (this.kind === 31) {
                                        var ec = cN;
                                        ea.ellipseMode(0);
                                        ea.ellipse(this.params[0], this.params[1], this.params[2], this.params[3]);
                                        cN = ec
                                    } else {
                                        if (this.kind === 32) {
                                            var ed = cN;
                                            ea.ellipseMode(0);
                                            ea.arc(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
                                            cN = ed
                                        } else {
                                            if (this.kind === 41) {
                                                if (this.params.length === 1) {
                                                    ea.box(this.params[0])
                                                } else {
                                                    ea.box(this.params[0], this.params[1], this.params[2])
                                                }
                                            } else {
                                                if (this.kind === 40) {
                                                    ea.sphere(this.params[0])
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            pre: function (ea) {
                if (this.matrix) {
                    ea.pushMatrix();
                    ea.transform(this.matrix)
                }
                if (this.style) {
                    ea.pushStyle();
                    this.styles(ea)
                }
            },
            post: function (ea) {
                if (this.matrix) {
                    ea.popMatrix()
                }
                if (this.style) {
                    ea.popStyle()
                }
            },
            styles: function (ea) {
                if (this.stroke) {
                    ea.stroke(this.strokeColor);
                    ea.strokeWeight(this.strokeWeight);
                    ea.strokeCap(this.strokeCap);
                    ea.strokeJoin(this.strokeJoin)
                } else {
                    ea.noStroke()
                }
                if (this.fill) {
                    ea.fill(this.fillColor)
                } else {
                    ea.noFill()
                }
            },
            getChild: function (ed) {
                var eb, ea;
                if (typeof ed === "number") {
                    return this.children[ed]
                }
                var ec;
                if (ed === "" || this.name === ed) {
                    return this
                }
                if (this.nameTable.length > 0) {
                    for (eb = 0, ea = this.nameTable.length; eb < ea || ec; eb++) {
                        if (this.nameTable[eb].getName === ed) {
                            ec = this.nameTable[eb];
                            break
                        }
                    }
                    if (ec) {
                        return ec
                    }
                }
                for (eb = 0, ea = this.children.length; eb < ea; eb++) {
                    ec = this.children[eb].getChild(ed);
                    if (ec) {
                        return ec
                    }
                }
                return null
            },
            getChildCount: function () {
                return this.children.length
            },
            addChild: function (ea) {
                this.children.push(ea);
                ea.parent = this;
                if (ea.getName() !== null) {
                    this.addName(ea.getName(), ea)
                }
            },
            addName: function (eb, ea) {
                if (this.parent !== null) {
                    this.parent.addName(eb, ea)
                } else {
                    this.nameTable.push([eb, ea])
                }
            },
            translate: function () {
                if (arguments.length === 2) {
                    this.checkMatrix(2);
                    this.matrix.translate(arguments[0], arguments[1])
                } else {
                    this.checkMatrix(3);
                    this.matrix.translate(arguments[0], arguments[1], 0)
                }
            },
            checkMatrix: function (ea) {
                if (this.matrix === null) {
                    if (ea === 2) {
                        this.matrix = new cW.PMatrix2D
                    } else {
                        this.matrix = new cW.PMatrix3D
                    }
                } else {
                    if (ea === 3 && this.matrix instanceof cW.PMatrix2D) {
                        this.matrix = new cW.PMatrix3D
                    }
                }
            },
            rotateX: function (ea) {
                this.rotate(ea, 1, 0, 0)
            },
            rotateY: function (ea) {
                this.rotate(ea, 0, 1, 0)
            },
            rotateZ: function (ea) {
                this.rotate(ea, 0, 0, 1)
            },
            rotate: function () {
                if (arguments.length === 1) {
                    this.checkMatrix(2);
                    this.matrix.rotate(arguments[0])
                } else {
                    this.checkMatrix(3);
                    this.matrix.rotate(arguments[0], arguments[1], arguments[2], arguments[3])
                }
            },
            scale: function () {
                if (arguments.length === 2) {
                    this.checkMatrix(2);
                    this.matrix.scale(arguments[0], arguments[1])
                } else {
                    if (arguments.length === 3) {
                        this.checkMatrix(2);
                        this.matrix.scale(arguments[0], arguments[1], arguments[2])
                    } else {
                        this.checkMatrix(2);
                        this.matrix.scale(arguments[0])
                    }
                }
            },
            resetMatrix: function () {
                this.checkMatrix(2);
                this.matrix.reset()
            },
            applyMatrix: function (ea) {
                if (arguments.length === 1) {
                    this.applyMatrix(ea.elements[0], ea.elements[1], 0, ea.elements[2], ea.elements[3], ea.elements[4], 0, ea.elements[5], 0, 0, 1, 0, 0, 0, 0, 1)
                } else {
                    if (arguments.length === 6) {
                        this.checkMatrix(2);
                        this.matrix.apply(arguments[0], arguments[1], arguments[2], 0, arguments[3], arguments[4], arguments[5], 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    } else {
                        if (arguments.length === 16) {
                            this.checkMatrix(3);
                            this.matrix.apply(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15])
                        }
                    }
                }
            }
        };
        var cr = cW.PShapeSVG = function () {
            cW.PShape.call(this);
            if (arguments.length === 1) {
                this.element = arguments[0];
                this.vertexCodes = [];
                this.vertices = [];
                this.opacity = 1;
                this.stroke = false;
                this.strokeColor = 4278190080;
                this.strokeWeight = 1;
                this.strokeCap = "butt";
                this.strokeJoin = "miter";
                this.strokeGradient = null;
                this.strokeGradientPaint = null;
                this.strokeName = null;
                this.strokeOpacity = 1;
                this.fill = true;
                this.fillColor = 4278190080;
                this.fillGradient = null;
                this.fillGradientPaint = null;
                this.fillName = null;
                this.fillOpacity = 1;
                if (this.element.getName() !== "svg") {
                    throw "root is not <svg>, it's <" + this.element.getName() + ">"
                }
            } else {
                if (arguments.length === 2) {
                    if (typeof arguments[1] === "string") {
                        if (arguments[1].indexOf(".svg") > -1) {
                            this.element = new cW.XMLElement(cW, arguments[1]);
                            this.vertexCodes = [];
                            this.vertices = [];
                            this.opacity = 1;
                            this.stroke = false;
                            this.strokeColor = 4278190080;
                            this.strokeWeight = 1;
                            this.strokeCap = "butt";
                            this.strokeJoin = "miter";
                            this.strokeGradient = "";
                            this.strokeGradientPaint = "";
                            this.strokeName = "";
                            this.strokeOpacity = 1;
                            this.fill = true;
                            this.fillColor = 4278190080;
                            this.fillGradient = null;
                            this.fillGradientPaint = null;
                            this.fillOpacity = 1
                        }
                    } else {
                        if (arguments[0]) {
                            this.element = arguments[1];
                            this.vertexCodes = arguments[0].vertexCodes.slice();
                            this.vertices = arguments[0].vertices.slice();
                            this.stroke = arguments[0].stroke;
                            this.strokeColor = arguments[0].strokeColor;
                            this.strokeWeight = arguments[0].strokeWeight;
                            this.strokeCap = arguments[0].strokeCap;
                            this.strokeJoin = arguments[0].strokeJoin;
                            this.strokeGradient = arguments[0].strokeGradient;
                            this.strokeGradientPaint = arguments[0].strokeGradientPaint;
                            this.strokeName = arguments[0].strokeName;
                            this.fill = arguments[0].fill;
                            this.fillColor = arguments[0].fillColor;
                            this.fillGradient = arguments[0].fillGradient;
                            this.fillGradientPaint = arguments[0].fillGradientPaint;
                            this.fillName = arguments[0].fillName;
                            this.strokeOpacity = arguments[0].strokeOpacity;
                            this.fillOpacity = arguments[0].fillOpacity;
                            this.opacity = arguments[0].opacity
                        }
                    }
                }
            }
            this.name = this.element.getStringAttribute("id");
            var ea = this.element.getStringAttribute("display", "inline");
            this.visible = ea !== "none";
            var ef = this.element.getAttribute("transform");
            if (ef) {
                this.matrix = this.parseMatrix(ef)
            }
            var ec = this.element.getStringAttribute("viewBox");
            if (ec !== null) {
                var ee = ec.split(" ");
                this.width = ee[2];
                this.height = ee[3]
            }
            var eb = this.element.getStringAttribute("width");
            var ed = this.element.getStringAttribute("height");
            if (eb !== null) {
                this.width = this.parseUnitSize(eb);
                this.height = this.parseUnitSize(ed)
            } else {
                if (this.width === 0 || this.height === 0) {
                    this.width = 1;
                    this.height = 1;
                    throw "The width and/or height is not readable in the <svg> tag of this file."
                }
            }
            this.parseColors(this.element);
            this.parseChildren(this.element)
        };
        cr.prototype = new O;
        cr.prototype.parseMatrix = function () {
            function ea(ec) {
                var eb = [];
                ec.replace(/\((.*?)\)/, function () {
                    return function (ed, ee) {
                        eb = ee.replace(/,+/g, " ").split(/\s+/)
                    }
                }());
                return eb
            }
            return function (ei) {
                this.checkMatrix(2);
                var eb = [];
                ei.replace(/\s*(\w+)\((.*?)\)/g, function (el) {
                    eb.push(cW.trim(el))
                });
                if (eb.length === 0) {
                    return null
                }
                for (var eg = 0, ee = eb.length; eg < ee; eg++) {
                    var ec = ea(eb[eg]);
                    if (eb[eg].indexOf("matrix") !== -1) {
                        this.matrix.set(ec[0], ec[2], ec[4], ec[1], ec[3], ec[5])
                    } else {
                        if (eb[eg].indexOf("translate") !== -1) {
                            var eh = ec[0];
                            var ef = ec.length === 2 ? ec[1] : 0;
                            this.matrix.translate(eh, ef)
                        } else {
                            if (eb[eg].indexOf("scale") !== -1) {
                                var ek = ec[0];
                                var ej = ec.length === 2 ? ec[1] : ec[0];
                                this.matrix.scale(ek, ej)
                            } else {
                                if (eb[eg].indexOf("rotate") !== -1) {
                                    var ed = ec[0];
                                    if (ec.length === 1) {
                                        this.matrix.rotate(cW.radians(ed))
                                    } else {
                                        if (ec.length === 3) {
                                            this.matrix.translate(ec[1], ec[2]);
                                            this.matrix.rotate(cW.radians(ec[0]));
                                            this.matrix.translate(-ec[1], -ec[2])
                                        }
                                    }
                                } else {
                                    if (eb[eg].indexOf("skewX") !== -1) {
                                        this.matrix.skewX(parseFloat(ec[0]))
                                    } else {
                                        if (eb[eg].indexOf("skewY") !== -1) {
                                            this.matrix.skewY(ec[0])
                                        } else {
                                            if (eb[eg].indexOf("shearX") !== -1) {
                                                this.matrix.shearX(ec[0])
                                            } else {
                                                if (eb[eg].indexOf("shearY") !== -1) {
                                                    this.matrix.shearY(ec[0])
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return this.matrix
            }
        }();
        cr.prototype.parseChildren = function (ef) {
            var eb = ef.getChildren();
            var ee = new cW.PShape;
            for (var ed = 0, ec = eb.length; ed < ec; ed++) {
                var ea = this.parseChild(eb[ed]);
                if (ea) {
                    ee.addChild(ea)
                }
            }
            this.children.push(ee)
        };
        cr.prototype.getName = function () {
            return this.name
        };
        cr.prototype.parseChild = function (ec) {
            var eb = ec.getName();
            var ea;
            if (eb === "g") {
                ea = new cr(this, ec)
            } else {
                if (eb === "defs") {
                    ea = new cr(this, ec)
                } else {
                    if (eb === "line") {
                        ea = new cr(this, ec);
                        ea.parseLine()
                    } else {
                        if (eb === "circle") {
                            ea = new cr(this, ec);
                            ea.parseEllipse(true)
                        } else {
                            if (eb === "ellipse") {
                                ea = new cr(this, ec);
                                ea.parseEllipse(false)
                            } else {
                                if (eb === "rect") {
                                    ea = new cr(this, ec);
                                    ea.parseRect()
                                } else {
                                    if (eb === "polygon") {
                                        ea = new cr(this, ec);
                                        ea.parsePoly(true)
                                    } else {
                                        if (eb === "polyline") {
                                            ea = new cr(this, ec);
                                            ea.parsePoly(false)
                                        } else {
                                            if (eb === "path") {
                                                ea = new cr(this, ec);
                                                ea.parsePath()
                                            } else {
                                                if (eb === "radialGradient") {
                                                    dw("PShapeSVG.prototype.parseChild, name = radialGradient")
                                                } else {
                                                    if (eb === "linearGradient") {
                                                        dw("PShapeSVG.prototype.parseChild, name = linearGradient")
                                                    } else {
                                                        if (eb === "text") {
                                                            dw("PShapeSVG.prototype.parseChild, name = text")
                                                        } else {
                                                            if (eb === "filter") {
                                                                dw("PShapeSVG.prototype.parseChild, name = filter")
                                                            } else {
                                                                if (eb === "mask") {
                                                                    dw("PShapeSVG.prototype.parseChild, name = mask")
                                                                } else {
                                                                    G()
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return ea
        };
        cr.prototype.parsePath = function () {
            this.family = 21;
            this.kind = 0;
            var ef = [];
            var ez;
            var ey = cW.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g, " "));
            if (ey === null) {
                return
            }
            ey = cW.__toCharArray(ey);
            var ed = 0,
                ec = 0,
                ek = 0,
                ei = 0,
                ej = 0,
                eh = 0,
                eq = 0,
                ep = 0,
                eb = 0,
                ea = 0,
                em = 0,
                el = 0,
                eo = 0,
                en = 0,
                ex = 0,
                et = 0;
            var er = "";
            var ev = [];
            var ew = false;
            var eg;
            var ee;
            var eu, es;
            while (ex < ey.length) {
                et = ey[ex].valueOf();
                if (et >= 65 && et <= 90 || et >= 97 && et <= 122) {
                    eu = ex;
                    ex++;
                    if (ex < ey.length) {
                        ev = [];
                        et = ey[ex].valueOf();
                        while (!(et >= 65 && et <= 90 || et >= 97 && et <= 100 || et >= 102 && et <= 122) && ew === false) {
                            if (et === 32) {
                                if (er !== "") {
                                    ev.push(parseFloat(er));
                                    er = ""
                                }
                                ex++
                            } else {
                                if (et === 45) {
                                    if (ey[ex - 1].valueOf() === 101) {
                                        er += ey[ex].toString();
                                        ex++
                                    } else {
                                        if (er !== "") {
                                            ev.push(parseFloat(er))
                                        }
                                        er = ey[ex].toString();
                                        ex++
                                    }
                                } else {
                                    er += ey[ex].toString();
                                    ex++
                                }
                            }
                            if (ex === ey.length) {
                                ew = true
                            } else {
                                et = ey[ex].valueOf()
                            }
                        }
                    }
                    if (er !== "") {
                        ev.push(parseFloat(er));
                        er = ""
                    }
                    ee = ey[eu];
                    et = ee.valueOf();
                    if (et === 77) {
                        if (ev.length >= 2 && ev.length % 2 === 0) {
                            ed = ev[0];
                            ec = ev[1];
                            this.parsePathMoveto(ed, ec);
                            if (ev.length > 2) {
                                for (eu = 2, es = ev.length; eu < es; eu += 2) {
                                    ed = ev[eu];
                                    ec = ev[eu + 1];
                                    this.parsePathLineto(ed, ec)
                                }
                            }
                        }
                    } else {
                        if (et === 109) {
                            if (ev.length >= 2 && ev.length % 2 === 0) {
                                ed += ev[0];
                                ec += ev[1];
                                this.parsePathMoveto(ed, ec);
                                if (ev.length > 2) {
                                    for (eu = 2, es = ev.length; eu < es; eu += 2) {
                                        ed += ev[eu];
                                        ec += ev[eu + 1];
                                        this.parsePathLineto(ed, ec)
                                    }
                                }
                            }
                        } else {
                            if (et === 76) {
                                if (ev.length >= 2 && ev.length % 2 === 0) {
                                    for (eu = 0, es = ev.length; eu < es; eu += 2) {
                                        ed = ev[eu];
                                        ec = ev[eu + 1];
                                        this.parsePathLineto(ed, ec)
                                    }
                                }
                            } else {
                                if (et === 108) {
                                    if (ev.length >= 2 && ev.length % 2 === 0) {
                                        for (eu = 0, es = ev.length; eu < es; eu += 2) {
                                            ed += ev[eu];
                                            ec += ev[eu + 1];
                                            this.parsePathLineto(ed, ec)
                                        }
                                    }
                                } else {
                                    if (et === 72) {
                                        for (eu = 0, es = ev.length; eu < es; eu++) {
                                            ed = ev[eu];
                                            this.parsePathLineto(ed, ec)
                                        }
                                    } else {
                                        if (et === 104) {
                                            for (eu = 0, es = ev.length; eu < es; eu++) {
                                                ed += ev[eu];
                                                this.parsePathLineto(ed, ec)
                                            }
                                        } else {
                                            if (et === 86) {
                                                for (eu = 0, es = ev.length; eu < es; eu++) {
                                                    ec = ev[eu];
                                                    this.parsePathLineto(ed, ec)
                                                }
                                            } else {
                                                if (et === 118) {
                                                    for (eu = 0, es = ev.length; eu < es; eu++) {
                                                        ec += ev[eu];
                                                        this.parsePathLineto(ed, ec)
                                                    }
                                                } else {
                                                    if (et === 67) {
                                                        if (ev.length >= 6 && ev.length % 6 === 0) {
                                                            for (eu = 0, es = ev.length; eu < es; eu += 6) {
                                                                ej = ev[eu];
                                                                eq = ev[eu + 1];
                                                                eh = ev[eu + 2];
                                                                ep = ev[eu + 3];
                                                                eb = ev[eu + 4];
                                                                ea = ev[eu + 5];
                                                                this.parsePathCurveto(ej, eq, eh, ep, eb, ea);
                                                                ed = eb;
                                                                ec = ea
                                                            }
                                                        }
                                                    } else {
                                                        if (et === 99) {
                                                            if (ev.length >= 6 && ev.length % 6 === 0) {
                                                                for (eu = 0, es = ev.length; eu < es; eu += 6) {
                                                                    ej = ed + ev[eu];
                                                                    eq = ec + ev[eu + 1];
                                                                    eh = ed + ev[eu + 2];
                                                                    ep = ec + ev[eu + 3];
                                                                    eb = ed + ev[eu + 4];
                                                                    ea = ec + ev[eu + 5];
                                                                    this.parsePathCurveto(ej, eq, eh, ep, eb, ea);
                                                                    ed = eb;
                                                                    ec = ea
                                                                }
                                                            }
                                                        } else {
                                                            if (et === 83) {
                                                                if (ev.length >= 4 && ev.length % 4 === 0) {
                                                                    for (eu = 0, es = ev.length; eu < es; eu += 4) {
                                                                        if (eg.toLowerCase() === "c" || eg.toLowerCase() === "s") {
                                                                            em = this.vertices[this.vertices.length - 2][0];
                                                                            el = this.vertices[this.vertices.length - 2][1];
                                                                            eo = this.vertices[this.vertices.length - 1][0];
                                                                            en = this.vertices[this.vertices.length - 1][1];
                                                                            ej = eo + (eo - em);
                                                                            eq = en + (en - el)
                                                                        } else {
                                                                            ej = this.vertices[this.vertices.length - 1][0];
                                                                            eq = this.vertices[this.vertices.length - 1][1]
                                                                        }
                                                                        eh = ev[eu];
                                                                        ep = ev[eu + 1];
                                                                        eb = ev[eu + 2];
                                                                        ea = ev[eu + 3];
                                                                        this.parsePathCurveto(ej, eq, eh, ep, eb, ea);
                                                                        ed = eb;
                                                                        ec = ea
                                                                    }
                                                                }
                                                            } else {
                                                                if (et === 115) {
                                                                    if (ev.length >= 4 && ev.length % 4 === 0) {
                                                                        for (eu = 0, es = ev.length; eu < es; eu += 4) {
                                                                            if (eg.toLowerCase() === "c" || eg.toLowerCase() === "s") {
                                                                                em = this.vertices[this.vertices.length - 2][0];
                                                                                el = this.vertices[this.vertices.length - 2][1];
                                                                                eo = this.vertices[this.vertices.length - 1][0];
                                                                                en = this.vertices[this.vertices.length - 1][1];
                                                                                ej = eo + (eo - em);
                                                                                eq = en + (en - el)
                                                                            } else {
                                                                                ej = this.vertices[this.vertices.length - 1][0];
                                                                                eq = this.vertices[this.vertices.length - 1][1]
                                                                            }
                                                                            eh = ed + ev[eu];
                                                                            ep = ec + ev[eu + 1];
                                                                            eb = ed + ev[eu + 2];
                                                                            ea = ec + ev[eu + 3];
                                                                            this.parsePathCurveto(ej, eq, eh, ep, eb, ea);
                                                                            ed = eb;
                                                                            ec = ea
                                                                        }
                                                                    }
                                                                } else {
                                                                    if (et === 81) {
                                                                        if (ev.length >= 4 && ev.length % 4 === 0) {
                                                                            for (eu = 0, es = ev.length; eu < es; eu += 4) {
                                                                                ek = ev[eu];
                                                                                ei = ev[eu + 1];
                                                                                eb = ev[eu + 2];
                                                                                ea = ev[eu + 3];
                                                                                this.parsePathQuadto(ed, ec, ek, ei, eb, ea);
                                                                                ed = eb;
                                                                                ec = ea
                                                                            }
                                                                        }
                                                                    } else {
                                                                        if (et === 113) {
                                                                            if (ev.length >= 4 && ev.length % 4 === 0) {
                                                                                for (eu = 0, es = ev.length; eu < es; eu += 4) {
                                                                                    ek = ed + ev[eu];
                                                                                    ei = ec + ev[eu + 1];
                                                                                    eb = ed + ev[eu + 2];
                                                                                    ea = ec + ev[eu + 3];
                                                                                    this.parsePathQuadto(ed, ec, ek, ei, eb, ea);
                                                                                    ed = eb;
                                                                                    ec = ea
                                                                                }
                                                                            }
                                                                        } else {
                                                                            if (et === 84) {
                                                                                if (ev.length >= 2 && ev.length % 2 === 0) {
                                                                                    for (eu = 0, es = ev.length; eu < es; eu += 2) {
                                                                                        if (eg.toLowerCase() === "q" || eg.toLowerCase() === "t") {
                                                                                            em = this.vertices[this.vertices.length - 2][0];
                                                                                            el = this.vertices[this.vertices.length - 2][1];
                                                                                            eo = this.vertices[this.vertices.length - 1][0];
                                                                                            en = this.vertices[this.vertices.length - 1][1];
                                                                                            ek = eo + (eo - em);
                                                                                            ei = en + (en - el)
                                                                                        } else {
                                                                                            ek = ed;
                                                                                            ei = ec
                                                                                        }
                                                                                        eb = ev[eu];
                                                                                        ea = ev[eu + 1];
                                                                                        this.parsePathQuadto(ed, ec, ek, ei, eb, ea);
                                                                                        ed = eb;
                                                                                        ec = ea
                                                                                    }
                                                                                }
                                                                            } else {
                                                                                if (et === 116) {
                                                                                    if (ev.length >= 2 && ev.length % 2 === 0) {
                                                                                        for (eu = 0, es = ev.length; eu < es; eu += 2) {
                                                                                            if (eg.toLowerCase() === "q" || eg.toLowerCase() === "t") {
                                                                                                em = this.vertices[this.vertices.length - 2][0];
                                                                                                el = this.vertices[this.vertices.length - 2][1];
                                                                                                eo = this.vertices[this.vertices.length - 1][0];
                                                                                                en = this.vertices[this.vertices.length - 1][1];
                                                                                                ek = eo + (eo - em);
                                                                                                ei = en + (en - el)
                                                                                            } else {
                                                                                                ek = ed;
                                                                                                ei = ec
                                                                                            }
                                                                                            eb = ed + ev[eu];
                                                                                            ea = ec + ev[eu + 1];
                                                                                            this.parsePathQuadto(ed, ec, ek, ei, eb, ea);
                                                                                            ed = eb;
                                                                                            ec = ea
                                                                                        }
                                                                                    }
                                                                                } else {
                                                                                    if (et === 90 || et === 122) {
                                                                                        this.close = true
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    eg = ee.toString()
                } else {
                    ex++
                }
            }
        };
        cr.prototype.parsePathQuadto = function (ec, ee, ea, ef, eb, ed) {
            if (this.vertices.length > 0) {
                this.parsePathCode(1);
                this.parsePathVertex(ec + (ea - ec) * 2 / 3, ee + (ef - ee) * 2 / 3);
                this.parsePathVertex(eb + (ea - eb) * 2 / 3, ed + (ef - ed) * 2 / 3);
                this.parsePathVertex(eb, ed)
            } else {
                throw "Path must start with M/m"
            }
        };
        cr.prototype.parsePathCurveto = function (ed, ef, eb, ee, ea, ec) {
            if (this.vertices.length > 0) {
                this.parsePathCode(1);
                this.parsePathVertex(ed, ef);
                this.parsePathVertex(eb, ee);
                this.parsePathVertex(ea, ec)
            } else {
                throw "Path must start with M/m"
            }
        };
        cr.prototype.parsePathLineto = function (eb, ea) {
            if (this.vertices.length > 0) {
                this.parsePathCode(0);
                this.parsePathVertex(eb, ea);
                this.vertices[this.vertices.length - 1]["moveTo"] = false
            } else {
                throw "Path must start with M/m"
            }
        };
        cr.prototype.parsePathMoveto = function (eb, ea) {
            if (this.vertices.length > 0) {
                this.parsePathCode(3)
            }
            this.parsePathCode(0);
            this.parsePathVertex(eb, ea);
            this.vertices[this.vertices.length - 1]["moveTo"] = true
        };
        cr.prototype.parsePathVertex = function (ea, ec) {
            var eb = [];
            eb[0] = ea;
            eb[1] = ec;
            this.vertices.push(eb)
        };
        cr.prototype.parsePathCode = function (ea) {
            this.vertexCodes.push(ea)
        };
        cr.prototype.parsePoly = function (ee) {
            this.family = 21;
            this.close = ee;
            var eb = cW.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g, " "));
            if (eb !== null) {
                var ea = eb.split(" ");
                if (ea.length % 2 === 0) {
                    for (var ed = 0, ec = ea.length; ed < ec; ed++) {
                        var ef = [];
                        ef[0] = ea[ed];
                        ef[1] = ea[++ed];
                        this.vertices.push(ef)
                    }
                } else {
                    throw "Error parsing polygon points: odd number of coordinates provided"
                }
            }
        };
        cr.prototype.parseRect = function () {
            this.kind = 30;
            this.family = 1;
            this.params = [];
            this.params[0] = this.element.getFloatAttribute("x");
            this.params[1] = this.element.getFloatAttribute("y");
            this.params[2] = this.element.getFloatAttribute("width");
            this.params[3] = this.element.getFloatAttribute("height");
            if (this.params[2] < 0 || this.params[3] < 0) {
                throw "svg error: negative width or height found while parsing <rect>"
            }
        };
        cr.prototype.parseEllipse = function (ec) {
            this.kind = 31;
            this.family = 1;
            this.params = [];
            this.params[0] = this.element.getFloatAttribute("cx") | 0;
            this.params[1] = this.element.getFloatAttribute("cy") | 0;
            var eb, ea;
            if (ec) {
                eb = ea = this.element.getFloatAttribute("r");
                if (eb < 0) {
                    throw "svg error: negative radius found while parsing <circle>"
                }
            } else {
                eb = this.element.getFloatAttribute("rx");
                ea = this.element.getFloatAttribute("ry");
                if (eb < 0 || ea < 0) {
                    throw "svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"
                }
            }
            this.params[0] -= eb;
            this.params[1] -= ea;
            this.params[2] = eb * 2;
            this.params[3] = ea * 2
        };
        cr.prototype.parseLine = function () {
            this.kind = 4;
            this.family = 1;
            this.params = [];
            this.params[0] = this.element.getFloatAttribute("x1");
            this.params[1] = this.element.getFloatAttribute("y1");
            this.params[2] = this.element.getFloatAttribute("x2");
            this.params[3] = this.element.getFloatAttribute("y2")
        };
        cr.prototype.parseColors = function (ec) {
            if (ec.hasAttribute("opacity")) {
                this.setOpacity(ec.getAttribute("opacity"))
            }
            if (ec.hasAttribute("stroke")) {
                this.setStroke(ec.getAttribute("stroke"))
            }
            if (ec.hasAttribute("stroke-width")) {
                this.setStrokeWeight(ec.getAttribute("stroke-width"))
            }
            if (ec.hasAttribute("stroke-linejoin")) {
                this.setStrokeJoin(ec.getAttribute("stroke-linejoin"))
            }
            if (ec.hasAttribute("stroke-linecap")) {
                this.setStrokeCap(ec.getStringAttribute("stroke-linecap"))
            }
            if (ec.hasAttribute("fill")) {
                this.setFill(ec.getStringAttribute("fill"))
            }
            if (ec.hasAttribute("style")) {
                var ef = ec.getStringAttribute("style");
                var ed = ef.toString().split(";");
                for (var eb = 0, ea = ed.length; eb < ea; eb++) {
                    var ee = cW.trim(ed[eb].split(":"));
                    if (ee[0] === "fill") {
                        this.setFill(ee[1])
                    } else {
                        if (ee[0] === "fill-opacity") {
                            this.setFillOpacity(ee[1])
                        } else {
                            if (ee[0] === "stroke") {
                                this.setStroke(ee[1])
                            } else {
                                if (ee[0] === "stroke-width") {
                                    this.setStrokeWeight(ee[1])
                                } else {
                                    if (ee[0] === "stroke-linecap") {
                                        this.setStrokeCap(ee[1])
                                    } else {
                                        if (ee[0] === "stroke-linejoin") {
                                            this.setStrokeJoin(ee[1])
                                        } else {
                                            if (ee[0] === "stroke-opacity") {
                                                this.setStrokeOpacity(ee[1])
                                            } else {
                                                if (ee[0] === "opacity") {
                                                    this.setOpacity(ee[1])
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        cr.prototype.setFillOpacity = function (ea) {
            this.fillOpacity = parseFloat(ea);
            this.fillColor = this.fillOpacity * 255 << 24 | this.fillColor & 16777215
        };
        cr.prototype.setFill = function (ea) {
            var eb = this.fillColor & 4278190080;
            if (ea === "none") {
                this.fill = false
            } else {
                if (ea.indexOf("#") === 0) {
                    this.fill = true;
                    if (ea.length === 4) {
                        ea = ea.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3")
                    }
                    this.fillColor = eb | parseInt(ea.substring(1), 16) & 16777215
                } else {
                    if (ea.indexOf("rgb") === 0) {
                        this.fill = true;
                        this.fillColor = eb | this.parseRGB(ea)
                    } else {
                        if (ea.indexOf("url(#") === 0) {
                            this.fillName = ea.substring(5, ea.length - 1)
                        } else {
                            if (E[ea]) {
                                this.fill = true;
                                this.fillColor = eb | parseInt(E[ea].substring(1), 16) & 16777215
                            }
                        }
                    }
                }
            }
        };
        cr.prototype.setOpacity = function (ea) {
            this.strokeColor = parseFloat(ea) * 255 << 24 | this.strokeColor & 16777215;
            this.fillColor = parseFloat(ea) * 255 << 24 | this.fillColor & 16777215
        };
        cr.prototype.setStroke = function (ea) {
            var eb = this.strokeColor & 4278190080;
            if (ea === "none") {
                this.stroke = false
            } else {
                if (ea.charAt(0) === "#") {
                    this.stroke = true;
                    if (ea.length === 4) {
                        ea = ea.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3")
                    }
                    this.strokeColor = eb | parseInt(ea.substring(1), 16) & 16777215
                } else {
                    if (ea.indexOf("rgb") === 0) {
                        this.stroke = true;
                        this.strokeColor = eb | this.parseRGB(ea)
                    } else {
                        if (ea.indexOf("url(#") === 0) {
                            this.strokeName = ea.substring(5, ea.length - 1)
                        } else {
                            if (E[ea]) {
                                this.stroke = true;
                                this.strokeColor = eb | parseInt(E[ea].substring(1), 16) & 16777215
                            }
                        }
                    }
                }
            }
        };
        cr.prototype.setStrokeWeight = function (ea) {
            this.strokeWeight = this.parseUnitSize(ea)
        };
        cr.prototype.setStrokeJoin = function (ea) {
            if (ea === "miter") {
                this.strokeJoin = "miter"
            } else {
                if (ea === "round") {
                    this.strokeJoin = "round"
                } else {
                    if (ea === "bevel") {
                        this.strokeJoin = "bevel"
                    }
                }
            }
        };
        cr.prototype.setStrokeCap = function (ea) {
            if (ea === "butt") {
                this.strokeCap = "butt"
            } else {
                if (ea === "round") {
                    this.strokeCap = "round"
                } else {
                    if (ea === "square") {
                        this.strokeCap = "square"
                    }
                }
            }
        };
        cr.prototype.setStrokeOpacity = function (ea) {
            this.strokeOpacity = parseFloat(ea);
            this.strokeColor = this.strokeOpacity * 255 << 24 | this.strokeColor & 16777215
        };
        cr.prototype.parseRGB = function (eb) {
            var ec = eb.substring(eb.indexOf("(") + 1, eb.indexOf(")"));
            var ea = ec.split(", ");
            return ea[0] << 16 | ea[1] << 8 | ea[2]
        };
        cr.prototype.parseUnitSize = function (eb) {
            var ea = eb.length - 2;
            if (ea < 0) {
                return eb
            }
            if (eb.indexOf("pt") === ea) {
                return parseFloat(eb.substring(0, ea)) * 1.25
            }
            if (eb.indexOf("pc") === ea) {
                return parseFloat(eb.substring(0, ea)) * 15
            }
            if (eb.indexOf("mm") === ea) {
                return parseFloat(eb.substring(0, ea)) * 3.543307
            }
            if (eb.indexOf("cm") === ea) {
                return parseFloat(eb.substring(0, ea)) * 35.43307
            }
            if (eb.indexOf("in") === ea) {
                return parseFloat(eb.substring(0, ea)) * 90
            }
            if (eb.indexOf("px") === ea) {
                return parseFloat(eb.substring(0, ea))
            }
            return parseFloat(eb)
        };
        cW.shape = function (ec, eb, ee, ed, ea) {
            if (arguments.length >= 1 && arguments[0] !== null) {
                if (ec.isVisible()) {
                    cW.pushMatrix();
                    if (S === 3) {
                        if (arguments.length === 5) {
                            cW.translate(eb - ed / 2, ee - ea / 2);
                            cW.scale(ed / ec.getWidth(), ea / ec.getHeight())
                        } else {
                            if (arguments.length === 3) {
                                cW.translate(eb - ec.getWidth() / 2, -ec.getHeight() / 2)
                            } else {
                                cW.translate(-ec.getWidth() / 2, -ec.getHeight() / 2)
                            }
                        }
                    } else {
                        if (S === 0) {
                            if (arguments.length === 5) {
                                cW.translate(eb, ee);
                                cW.scale(ed / ec.getWidth(), ea / ec.getHeight())
                            } else {
                                if (arguments.length === 3) {
                                    cW.translate(eb, ee)
                                }
                            }
                        } else {
                            if (S === 1) {
                                if (arguments.length === 5) {
                                    ed -= eb;
                                    ea -= ee;
                                    cW.translate(eb, ee);
                                    cW.scale(ed / ec.getWidth(), ea / ec.getHeight())
                                } else {
                                    if (arguments.length === 3) {
                                        cW.translate(eb, ee)
                                    }
                                }
                            }
                        }
                    }
                    ec.draw(cW);
                    if (arguments.length === 1 && S === 3 || arguments.length > 1) {
                        cW.popMatrix()
                    }
                }
            }
        };
        cW.shapeMode = function (ea) {
            S = ea
        };
        cW.loadShape = function (ea) {
            if (arguments.length === 1) {
                if (ea.indexOf(".svg") > -1) {
                    return new cr(null, ea)
                }
            }
            return null
        };
        var cT = function (ee, ed, ea, eb, ec) {
            this.fullName = ee || "";
            this.name = ed || "";
            this.namespace = ea || "";
            this.value = eb;
            this.type = ec
        };
        cT.prototype = {
            getName: function () {
                return this.name
            },
            getFullName: function () {
                return this.fullName
            },
            getNamespace: function () {
                return this.namespace
            },
            getValue: function () {
                return this.value
            },
            getType: function () {
                return this.type
            },
            setValue: function (ea) {
                this.value = ea
            }
        };
        var b9 = cW.XMLElement = function (ea, ec, ed, eb) {
            this.attributes = [];
            this.children = [];
            this.fullName = null;
            this.name = null;
            this.namespace = "";
            this.content = null;
            this.parent = null;
            this.lineNr = "";
            this.systemID = "";
            this.type = "ELEMENT";
            if (ea) {
                if (typeof ea === "string") {
                    if (ec === t && ea.indexOf("<") > -1) {
                        this.parse(ea)
                    } else {
                        this.fullName = ea;
                        this.namespace = ec;
                        this.systemId = ed;
                        this.lineNr = eb
                    }
                } else {
                    this.parse(ec)
                }
            }
        };
        b9.prototype = {
            parse: function (ea) {
                var ec;
                try {
                    var ee = ea.substring(ea.length - 4);
                    if (ee === ".xml" || ee === ".svg") {
                        ea = w(ea)
                    }
                    ec = (new DOMParser).parseFromString(ea, "text/xml");
                    var eb = ec.documentElement;
                    if (eb) {
                        this.parseChildrenRecursive(null, eb)
                    } else {
                        throw "Error loading document"
                    }
                    return this
                } catch (ed) {
                    throw ed
                }
            },
            parseChildrenRecursive: function (ei, eg) {
                var ef, eb, eh, ee, ed, ea;
                if (!ei) {
                    this.fullName = eg.localName;
                    this.name = eg.nodeName;
                    ef = this
                } else {
                    ef = new b9(eg.nodeName);
                    ef.parent = ei
                }
                if (eg.nodeType === 3 && eg.textContent !== "") {
                    return this.createPCDataElement(eg.textContent)
                }
                if (eg.nodeType === 4) {
                    return this.createCDataElement(eg.textContent)
                }
                if (eg.attributes) {
                    for (ee = 0, ed = eg.attributes.length; ee < ed; ee++) {
                        eh = eg.attributes[ee];
                        eb = new cT(eh.getname, eh.nodeName, eh.namespaceURI, eh.nodeValue, eh.nodeType);
                        ef.attributes.push(eb)
                    }
                }
                if (eg.childNodes) {
                    for (ee = 0, ed = eg.childNodes.length; ee < ed; ee++) {
                        var ec = eg.childNodes[ee];
                        ea = ef.parseChildrenRecursive(ef, ec);
                        if (ea !== null) {
                            ef.children.push(ea)
                        }
                    }
                }
                return ef
            },
            createElement: function (eb, ec, ed, ea) {
                if (ed === t) {
                    return new b9(eb, ec)
                }
                return new b9(eb, ec, ed, ea)
            },
            createPCDataElement: function (eb, ea) {
                if (eb.replace(/^\s+$/g, "") === "") {
                    return null
                }
                var ec = new b9;
                ec.type = "TEXT";
                ec.content = eb;
                return ec
            },
            createCDataElement: function (ec) {
                var ed = this.createPCDataElement(ec);
                if (ed === null) {
                    return null
                }
                ed.type = "CDATA";
                var eb = {
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&apos;",
                    '"': "&quot;"
                }, ea;
                for (ea in eb) {
                    if (!Object.hasOwnProperty(eb, ea)) {
                        ec = ec.replace(new RegExp(ea, "g"), eb[ea])
                    }
                }
                ed.cdata = ec;
                return ed
            },
            hasAttribute: function () {
                if (arguments.length === 1) {
                    return this.getAttribute(arguments[0]) !== null
                }
                if (arguments.length === 2) {
                    return this.getAttribute(arguments[0], arguments[1]) !== null
                }
            },
            equals: function (ef) {
                if (!(ef instanceof b9)) {
                    return false
                }
                var ec, eb;
                if (this.fullName !== ef.fullName) {
                    return false
                }
                if (this.attributes.length !== ef.getAttributeCount()) {
                    return false
                }
                if (this.attributes.length !== ef.attributes.length) {
                    return false
                }
                var ej, eh, ea, eg, ei;
                for (ec = 0, eb = this.attributes.length; ec < eb; ec++) {
                    ej = this.attributes[ec].getName();
                    eh = this.attributes[ec].getNamespace();
                    ei = ef.findAttribute(ej, eh);
                    if (ei === null) {
                        return false
                    }
                    if (this.attributes[ec].getValue() !== ei.getValue()) {
                        return false
                    }
                    if (this.attributes[ec].getType() !== ei.getType()) {
                        return false
                    }
                }
                if (this.children.length !== ef.getChildCount()) {
                    return false
                }
                if (this.children.length > 0) {
                    var ee, ed;
                    for (ec = 0, eb = this.children.length; ec < eb; ec++) {
                        ee = this.getChild(ec);
                        ed = ef.getChild(ec);
                        if (!ee.equals(ed)) {
                            return false
                        }
                    }
                    return true
                }
                return this.content === ef.content
            },
            getContent: function () {
                if (this.type === "TEXT" || this.type === "CDATA") {
                    return this.content
                }
                var ea = this.children;
                if (ea.length === 1 && (ea[0].type === "TEXT" || ea[0].type === "CDATA")) {
                    return ea[0].content
                }
                return null
            },
            getAttribute: function () {
                var ea;
                if (arguments.length === 2) {
                    ea = this.findAttribute(arguments[0]);
                    if (ea) {
                        return ea.getValue()
                    }
                    return arguments[1]
                } else {
                    if (arguments.length === 1) {
                        ea = this.findAttribute(arguments[0]);
                        if (ea) {
                            return ea.getValue()
                        }
                        return null
                    } else {
                        if (arguments.length === 3) {
                            ea = this.findAttribute(arguments[0], arguments[1]);
                            if (ea) {
                                return ea.getValue()
                            }
                            return arguments[2]
                        }
                    }
                }
            },
            getStringAttribute: function () {
                if (arguments.length === 1) {
                    return this.getAttribute(arguments[0])
                }
                if (arguments.length === 2) {
                    return this.getAttribute(arguments[0], arguments[1])
                }
                return this.getAttribute(arguments[0], arguments[1], arguments[2])
            },
            getString: function (ea) {
                return this.getStringAttribute(ea)
            },
            getFloatAttribute: function () {
                if (arguments.length === 1) {
                    return parseFloat(this.getAttribute(arguments[0], 0))
                }
                if (arguments.length === 2) {
                    return this.getAttribute(arguments[0], arguments[1])
                }
                return this.getAttribute(arguments[0], arguments[1], arguments[2])
            },
            getFloat: function (ea) {
                return this.getFloatAttribute(ea)
            },
            getIntAttribute: function () {
                if (arguments.length === 1) {
                    return this.getAttribute(arguments[0], 0)
                }
                if (arguments.length === 2) {
                    return this.getAttribute(arguments[0], arguments[1])
                }
                return this.getAttribute(arguments[0], arguments[1], arguments[2])
            },
            getInt: function (ea) {
                return this.getIntAttribute(ea)
            },
            hasChildren: function () {
                return this.children.length > 0
            },
            addChild: function (ea) {
                if (ea !== null) {
                    ea.parent = this;
                    this.children.push(ea)
                }
            },
            insertChild: function (ec, ea) {
                if (ec) {
                    if (ec.getLocalName() === null && !this.hasChildren()) {
                        var eb = this.children[this.children.length - 1];
                        if (eb.getLocalName() === null) {
                            eb.setContent(eb.getContent() + ec.getContent());
                            return
                        }
                    }
                    ec.parent = this;
                    this.children.splice(ea, 0, ec)
                }
            },
            getChild: function (eb) {
                if (typeof eb === "number") {
                    return this.children[eb]
                }
                if (eb.indexOf("/") !== -1) {
                    return this.getChildRecursive(eb.split("/"), 0)
                }
                var ea, ee;
                for (var ed = 0, ec = this.getChildCount(); ed < ec; ed++) {
                    ea = this.getChild(ed);
                    ee = ea.getName();
                    if (ee !== null && ee === eb) {
                        return ea
                    }
                }
                return null
            },
            getChildren: function () {
                if (arguments.length === 1) {
                    if (typeof arguments[0] === "number") {
                        return this.getChild(arguments[0])
                    }
                    if (arguments[0].indexOf("/") !== -1) {
                        return this.getChildrenRecursive(arguments[0].split("/"), 0)
                    }
                    var ee = [];
                    var ea, ed;
                    for (var ec = 0, eb = this.getChildCount(); ec < eb; ec++) {
                        ea = this.getChild(ec);
                        ed = ea.getName();
                        if (ed !== null && ed === arguments[0]) {
                            ee.push(ea)
                        }
                    }
                    return ee
                }
                return this.children
            },
            getChildCount: function () {
                return this.children.length
            },
            getChildRecursive: function (eb, eg) {
                if (eg === eb.length) {
                    return this
                }
                var ea, ef, ee = eb[eg];
                for (var ed = 0, ec = this.getChildCount(); ed < ec; ed++) {
                    ea = this.getChild(ed);
                    ef = ea.getName();
                    if (ef !== null && ef === ee) {
                        return ea.getChildRecursive(eb, eg + 1)
                    }
                }
                return null
            },
            getChildrenRecursive: function (ea, ee) {
                if (ee === ea.length - 1) {
                    return this.getChildren(ea[ee])
                }
                var ed = this.getChildren(ea[ee]);
                var ec = [];
                for (var eb = 0; eb < ed.length; eb++) {
                    ec = ec.concat(ed[eb].getChildrenRecursive(ea, ee + 1))
                }
                return ec
            },
            isLeaf: function () {
                return !this.hasChildren()
            },
            listChildren: function () {
                var ea = [];
                for (var ec = 0, eb = this.children.length; ec < eb; ec++) {
                    ea.push(this.getChild(ec).getName())
                }
                return ea
            },
            removeAttribute: function (eb, ed) {
                this.namespace = ed || "";
                for (var ec = 0, ea = this.attributes.length; ec < ea; ec++) {
                    if (this.attributes[ec].getName() === eb && this.attributes[ec].getNamespace() === this.namespace) {
                        this.attributes.splice(ec, 1);
                        break
                    }
                }
            },
            removeChild: function (ec) {
                if (ec) {
                    for (var eb = 0, ea = this.children.length; eb < ea; eb++) {
                        if (this.children[eb].equals(ec)) {
                            this.children.splice(eb, 1);
                            break
                        }
                    }
                }
            },
            removeChildAtIndex: function (ea) {
                if (this.children.length > ea) {
                    this.children.splice(ea, 1)
                }
            },
            findAttribute: function (eb, ed) {
                this.namespace = ed || "";
                for (var ec = 0, ea = this.attributes.length; ec < ea; ec++) {
                    if (this.attributes[ec].getName() === eb && this.attributes[ec].getNamespace() === this.namespace) {
                        return this.attributes[ec]
                    }
                }
                return null
            },
            setAttribute: function () {
                var ea;
                if (arguments.length === 3) {
                    var ec = arguments[0].indexOf(":");
                    var eb = arguments[0].substring(ec + 1);
                    ea = this.findAttribute(eb, arguments[1]);
                    if (ea) {
                        ea.setValue(arguments[2])
                    } else {
                        ea = new cT(arguments[0], eb, arguments[1], arguments[2], "CDATA");
                        this.attributes.push(ea)
                    }
                } else {
                    ea = this.findAttribute(arguments[0]);
                    if (ea) {
                        ea.setValue(arguments[1])
                    } else {
                        ea = new cT(arguments[0], arguments[0], null, arguments[1], "CDATA");
                        this.attributes.push(ea)
                    }
                }
            },
            setString: function (ea, eb) {
                this.setAttribute(ea, eb)
            },
            setInt: function (ea, eb) {
                this.setAttribute(ea, eb)
            },
            setFloat: function (ea, eb) {
                this.setAttribute(ea, eb)
            },
            setContent: function (ea) {
                if (this.children.length > 0) {
                    F.debug("Tried to set content for XMLElement with children")
                }
                this.content = ea
            },
            setName: function () {
                if (arguments.length === 1) {
                    this.name = arguments[0];
                    this.fullName = arguments[0];
                    this.namespace = null
                } else {
                    var ea = arguments[0].indexOf(":");
                    if (arguments[1] === null || ea < 0) {
                        this.name = arguments[0]
                    } else {
                        this.name = arguments[0].substring(ea + 1)
                    }
                    this.fullName = arguments[0];
                    this.namespace = arguments[1]
                }
            },
            getName: function () {
                return this.fullName
            },
            getLocalName: function () {
                return this.name
            },
            getAttributeCount: function () {
                return this.attributes.length
            },
            toString: function () {
                if (this.type === "TEXT") {
                    return this.content
                }
                if (this.type === "CDATA") {
                    return this.cdata
                }
                var ec = this.fullName;
                var ed = "<" + ec;
                var eb, ee;
                for (eb = 0; eb < this.attributes.length; eb++) {
                    var ea = this.attributes[eb];
                    ed += " " + ea.getName() + '="' + ea.getValue() + '"'
                }
                if (this.children.length === 0) {
                    if (this.content === "") {
                        ed += "/>"
                    } else {
                        ed += ">" + this.content + "</" + ec + ">"
                    }
                } else {
                    ed += ">";
                    for (ee = 0; ee < this.children.length; ee++) {
                        ed += this.children[ee].toString()
                    }
                    ed += "</" + ec + ">"
                }
                return ed
            }
        };
        b9.parse = function (eb) {
            var ea = new b9;
            ea.parse(eb);
            return ea
        };
        var dg = cW.XML = cW.XMLElement;
        cW.loadXML = function (ea) {
            return new dg(cW, ea)
        };
        var cm = function (ed) {
            var ea = 0;
            for (var eb = 0; eb < ed.length; eb++) {
                if (eb !== 0) {
                    ea = q.max(ea, q.abs(ed[eb]))
                } else {
                    ea = q.abs(ed[eb])
                }
            }
            var ec = (ea + "").indexOf(".");
            if (ec === 0) {
                ec = 1
            } else {
                if (ec === -1) {
                    ec = (ea + "").length
                }
            }
            return ec
        };
        var aX = cW.PMatrix2D = function () {
            if (arguments.length === 0) {
                this.reset()
            } else {
                if (arguments.length === 1 && arguments[0] instanceof aX) {
                    this.set(arguments[0].array())
                } else {
                    if (arguments.length === 6) {
                        this.set(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }
                }
            }
        };
        aX.prototype = {
            set: function () {
                if (arguments.length === 6) {
                    var ea = arguments;
                    this.set([ea[0], ea[1], ea[2], ea[3], ea[4], ea[5]])
                } else {
                    if (arguments.length === 1 && arguments[0] instanceof aX) {
                        this.elements = arguments[0].array()
                    } else {
                        if (arguments.length === 1 && arguments[0] instanceof Array) {
                            this.elements = arguments[0].slice()
                        }
                    }
                }
            },
            get: function () {
                var ea = new aX;
                ea.set(this.elements);
                return ea
            },
            reset: function () {
                this.set([1, 0, 0, 0, 1, 0])
            },
            array: function aE() {
                return this.elements.slice()
            },
            translate: function (eb, ea) {
                this.elements[2] = eb * this.elements[0] + ea * this.elements[1] + this.elements[2];
                this.elements[5] = eb * this.elements[3] + ea * this.elements[4] + this.elements[5]
            },
            invTranslate: function (eb, ea) {
                this.translate(-eb, -ea)
            },
            transpose: function () {},
            mult: function (eb, ec) {
                var ea, ed;
                if (eb instanceof A) {
                    ea = eb.x;
                    ed = eb.y;
                    if (!ec) {
                        ec = new A
                    }
                } else {
                    if (eb instanceof Array) {
                        ea = eb[0];
                        ed = eb[1];
                        if (!ec) {
                            ec = []
                        }
                    }
                }
                if (ec instanceof Array) {
                    ec[0] = this.elements[0] * ea + this.elements[1] * ed + this.elements[2];
                    ec[1] = this.elements[3] * ea + this.elements[4] * ed + this.elements[5]
                } else {
                    if (ec instanceof A) {
                        ec.x = this.elements[0] * ea + this.elements[1] * ed + this.elements[2];
                        ec.y = this.elements[3] * ea + this.elements[4] * ed + this.elements[5];
                        ec.z = 0
                    }
                }
                return ec
            },
            multX: function (ea, eb) {
                return ea * this.elements[0] + eb * this.elements[1] + this.elements[2]
            },
            multY: function (ea, eb) {
                return ea * this.elements[3] + eb * this.elements[4] + this.elements[5]
            },
            skewX: function (ea) {
                this.apply(1, 0, 1, ea, 0, 0)
            },
            skewY: function (ea) {
                this.apply(1, 0, 1, 0, ea, 0)
            },
            shearX: function (ea) {
                this.apply(1, 0, 1, q.tan(ea), 0, 0)
            },
            shearY: function (ea) {
                this.apply(1, 0, 1, 0, q.tan(ea), 0)
            },
            determinant: function () {
                return this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3]
            },
            invert: function () {
                var ef = this.determinant();
                if (q.abs(ef) > -2147483648) {
                    var eb = this.elements[0];
                    var eg = this.elements[1];
                    var ee = this.elements[2];
                    var ed = this.elements[3];
                    var ec = this.elements[4];
                    var ea = this.elements[5];
                    this.elements[0] = ec / ef;
                    this.elements[3] = -ed / ef;
                    this.elements[1] = -eg / ef;
                    this.elements[4] = eb / ef;
                    this.elements[2] = (eg * ea - ec * ee) / ef;
                    this.elements[5] = (ed * ee - eb * ea) / ef;
                    return true
                }
                return false
            },
            scale: function (eb, ea) {
                if (eb && !ea) {
                    ea = eb
                }
                if (eb && ea) {
                    this.elements[0] *= eb;
                    this.elements[1] *= ea;
                    this.elements[3] *= eb;
                    this.elements[4] *= ea
                }
            },
            invScale: function (eb, ea) {
                if (eb && !ea) {
                    ea = eb
                }
                this.scale(1 / eb, 1 / ea)
            },
            apply: function () {
                var ec;
                if (arguments.length === 1 && arguments[0] instanceof aX) {
                    ec = arguments[0].array()
                } else {
                    if (arguments.length === 6) {
                        ec = Array.prototype.slice.call(arguments)
                    } else {
                        if (arguments.length === 1 && arguments[0] instanceof Array) {
                            ec = arguments[0]
                        }
                    }
                }
                var ea = [0, 0, this.elements[2], 0, 0, this.elements[5]];
                var ed = 0;
                for (var ee = 0; ee < 2; ee++) {
                    for (var eb = 0; eb < 3; eb++, ed++) {
                        ea[ed] += this.elements[ee * 3 + 0] * ec[eb + 0] + this.elements[ee * 3 + 1] * ec[eb + 3]
                    }
                }
                this.elements = ea.slice()
            },
            preApply: function () {
                var eb;
                if (arguments.length === 1 && arguments[0] instanceof aX) {
                    eb = arguments[0].array()
                } else {
                    if (arguments.length === 6) {
                        eb = Array.prototype.slice.call(arguments)
                    } else {
                        if (arguments.length === 1 && arguments[0] instanceof Array) {
                            eb = arguments[0]
                        }
                    }
                }
                var ea = [0, 0, eb[2], 0, 0, eb[5]];
                ea[2] = eb[2] + this.elements[2] * eb[0] + this.elements[5] * eb[1];
                ea[5] = eb[5] + this.elements[2] * eb[3] + this.elements[5] * eb[4];
                ea[0] = this.elements[0] * eb[0] + this.elements[3] * eb[1];
                ea[3] = this.elements[0] * eb[3] + this.elements[3] * eb[4];
                ea[1] = this.elements[1] * eb[0] + this.elements[4] * eb[1];
                ea[4] = this.elements[1] * eb[3] + this.elements[4] * eb[4];
                this.elements = ea.slice()
            },
            rotate: function (ec) {
                var ee = q.cos(ec);
                var ea = q.sin(ec);
                var ed = this.elements[0];
                var eb = this.elements[1];
                this.elements[0] = ee * ed + ea * eb;
                this.elements[1] = -ea * ed + ee * eb;
                ed = this.elements[3];
                eb = this.elements[4];
                this.elements[3] = ee * ed + ea * eb;
                this.elements[4] = -ea * ed + ee * eb
            },
            rotateZ: function (ea) {
                this.rotate(ea)
            },
            invRotateZ: function (ea) {
                this.rotateZ(ea - q.PI)
            },
            print: function () {
                var eb = cm(this.elements);
                var ea = "" + cW.nfs(this.elements[0], eb, 4) + " " + cW.nfs(this.elements[1], eb, 4) + " " + cW.nfs(this.elements[2], eb, 4) + "\n" + cW.nfs(this.elements[3], eb, 4) + " " + cW.nfs(this.elements[4], eb, 4) + " " + cW.nfs(this.elements[5], eb, 4) + "\n\n";
                cW.println(ea)
            }
        };
        var aP = cW.PMatrix3D = function () {
            this.reset()
        };
        aP.prototype = {
            set: function () {
                if (arguments.length === 16) {
                    this.elements = Array.prototype.slice.call(arguments)
                } else {
                    if (arguments.length === 1 && arguments[0] instanceof aP) {
                        this.elements = arguments[0].array()
                    } else {
                        if (arguments.length === 1 && arguments[0] instanceof Array) {
                            this.elements = arguments[0].slice()
                        }
                    }
                }
            },
            get: function () {
                var ea = new aP;
                ea.set(this.elements);
                return ea
            },
            reset: function () {
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            },
            array: function aE() {
                return this.elements.slice()
            },
            translate: function (eb, ea, ec) {
                if (ec === t) {
                    ec = 0
                }
                this.elements[3] += eb * this.elements[0] + ea * this.elements[1] + ec * this.elements[2];
                this.elements[7] += eb * this.elements[4] + ea * this.elements[5] + ec * this.elements[6];
                this.elements[11] += eb * this.elements[8] + ea * this.elements[9] + ec * this.elements[10];
                this.elements[15] += eb * this.elements[12] + ea * this.elements[13] + ec * this.elements[14]
            },
            transpose: function () {
                var ea = this.elements[4];
                this.elements[4] = this.elements[1];
                this.elements[1] = ea;
                ea = this.elements[8];
                this.elements[8] = this.elements[2];
                this.elements[2] = ea;
                ea = this.elements[6];
                this.elements[6] = this.elements[9];
                this.elements[9] = ea;
                ea = this.elements[3];
                this.elements[3] = this.elements[12];
                this.elements[12] = ea;
                ea = this.elements[7];
                this.elements[7] = this.elements[13];
                this.elements[13] = ea;
                ea = this.elements[11];
                this.elements[11] = this.elements[14];
                this.elements[14] = ea
            },
            mult: function (ec, ed) {
                var ea, ef, ee, eb;
                if (ec instanceof A) {
                    ea = ec.x;
                    ef = ec.y;
                    ee = ec.z;
                    eb = 1;
                    if (!ed) {
                        ed = new A
                    }
                } else {
                    if (ec instanceof Array) {
                        ea = ec[0];
                        ef = ec[1];
                        ee = ec[2];
                        eb = ec[3] || 1;
                        if (!ed || ed.length !== 3 && ed.length !== 4) {
                            ed = [0, 0, 0]
                        }
                    }
                }
                if (ed instanceof Array) {
                    if (ed.length === 3) {
                        ed[0] = this.elements[0] * ea + this.elements[1] * ef + this.elements[2] * ee + this.elements[3];
                        ed[1] = this.elements[4] * ea + this.elements[5] * ef + this.elements[6] * ee + this.elements[7];
                        ed[2] = this.elements[8] * ea + this.elements[9] * ef + this.elements[10] * ee + this.elements[11]
                    } else {
                        if (ed.length === 4) {
                            ed[0] = this.elements[0] * ea + this.elements[1] * ef + this.elements[2] * ee + this.elements[3] * eb;
                            ed[1] = this.elements[4] * ea + this.elements[5] * ef + this.elements[6] * ee + this.elements[7] * eb;
                            ed[2] = this.elements[8] * ea + this.elements[9] * ef + this.elements[10] * ee + this.elements[11] * eb;
                            ed[3] = this.elements[12] * ea + this.elements[13] * ef + this.elements[14] * ee + this.elements[15] * eb
                        }
                    }
                }
                if (ed instanceof A) {
                    ed.x = this.elements[0] * ea + this.elements[1] * ef + this.elements[2] * ee + this.elements[3];
                    ed.y = this.elements[4] * ea + this.elements[5] * ef + this.elements[6] * ee + this.elements[7];
                    ed.z = this.elements[8] * ea + this.elements[9] * ef + this.elements[10] * ee + this.elements[11]
                }
                return ed
            },
            preApply: function () {
                var ec;
                if (arguments.length === 1 && arguments[0] instanceof aP) {
                    ec = arguments[0].array()
                } else {
                    if (arguments.length === 16) {
                        ec = Array.prototype.slice.call(arguments)
                    } else {
                        if (arguments.length === 1 && arguments[0] instanceof Array) {
                            ec = arguments[0]
                        }
                    }
                }
                var ea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var ed = 0;
                for (var ee = 0; ee < 4; ee++) {
                    for (var eb = 0; eb < 4; eb++, ed++) {
                        ea[ed] += this.elements[eb + 0] * ec[ee * 4 + 0] + this.elements[eb + 4] * ec[ee * 4 + 1] + this.elements[eb + 8] * ec[ee * 4 + 2] + this.elements[eb + 12] * ec[ee * 4 + 3]
                    }
                }
                this.elements = ea.slice()
            },
            apply: function () {
                var ec;
                if (arguments.length === 1 && arguments[0] instanceof aP) {
                    ec = arguments[0].array()
                } else {
                    if (arguments.length === 16) {
                        ec = Array.prototype.slice.call(arguments)
                    } else {
                        if (arguments.length === 1 && arguments[0] instanceof Array) {
                            ec = arguments[0]
                        }
                    }
                }
                var ea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var ed = 0;
                for (var ee = 0; ee < 4; ee++) {
                    for (var eb = 0; eb < 4; eb++, ed++) {
                        ea[ed] += this.elements[ee * 4 + 0] * ec[eb + 0] + this.elements[ee * 4 + 1] * ec[eb + 4] + this.elements[ee * 4 + 2] * ec[eb + 8] + this.elements[ee * 4 + 3] * ec[eb + 12]
                    }
                }
                this.elements = ea.slice()
            },
            rotate: function (ee, ea, eg, ed) {
                if (!eg) {
                    this.rotateZ(ee)
                } else {
                    var ef = cW.cos(ee);
                    var ec = cW.sin(ee);
                    var eb = 1 - ef;
                    this.apply(eb * ea * ea + ef, eb * ea * eg - ec * ed, eb * ea * ed + ec * eg, 0, eb * ea * eg + ec * ed, eb * eg * eg + ef, eb * eg * ed - ec * ea, 0, eb * ea * ed - ec * eg, eb * eg * ed + ec * ea, eb * ed * ed + ef, 0, 0, 0, 0, 1)
                }
            },
            invApply: function () {
                if (ab === t) {
                    ab = new aP
                }
                var ea = arguments;
                ab.set(ea[0], ea[1], ea[2], ea[3], ea[4], ea[5], ea[6], ea[7], ea[8], ea[9], ea[10], ea[11], ea[12], ea[13], ea[14], ea[15]);
                if (!ab.invert()) {
                    return false
                }
                this.preApply(ab);
                return true
            },
            rotateX: function (eb) {
                var ec = cW.cos(eb);
                var ea = cW.sin(eb);
                this.apply([1, 0, 0, 0, 0, ec, -ea, 0, 0, ea, ec, 0, 0, 0, 0, 1])
            },
            rotateY: function (eb) {
                var ec = cW.cos(eb);
                var ea = cW.sin(eb);
                this.apply([ec, 0, ea, 0, 0, 1, 0, 0, -ea, 0, ec, 0, 0, 0, 0, 1])
            },
            rotateZ: function (eb) {
                var ec = q.cos(eb);
                var ea = q.sin(eb);
                this.apply([ec, -ea, 0, 0, ea, ec, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            },
            scale: function (ec, eb, ea) {
                if (ec && !eb && !ea) {
                    eb = ea = ec
                } else {
                    if (ec && eb && !ea) {
                        ea = 1
                    }
                }
                if (ec && eb && ea) {
                    this.elements[0] *= ec;
                    this.elements[1] *= eb;
                    this.elements[2] *= ea;
                    this.elements[4] *= ec;
                    this.elements[5] *= eb;
                    this.elements[6] *= ea;
                    this.elements[8] *= ec;
                    this.elements[9] *= eb;
                    this.elements[10] *= ea;
                    this.elements[12] *= ec;
                    this.elements[13] *= eb;
                    this.elements[14] *= ea
                }
            },
            skewX: function (eb) {
                var ea = q.tan(eb);
                this.apply(1, ea, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            },
            skewY: function (eb) {
                var ea = q.tan(eb);
                this.apply(1, 0, 0, 0, ea, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            },
            shearX: function (eb) {
                var ea = q.tan(eb);
                this.apply(1, ea, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            },
            shearY: function (eb) {
                var ea = q.tan(eb);
                this.apply(1, 0, 0, 0, ea, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            },
            multX: function (ea, ed, ec, eb) {
                if (!ec) {
                    return this.elements[0] * ea + this.elements[1] * ed + this.elements[3]
                }
                if (!eb) {
                    return this.elements[0] * ea + this.elements[1] * ed + this.elements[2] * ec + this.elements[3]
                }
                return this.elements[0] * ea + this.elements[1] * ed + this.elements[2] * ec + this.elements[3] * eb
            },
            multY: function (ea, ed, ec, eb) {
                if (!ec) {
                    return this.elements[4] * ea + this.elements[5] * ed + this.elements[7]
                }
                if (!eb) {
                    return this.elements[4] * ea + this.elements[5] * ed + this.elements[6] * ec + this.elements[7]
                }
                return this.elements[4] * ea + this.elements[5] * ed + this.elements[6] * ec + this.elements[7] * eb
            },
            multZ: function (ea, ed, ec, eb) {
                if (!eb) {
                    return this.elements[8] * ea + this.elements[9] * ed + this.elements[10] * ec + this.elements[11]
                }
                return this.elements[8] * ea + this.elements[9] * ed + this.elements[10] * ec + this.elements[11] * eb
            },
            multW: function (ea, ed, ec, eb) {
                if (!eb) {
                    return this.elements[12] * ea + this.elements[13] * ed + this.elements[14] * ec + this.elements[15]
                }
                return this.elements[12] * ea + this.elements[13] * ed + this.elements[14] * ec + this.elements[15] * eb
            },
            invert: function () {
                var ej = this.elements[0] * this.elements[5] - this.elements[1] * this.elements[4];
                var ei = this.elements[0] * this.elements[6] - this.elements[2] * this.elements[4];
                var eh = this.elements[0] * this.elements[7] - this.elements[3] * this.elements[4];
                var eg = this.elements[1] * this.elements[6] - this.elements[2] * this.elements[5];
                var ef = this.elements[1] * this.elements[7] - this.elements[3] * this.elements[5];
                var ee = this.elements[2] * this.elements[7] - this.elements[3] * this.elements[6];
                var ed = this.elements[8] * this.elements[13] - this.elements[9] * this.elements[12];
                var ec = this.elements[8] * this.elements[14] - this.elements[10] * this.elements[12];
                var eb = this.elements[8] * this.elements[15] - this.elements[11] * this.elements[12];
                var eo = this.elements[9] * this.elements[14] - this.elements[10] * this.elements[13];
                var em = this.elements[9] * this.elements[15] - this.elements[11] * this.elements[13];
                var el = this.elements[10] * this.elements[15] - this.elements[11] * this.elements[14];
                var en = ej * el - ei * em + eh * eo + eg * eb - ef * ec + ee * ed;
                if (q.abs(en) <= 1e-9) {
                    return false
                }
                var ek = [];
                ek[0] = +this.elements[5] * el - this.elements[6] * em + this.elements[7] * eo;
                ek[4] = -this.elements[4] * el + this.elements[6] * eb - this.elements[7] * ec;
                ek[8] = +this.elements[4] * em - this.elements[5] * eb + this.elements[7] * ed;
                ek[12] = -this.elements[4] * eo + this.elements[5] * ec - this.elements[6] * ed;
                ek[1] = -this.elements[1] * el + this.elements[2] * em - this.elements[3] * eo;
                ek[5] = +this.elements[0] * el - this.elements[2] * eb + this.elements[3] * ec;
                ek[9] = -this.elements[0] * em + this.elements[1] * eb - this.elements[3] * ed;
                ek[13] = +this.elements[0] * eo - this.elements[1] * ec + this.elements[2] * ed;
                ek[2] = +this.elements[13] * ee - this.elements[14] * ef + this.elements[15] * eg;
                ek[6] = -this.elements[12] * ee + this.elements[14] * eh - this.elements[15] * ei;
                ek[10] = +this.elements[12] * ef - this.elements[13] * eh + this.elements[15] * ej;
                ek[14] = -this.elements[12] * eg + this.elements[13] * ei - this.elements[14] * ej;
                ek[3] = -this.elements[9] * ee + this.elements[10] * ef - this.elements[11] * eg;
                ek[7] = +this.elements[8] * ee - this.elements[10] * eh + this.elements[11] * ei;
                ek[11] = -this.elements[8] * ef + this.elements[9] * eh - this.elements[11] * ej;
                ek[15] = +this.elements[8] * eg - this.elements[9] * ei + this.elements[10] * ej;
                var ea = 1 / en;
                ek[0] *= ea;
                ek[1] *= ea;
                ek[2] *= ea;
                ek[3] *= ea;
                ek[4] *= ea;
                ek[5] *= ea;
                ek[6] *= ea;
                ek[7] *= ea;
                ek[8] *= ea;
                ek[9] *= ea;
                ek[10] *= ea;
                ek[11] *= ea;
                ek[12] *= ea;
                ek[13] *= ea;
                ek[14] *= ea;
                ek[15] *= ea;
                this.elements = ek.slice();
                return true
            },
            toString: function () {
                var eb = "";
                for (var ea = 0; ea < 15; ea++) {
                    eb += this.elements[ea] + ", "
                }
                eb += this.elements[15];
                return eb
            },
            print: function () {
                var eb = cm(this.elements);
                var ea = "" + cW.nfs(this.elements[0], eb, 4) + " " + cW.nfs(this.elements[1], eb, 4) + " " + cW.nfs(this.elements[2], eb, 4) + " " + cW.nfs(this.elements[3], eb, 4) + "\n" + cW.nfs(this.elements[4], eb, 4) + " " + cW.nfs(this.elements[5], eb, 4) + " " + cW.nfs(this.elements[6], eb, 4) + " " + cW.nfs(this.elements[7], eb, 4) + "\n" + cW.nfs(this.elements[8], eb, 4) + " " + cW.nfs(this.elements[9], eb, 4) + " " + cW.nfs(this.elements[10], eb, 4) + " " + cW.nfs(this.elements[11], eb, 4) + "\n" + cW.nfs(this.elements[12], eb, 4) + " " + cW.nfs(this.elements[13], eb, 4) + " " + cW.nfs(this.elements[14], eb, 4) + " " + cW.nfs(this.elements[15], eb, 4) + "\n\n";
                cW.println(ea)
            },
            invTranslate: function (eb, ea, ec) {
                this.preApply(1, 0, 0, -eb, 0, 1, 0, -ea, 0, 0, 1, -ec, 0, 0, 0, 1)
            },
            invRotateX: function (eb) {
                var ec = q.cos(-eb);
                var ea = q.sin(-eb);
                this.preApply([1, 0, 0, 0, 0, ec, -ea, 0, 0, ea, ec, 0, 0, 0, 0, 1])
            },
            invRotateY: function (eb) {
                var ec = q.cos(-eb);
                var ea = q.sin(-eb);
                this.preApply([ec, 0, ea, 0, 0, 1, 0, 0, -ea, 0, ec, 0, 0, 0, 0, 1])
            },
            invRotateZ: function (eb) {
                var ec = q.cos(-eb);
                var ea = q.sin(-eb);
                this.preApply([ec, -ea, 0, 0, ea, ec, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            },
            invScale: function (ea, ec, eb) {
                this.preApply([1 / ea, 0, 0, 0, 0, 1 / ec, 0, 0, 0, 0, 1 / eb, 0, 0, 0, 0, 1])
            }
        };
        var V = cW.PMatrixStack = function () {
            this.matrixStack = []
        };
        V.prototype.load = function () {
            var ea = dY.$newPMatrix();
            if (arguments.length === 1) {
                ea.set(arguments[0])
            } else {
                ea.set(arguments)
            }
            this.matrixStack.push(ea)
        };
        bR.prototype.$newPMatrix = function () {
            return new aX
        };
        bB.prototype.$newPMatrix = function () {
            return new aP
        };
        V.prototype.push = function () {
            this.matrixStack.push(this.peek())
        };
        V.prototype.pop = function () {
            return this.matrixStack.pop()
        };
        V.prototype.peek = function () {
            var ea = dY.$newPMatrix();
            ea.set(this.matrixStack[this.matrixStack.length - 1]);
            return ea
        };
        V.prototype.mult = function (ea) {
            this.matrixStack[this.matrixStack.length - 1].apply(ea)
        };
        cW.split = function (eb, ea) {
            return eb.split(ea)
        };
        cW.splitTokens = function (eg, ef) {
            if (ef === t) {
                return eg.split(/\s+/g)
            }
            var ed = ef.split(/()/g),
                eb = "",
                ea = eg.length,
                ec, eh, ee = [];
            for (ec = 0; ec < ea; ec++) {
                eh = eg[ec];
                if (ed.indexOf(eh) > -1) {
                    if (eb !== "") {
                        ee.push(eb)
                    }
                    eb = ""
                } else {
                    eb += eh
                }
            }
            if (eb !== "") {
                ee.push(eb)
            }
            return ee
        };
        cW.append = function (eb, ea) {
            eb[eb.length] = ea;
            return eb
        };
        cW.concat = function (eb, ea) {
            return eb.concat(ea)
        };
        cW.sort = function (ef, ed) {
            var eb = [];
            if (ef.length > 0) {
                var ee = ed > 0 ? ed : ef.length;
                for (var ec = 0; ec < ee; ec++) {
                    eb.push(ef[ec])
                }
                if (typeof ef[0] === "string") {
                    eb.sort()
                } else {
                    eb.sort(function (eh, eg) {
                        return eh - eg
                    })
                }
                if (ed > 0) {
                    for (var ea = eb.length; ea < ef.length; ea++) {
                        eb.push(ef[ea])
                    }
                }
            }
            return eb
        };
        cW.splice = function (ee, ed, eb) {
            if (ed.length === 0) {
                return ee
            }
            if (ed instanceof Array) {
                for (var ec = 0, ea = eb; ec < ed.length; ea++, ec++) {
                    ee.splice(ea, 0, ed[ec])
                }
            } else {
                ee.splice(eb, 0, ed)
            }
            return ee
        };
        cW.subset = function (ed, ec, eb) {
            var ea = eb !== t ? ec + eb : ed.length;
            return ed.slice(ec, ea)
        };
        cW.join = function (eb, ea) {
            return eb.join(ea)
        };
        cW.shorten = function (ed) {
            var eb = [];
            var ea = ed.length;
            for (var ec = 0; ec < ea; ec++) {
                eb[ec] = ed[ec]
            }
            eb.pop();
            return eb
        };
        cW.expand = function (ec, ed) {
            var eb = ec.slice(0),
                ea = ed || ec.length * 2;
            eb.length = ea;
            return eb
        };
        cW.arrayCopy = function () {
            var eg, ee = 0,
                ec, eb = 0,
                ef;
            if (arguments.length === 2) {
                eg = arguments[0];
                ec = arguments[1];
                ef = eg.length
            } else {
                if (arguments.length === 3) {
                    eg = arguments[0];
                    ec = arguments[1];
                    ef = arguments[2]
                } else {
                    if (arguments.length === 5) {
                        eg = arguments[0];
                        ee = arguments[1];
                        ec = arguments[2];
                        eb = arguments[3];
                        ef = arguments[4]
                    }
                }
            }
            for (var ed = ee, ea = eb; ed < ef + ee; ed++, ea++) {
                if (ec[ea] !== t) {
                    ec[ea] = eg[ed]
                } else {
                    throw "array index out of bounds exception"
                }
            }
        };
        cW.reverse = function (ea) {
            return ea.reverse()
        };
        cW.mix = function (eb, ea, ec) {
            return eb + ((ea - eb) * ec >> 8)
        };
        cW.peg = function (ea) {
            return ea < 0 ? 0 : ea > 255 ? 255 : ea
        };
        cW.modes = function () {
            var ef = 4278190080,
                ec = 16711680,
                eb = 65280,
                ee = 255,
                ed = q.min,
                ea = q.max;

            function eg(el, eo, ek, et, ev, eu, em, eq, ep, ei, ej) {
                var es = ed(((el & 4278190080) >>> 24) + eo, 255) << 24;
                var eh = ek + ((ep - ek) * eo >> 8);
                eh = (eh < 0 ? 0 : eh > 255 ? 255 : eh) << 16;
                var en = et + ((ei - et) * eo >> 8);
                en = (en < 0 ? 0 : en > 255 ? 255 : en) << 8;
                var er = ev + ((ej - ev) * eo >> 8);
                er = er < 0 ? 0 : er > 255 ? 255 : er;
                return es | eh | en | er
            }
            return {
                replace: function (ei, eh) {
                    return eh
                },
                blend: function (ej, ei) {
                    var el = (ei & ef) >>> 24,
                        eh = ej & ec,
                        en = ej & eb,
                        ep = ej & ee,
                        eo = ei & ec,
                        ek = ei & eb,
                        em = ei & ee;
                    return ed(((ej & ef) >>> 24) + el, 255) << 24 | eh + ((eo - eh) * el >> 8) & ec | en + ((ek - en) * el >> 8) & eb | ep + ((em - ep) * el >> 8) & ee
                },
                add: function (ei, eh) {
                    var ej = (eh & ef) >>> 24;
                    return ed(((ei & ef) >>> 24) + ej, 255) << 24 | ed((ei & ec) + ((eh & ec) >> 8) * ej, ec) & ec | ed((ei & eb) + ((eh & eb) >> 8) * ej, eb) & eb | ed((ei & ee) + ((eh & ee) * ej >> 8), ee)
                },
                subtract: function (ei, eh) {
                    var ej = (eh & ef) >>> 24;
                    return ed(((ei & ef) >>> 24) + ej, 255) << 24 | ea((ei & ec) - ((eh & ec) >> 8) * ej, eb) & ec | ea((ei & eb) - ((eh & eb) >> 8) * ej, ee) & eb | ea((ei & ee) - ((eh & ee) * ej >> 8), 0)
                },
                lightest: function (ei, eh) {
                    var ej = (eh & ef) >>> 24;
                    return ed(((ei & ef) >>> 24) + ej, 255) << 24 | ea(ei & ec, ((eh & ec) >> 8) * ej) & ec | ea(ei & eb, ((eh & eb) >> 8) * ej) & eb | ea(ei & ee, (eh & ee) * ej >> 8)
                },
                darkest: function (ej, ei) {
                    var el = (ei & ef) >>> 24,
                        eh = ej & ec,
                        en = ej & eb,
                        ep = ej & ee,
                        eo = ed(ej & ec, ((ei & ec) >> 8) * el),
                        ek = ed(ej & eb, ((ei & eb) >> 8) * el),
                        em = ed(ej & ee, (ei & ee) * el >> 8);
                    return ed(((ej & ef) >>> 24) + el, 255) << 24 | eh + ((eo - eh) * el >> 8) & ec | en + ((ek - en) * el >> 8) & eb | ep + ((em - ep) * el >> 8) & ee
                },
                difference: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee,
                        eo = ej > er ? ej - er : er - ej,
                        eh = eq > em ? eq - em : em - eq,
                        ei = es > ep ? es - ep : ep - es;
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                exclusion: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee,
                        eo = ej + er - (ej * er >> 7),
                        eh = eq + em - (eq * em >> 7),
                        ei = es + ep - (es * ep >> 7);
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                multiply: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee,
                        eo = ej * er >> 8,
                        eh = eq * em >> 8,
                        ei = es * ep >> 8;
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                screen: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee,
                        eo = 255 - ((255 - ej) * (255 - er) >> 8),
                        eh = 255 - ((255 - eq) * (255 - em) >> 8),
                        ei = 255 - ((255 - es) * (255 - ep) >> 8);
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                hard_light: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee,
                        eo = er < 128 ? ej * er >> 7 : 255 - ((255 - ej) * (255 - er) >> 7),
                        eh = em < 128 ? eq * em >> 7 : 255 - ((255 - eq) * (255 - em) >> 7),
                        ei = ep < 128 ? es * ep >> 7 : 255 - ((255 - es) * (255 - ep) >> 7);
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                soft_light: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee,
                        eo = (ej * er >> 7) + (ej * ej >> 8) - (ej * ej * er >> 15),
                        eh = (eq * em >> 7) + (eq * eq >> 8) - (eq * eq * em >> 15),
                        ei = (es * ep >> 7) + (es * es >> 8) - (es * es * ep >> 15);
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                overlay: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee,
                        eo = ej < 128 ? ej * er >> 7 : 255 - ((255 - ej) * (255 - er) >> 7),
                        eh = eq < 128 ? eq * em >> 7 : 255 - ((255 - eq) * (255 - em) >> 7),
                        ei = es < 128 ? es * ep >> 7 : 255 - ((255 - es) * (255 - ep) >> 7);
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                dodge: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee;
                    var eo = 255;
                    if (er !== 255) {
                        eo = (ej << 8) / (255 - er);
                        eo = eo < 0 ? 0 : eo > 255 ? 255 : eo
                    }
                    var eh = 255;
                    if (em !== 255) {
                        eh = (eq << 8) / (255 - em);
                        eh = eh < 0 ? 0 : eh > 255 ? 255 : eh
                    }
                    var ei = 255;
                    if (ep !== 255) {
                        ei = (es << 8) / (255 - ep);
                        ei = ei < 0 ? 0 : ei > 255 ? 255 : ei
                    }
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                },
                burn: function (el, ek) {
                    var en = (ek & ef) >>> 24,
                        ej = (el & ec) >> 16,
                        eq = (el & eb) >> 8,
                        es = el & ee,
                        er = (ek & ec) >> 16,
                        em = (ek & eb) >> 8,
                        ep = ek & ee;
                    var eo = 0;
                    if (er !== 0) {
                        eo = (255 - ej << 8) / er;
                        eo = 255 - (eo < 0 ? 0 : eo > 255 ? 255 : eo)
                    }
                    var eh = 0;
                    if (em !== 0) {
                        eh = (255 - eq << 8) / em;
                        eh = 255 - (eh < 0 ? 0 : eh > 255 ? 255 : eh)
                    }
                    var ei = 0;
                    if (ep !== 0) {
                        ei = (255 - es << 8) / ep;
                        ei = 255 - (ei < 0 ? 0 : ei > 255 ? 255 : ei)
                    }
                    return eg(el, en, ej, eq, es, er, em, ep, eo, eh, ei)
                }
            }
        }();

        function dH(ef, ee, ec, eb) {
            var ea, ed, eh, ei;
            if (cY === 3) {
                var eg = cW.color.toRGB(ef, ee, ec);
                ea = eg[0];
                ed = eg[1];
                eh = eg[2]
            } else {
                ea = q.round(255 * (ef / bJ));
                ed = q.round(255 * (ee / bI));
                eh = q.round(255 * (ec / bG))
            }
            ei = q.round(255 * (eb / bU));
            ea = ea < 0 ? 0 : ea;
            ed = ed < 0 ? 0 : ed;
            eh = eh < 0 ? 0 : eh;
            ei = ei < 0 ? 0 : ei;
            ea = ea > 255 ? 255 : ea;
            ed = ed > 255 ? 255 : ed;
            eh = eh > 255 ? 255 : eh;
            ei = ei > 255 ? 255 : ei;
            return ei << 24 & 4278190080 | ea << 16 & 16711680 | ed << 8 & 65280 | eh & 255
        }
        function dK(ea, ec) {
            var eb;
            if (ea & 4278190080) {
                eb = q.round(255 * (ec / bU));
                eb = eb > 255 ? 255 : eb;
                eb = eb < 0 ? 0 : eb;
                return ea - (ea & 4278190080) + (eb << 24 & 4278190080)
            }
            if (cY === 1) {
                return dH(ea, ea, ea, ec)
            }
            if (cY === 3) {
                return dH(0, 0, ea / bJ * bG, ec)
            }
        }
        function dM(ea) {
            if (ea <= bJ && ea >= 0) {
                if (cY === 1) {
                    return dH(ea, ea, ea, bU)
                }
                if (cY === 3) {
                    return dH(0, 0, ea / bJ * bG, bU)
                }
            }
            if (ea) {
                if (ea > 2147483647) {
                    ea -= 4294967296
                }
                return ea
            }
        }
        cW.color = function (ea, ed, ec, eb) {
            if (ea !== t && ed !== t && ec !== t && eb !== t) {
                return dH(ea, ed, ec, eb)
            }
            if (ea !== t && ed !== t && ec !== t) {
                return dH(ea, ed, ec, bU)
            }
            if (ea !== t && ed !== t) {
                return dK(ea, ed)
            }
            if (typeof ea === "number") {
                return dM(ea)
            }
            return dH(bJ, bI, bG, bU)
        };
        cW.color.toString = function (ea) {
            return "rgba(" + ((ea >> 16) & 255) + "," + ((ea >> 8) & 255) + "," + (ea & 255) + "," + ((ea >> 24) & 255) / 255 + ")"
        };
        cW.color.toInt = function (ed, ec, ea, eb) {
            return eb << 24 & 4278190080 | ed << 16 & 16711680 | ec << 8 & 65280 | ea & 255
        };
        cW.color.toArray = function (ea) {
            return [(ea >> 16) & 255, (ea >> 8) & 255, ea & 255, (ea >> 24) & 255]
        };
        cW.color.toGLArray = function (ea) {
            return [((ea & 16711680) >>> 16) / 255, ((ea >> 8) & 255) / 255, (ea & 255) / 255, ((ea >> 24) & 255) / 255]
        };
        cW.color.toRGB = function (ec, ei, ef) {
            ec = ec > bJ ? bJ : ec;
            ei = ei > bI ? bI : ei;
            ef = ef > bG ? bG : ef;
            ec = ec / bJ * 360;
            ei = ei / bI * 100;
            ef = ef / bG * 100;
            var eh = q.round(ef / 100 * 255);
            if (ei === 0) {
                return [eh, eh, eh]
            }
            var ed = ec % 360;
            var ee = ed % 60;
            var eb = q.round(ef * (100 - ei) / 10000 * 255);
            var ea = q.round(ef * (6000 - ei * ee) / 600000 * 255);
            var eg = q.round(ef * (6000 - ei * (60 - ee)) / 600000 * 255);
            switch (q.floor(ed / 60)) {
                case 0:
                    return [eh, eg, eb];
                case 1:
                    return [ea, eh, eb];
                case 2:
                    return [eb, eh, eg];
                case 3:
                    return [eb, ea, eh];
                case 4:
                    return [eg, eb, eh];
                case 5:
                    return [eh, eb, ea]
            }
        };

        function aS(eh) {
            var eg, ef, eb;
            eg = ((eh >> 16) & 255) / 255;
            ef = ((eh >> 8) & 255) / 255;
            eb = (eh & 255) / 255;
            var ea = cW.max(cW.max(eg, ef), eb),
                ed = cW.min(cW.min(eg, ef), eb),
                ec, ee;
            if (ed === ea) {
                return [0, 0, ea * bG]
            }
            ee = (ea - ed) / ea;
            if (eg === ea) {
                ec = (ef - eb) / (ea - ed)
            } else {
                if (ef === ea) {
                    ec = 2 + (eb - eg) / (ea - ed)
                } else {
                    ec = 4 + (eg - ef) / (ea - ed)
                }
            }
            ec /= 6;
            if (ec < 0) {
                ec += 1
            } else {
                if (ec > 1) {
                    ec -= 1
                }
            }
            return [ec * bJ, ee * bI, ea * bG]
        }
        cW.brightness = function (ea) {
            return aS(ea)[2]
        };
        cW.saturation = function (ea) {
            return aS(ea)[1]
        };
        cW.hue = function (ea) {
            return aS(ea)[0]
        };
        cW.red = function (ea) {
            return ((ea >> 16) & 255) / 255 * bJ
        };
        cW.green = function (ea) {
            return ((ea & 65280) >>> 8) / 255 * bI
        };
        cW.blue = function (ea) {
            return (ea & 255) / 255 * bG
        };
        cW.alpha = function (ea) {
            return ((ea >> 24) & 255) / 255 * bU
        };
        cW.lerpColor = function (em, el, ef) {
            var ek, eq, er, es, eo, ea, eg, eu, en, ev, ee, et;
            var ei, eh, eb, ep, ej;
            var ed = cW.color(em);
            var ec = cW.color(el);
            if (cY === 3) {
                ei = aS(ed);
                eu = ((ed >> 24) & 255) / bU;
                eh = aS(ec);
                et = ((ec & 4278190080) >>> 24) / bU;
                ep = cW.lerp(ei[0], eh[0], ef);
                ej = cW.lerp(ei[1], eh[1], ef);
                er = cW.lerp(ei[2], eh[2], ef);
                eb = cW.color.toRGB(ep, ej, er);
                es = cW.lerp(eu, et, ef) * bU;
                return es << 24 & 4278190080 | (eb[0] & 255) << 16 | (eb[1] & 255) << 8 | eb[2] & 255
            }
            eo = (ed >> 16) & 255;
            ea = (ed >> 8) & 255;
            eg = ed & 255;
            eu = ((ed >> 24) & 255) / bU;
            en = (ec & 16711680) >>> 16;
            ev = (ec >> 8) & 255;
            ee = ec & 255;
            et = ((ec >> 24) & 255) / bU;
            ek = cW.lerp(eo, en, ef) | 0;
            eq = cW.lerp(ea, ev, ef) | 0;
            er = cW.lerp(eg, ee, ef) | 0;
            es = cW.lerp(eu, et, ef) * bU;
            return es << 24 & 4278190080 | ek << 16 & 16711680 | eq << 8 & 65280 | er & 255
        };
        cW.colorMode = function () {
            cY = arguments[0];
            if (arguments.length > 1) {
                bJ = arguments[1];
                bI = arguments[2] || arguments[1];
                bG = arguments[3] || arguments[1];
                bU = arguments[4] || arguments[1]
            }
        };
        cW.blendColor = function (eb, ea, ec) {
            if (ec === 0) {
                return cW.modes.replace(eb, ea)
            } else {
                if (ec === 1) {
                    return cW.modes.blend(eb, ea)
                } else {
                    if (ec === 2) {
                        return cW.modes.add(eb, ea)
                    } else {
                        if (ec === 4) {
                            return cW.modes.subtract(eb, ea)
                        } else {
                            if (ec === 8) {
                                return cW.modes.lightest(eb, ea)
                            } else {
                                if (ec === 16) {
                                    return cW.modes.darkest(eb, ea)
                                } else {
                                    if (ec === 32) {
                                        return cW.modes.difference(eb, ea)
                                    } else {
                                        if (ec === 64) {
                                            return cW.modes.exclusion(eb, ea)
                                        } else {
                                            if (ec === 128) {
                                                return cW.modes.multiply(eb, ea)
                                            } else {
                                                if (ec === 256) {
                                                    return cW.modes.screen(eb, ea)
                                                } else {
                                                    if (ec === 1024) {
                                                        return cW.modes.hard_light(eb, ea)
                                                    } else {
                                                        if (ec === 2048) {
                                                            return cW.modes.soft_light(eb, ea)
                                                        } else {
                                                            if (ec === 512) {
                                                                return cW.modes.overlay(eb, ea)
                                                            } else {
                                                                if (ec === 4096) {
                                                                    return cW.modes.dodge(eb, ea)
                                                                } else {
                                                                    if (ec === 8192) {
                                                                        return cW.modes.burn(eb, ea)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        function aD() {
            d8.save()
        }
        function cP() {
            d8.restore();
            b3 = true;
            aq = true
        }
        cW.printMatrix = function () {
            dJ.print()
        };
        bR.prototype.translate = function (ea, eb) {
            dJ.translate(ea, eb);
            aT.invTranslate(ea, eb);
            d8.translate(ea, eb)
        };
        bB.prototype.translate = function (ea, ec, eb) {
            dJ.translate(ea, ec, eb);
            aT.invTranslate(ea, ec, eb)
        };
        bR.prototype.scale = function (ea, eb) {
            dJ.scale(ea, eb);
            aT.invScale(ea, eb);
            d8.scale(ea, eb || ea)
        };
        bB.prototype.scale = function (ea, ec, eb) {
            dJ.scale(ea, ec, eb);
            aT.invScale(ea, ec, eb)
        };
        bR.prototype.transform = function (eb) {
            var ea = eb.array();
            d8.transform(ea[0], ea[3], ea[1], ea[4], ea[2], ea[5])
        };
        bB.prototype.transformm = function (ea) {
            throw "p.transform is currently not supported in 3D mode"
        };
        bR.prototype.pushMatrix = function () {
            am.load(dJ);
            da.load(aT);
            aD()
        };
        bB.prototype.pushMatrix = function () {
            am.load(dJ);
            da.load(aT)
        };
        bR.prototype.popMatrix = function () {
            dJ.set(am.pop());
            aT.set(da.pop());
            cP()
        };
        bB.prototype.popMatrix = function () {
            dJ.set(am.pop());
            aT.set(da.pop())
        };
        bR.prototype.resetMatrix = function () {
            dJ.reset();
            aT.reset();
            d8.setTransform(1, 0, 0, 1, 0, 0)
        };
        bB.prototype.resetMatrix = function () {
            dJ.reset();
            aT.reset()
        };
        ds.prototype.applyMatrix = function () {
            var ea = arguments;
            dJ.apply(ea[0], ea[1], ea[2], ea[3], ea[4], ea[5], ea[6], ea[7], ea[8], ea[9], ea[10], ea[11], ea[12], ea[13], ea[14], ea[15]);
            aT.invApply(ea[0], ea[1], ea[2], ea[3], ea[4], ea[5], ea[6], ea[7], ea[8], ea[9], ea[10], ea[11], ea[12], ea[13], ea[14], ea[15])
        };
        bR.prototype.applyMatrix = function () {
            var ea = arguments;
            for (var eb = ea.length; eb < 16; eb++) {
                ea[eb] = 0
            }
            ea[10] = ea[15] = 1;
            ds.prototype.applyMatrix.apply(this, ea)
        };
        cW.rotateX = function (ea) {
            dJ.rotateX(ea);
            aT.invRotateX(ea)
        };
        bR.prototype.rotateZ = function () {
            throw "rotateZ() is not supported in 2D mode. Use rotate(float) instead."
        };
        bB.prototype.rotateZ = function (ea) {
            dJ.rotateZ(ea);
            aT.invRotateZ(ea)
        };
        cW.rotateY = function (ea) {
            dJ.rotateY(ea);
            aT.invRotateY(ea)
        };
        bR.prototype.rotate = function (ea) {
            dJ.rotateZ(ea);
            aT.invRotateZ(ea);
            d8.rotate(ea)
        };
        bB.prototype.rotate = function (ea) {
            cW.rotateZ(ea)
        };
        bR.prototype.shearX = function (ea) {
            dJ.shearX(ea);
            d8.transform(1, 0, ea, 1, 0, 0)
        };
        bB.prototype.shearX = function (ea) {
            dJ.shearX(ea)
        };
        bR.prototype.shearY = function (ea) {
            dJ.shearY(ea);
            d8.transform(1, ea, 0, 1, 0, 0)
        };
        bB.prototype.shearY = function (ea) {
            dJ.shearY(ea)
        };
        cW.pushStyle = function () {
            aD();
            cW.pushMatrix();
            var ea = {
                doFill: aH,
                currentFillColor: a1,
                doStroke: ce,
                currentStrokeColor: cv,
                curTint: bf,
                curRectMode: bK,
                curColorMode: cY,
                colorModeX: bJ,
                colorModeZ: bG,
                colorModeY: bI,
                colorModeA: bU,
                curTextFont: W,
                horizontalTextAlignment: N,
                verticalTextAlignment: c1,
                textMode: cI,
                curFontName: Y,
                curTextSize: d0,
                curTextAscent: a3,
                curTextDescent: dA,
                curTextLeading: d7
            };
            bm.push(ea)
        };
        cW.popStyle = function () {
            var ea = bm.pop();
            if (ea) {
                cP();
                cW.popMatrix();
                aH = ea.doFill;
                a1 = ea.currentFillColor;
                ce = ea.doStroke;
                cv = ea.currentStrokeColor;
                bf = ea.curTint;
                bK = ea.curRectMode;
                cY = ea.curColorMode;
                bJ = ea.colorModeX;
                bG = ea.colorModeZ;
                bI = ea.colorModeY;
                bU = ea.colorModeA;
                W = ea.curTextFont;
                Y = ea.curFontName;
                d0 = ea.curTextSize;
                N = ea.horizontalTextAlignment;
                c1 = ea.verticalTextAlignment;
                cI = ea.textMode;
                a3 = ea.curTextAscent;
                dA = ea.curTextDescent;
                d7 = ea.curTextLeading
            } else {
                throw "Too many popStyle() without enough pushStyle()"
            }
        };
        cW.year = function () {
            return (new Date).getFullYear()
        };
        cW.month = function () {
            return (new Date).getMonth() + 1
        };
        cW.day = function () {
            return (new Date).getDate()
        };
        cW.hour = function () {
            return (new Date).getHours()
        };
        cW.minute = function () {
            return (new Date).getMinutes()
        };
        cW.second = function () {
            return (new Date).getSeconds()
        };
        cW.millis = function () {
            return Date.now() - dq
        };

        function ct() {
            var ea = (Date.now() - dt) / 1000;
            P++;
            var eb = P / ea;
            if (ea > 0.5) {
                dt = Date.now();
                P = 0;
                cW.__frameRate = eb
            }
            cW.frameCount++
        }
        bR.prototype.redraw = function () {
            ct();
            d8.lineWidth = dW;
            var ea = cW.pmouseX,
                eb = cW.pmouseY;
            cW.pmouseX = dN;
            cW.pmouseY = d5;
            aD();
            cW.draw();
            cP();
            dN = cW.mouseX;
            d5 = cW.mouseY;
            cW.pmouseX = ea;
            cW.pmouseY = eb
        };
        bB.prototype.redraw = function () {
            ct();
            var ea = cW.pmouseX,
                eb = cW.pmouseY;
            cW.pmouseX = dN;
            cW.pmouseY = d5;
            d8.clear(d8.DEPTH_BUFFER_BIT);
            dC = {
                attributes: {},
                locations: {}
            };
            cW.noLights();
            cW.lightFalloff(1, 0, 0);
            cW.shininess(1);
            cW.ambient(255, 255, 255);
            cW.specular(0, 0, 0);
            cW.emissive(0, 0, 0);
            cW.camera();
            cW.draw();
            dN = cW.mouseX;
            d5 = cW.mouseY;
            cW.pmouseX = ea;
            cW.pmouseY = eb
        };
        cW.noLoop = function () {
            aC = false;
            ax = false;
            clearInterval(b4);
            cQ.onPause()
        };
        cW.loop = function () {
            if (ax) {
                return
            }
            dt = Date.now();
            P = 0;
            b4 = D.setInterval(function () {
                try {
                    cQ.onFrameStart();
                    cW.redraw();
                    cQ.onFrameEnd()
                } catch (ea) {
                    D.clearInterval(b4);
                    throw ea
                }
            }, az);
            aC = true;
            ax = true;
            cQ.onLoop()
        };
        cW.frameRate = function (ea) {
            dU = ea;
            az = 1000 / dU;
            if (aC) {
                cW.noLoop();
                cW.loop()
            }
        };
        var au = [];

        function bO(ec, eb, ea) {
            if (ec.addEventListener) {
                ec.addEventListener(eb, ea, false)
            } else {
                ec.attachEvent("on" + eb, ea)
            }
            au.push({
                elem: ec,
                type: eb,
                fn: ea
            })
        }
        function de(ea) {
            var ed = ea.elem,
                ec = ea.type,
                eb = ea.fn;
            if (ed.removeEventListener) {
                ed.removeEventListener(ec, eb, false)
            } else {
                if (ed.detachEvent) {
                    ed.detachEvent("on" + ec, eb)
                }
            }
        }
        cW.exit = function () {
            D.clearInterval(b4);
            L(cW.externals.canvas.id);
            delete ae.onmousedown;
            for (var eb in F.lib) {
                if (F.lib.hasOwnProperty(eb)) {
                    if (F.lib[eb].hasOwnProperty("detach")) {
                        F.lib[eb].detach(cW)
                    }
                }
            }
            var ea = au.length;
            while (ea--) {
                de(au[ea])
            }
            cQ.onExit()
        };
        cW.cursor = function () {
            if (arguments.length > 1 || arguments.length === 1 && arguments[0] instanceof cW.PImage) {
                var ed = arguments[0],
                    ea, ef;
                if (arguments.length >= 3) {
                    ea = arguments[1];
                    ef = arguments[2];
                    if (ea < 0 || ef < 0 || ef >= ed.height || ea >= ed.width) {
                        throw "x and y must be non-negative and less than the dimensions of the image"
                    }
                } else {
                    ea = ed.width >>> 1;
                    ef = ed.height >>> 1
                }
                var eb = ed.toDataURL();
                var ec = 'url("' + eb + '") ' + ea + " " + ef + ", default";
                Z = ae.style.cursor = ec
            } else {
                if (arguments.length === 1) {
                    var ee = arguments[0];
                    Z = ae.style.cursor = ee
                } else {
                    Z = ae.style.cursor = ck
                }
            }
        };
        cW.noCursor = function () {
            Z = ae.style.cursor = B.NOCURSOR
        };
        cW.link = function (ea, eb) {
            if (eb !== t) {
                D.open(ea, eb)
            } else {
                D.location = ea
            }
        };
        cW.beginDraw = G;
        cW.endDraw = G;
        bR.prototype.toImageData = function (ea, ed, eb, ec) {
            ea = ea !== t ? ea : 0;
            ed = ed !== t ? ed : 0;
            eb = eb !== t ? eb : cW.width;
            ec = ec !== t ? ec : cW.height;
            return d8.getImageData(ea, ed, eb, ec)
        };
        bB.prototype.toImageData = function (ei, eh, ej, ee) {
            ei = ei !== t ? ei : 0;
            eh = eh !== t ? eh : 0;
            ej = ej !== t ? ej : cW.width;
            ee = ee !== t ? ee : cW.height;
            var eg = d.createElement("canvas"),
                ek = eg.getContext("2d"),
                ed = ek.createImageData(ej, ee),
                eb = new b(ej * ee * 4);
            d8.readPixels(ei, eh, ej, ee, d8.RGBA, d8.UNSIGNED_BYTE, eb);
            for (var ec = 0, ef = eb.length, ea = ed.data; ec < ef; ec++) {
                ea[ec] = eb[(ee - 1 - q.floor(ec / 4 / ej)) * ej * 4 + ec % (ej * 4)]
            }
            return ed
        };
        cW.status = function (ea) {
            D.status = ea
        };
        cW.binary = function (eb, ec) {
            var ed;
            if (ec > 0) {
                ed = ec
            } else {
                if (eb instanceof bP) {
                    ed = 16;
                    eb |= 0
                } else {
                    ed = 32;
                    while (ed > 1 && !(eb >>> ed - 1 & 1)) {
                        ed--
                    }
                }
            }
            var ea = "";
            while (ed > 0) {
                ea += eb >>> --ed & 1 ? "1" : "0"
            }
            return ea
        };
        cW.unbinary = function (eb) {
            var ed = eb.length - 1,
                ec = 1,
                ea = 0;
            while (ed >= 0) {
                var ee = eb[ed--];
                if (ee !== "0" && ee !== "1") {
                    throw "the value passed into unbinary was not an 8 bit binary number"
                }
                if (ee === "1") {
                    ea += ec
                }
                ec <<= 1
            }
            return ea
        };

        function cX(em, ek, ee, ep, eg, en) {
            var ec = em < 0 ? ee : ek;
            var eb = eg === 0;
            var el = eg === t || eg < 0 ? 0 : eg;
            var ej = q.abs(em);
            if (eb) {
                el = 1;
                ej *= 10;
                while (q.abs(q.round(ej) - ej) > 0.000001 && el < 7) {
                    ++el;
                    ej *= 10
                }
            } else {
                if (el !== 0) {
                    ej *= q.pow(10, el)
                }
            }
            var ed, ei = ej * 2;
            if (q.floor(ej) === ej) {
                ed = ej
            } else {
                if (q.floor(ei) === ei) {
                    var ea = q.floor(ej);
                    ed = ea + ea % 2
                } else {
                    ed = q.round(ej)
                }
            }
            var ef = "";
            var eo = ep + el;
            while (eo > 0 || ed > 0) {
                eo--;
                ef = "" + ed % 10 + ef;
                ed = q.floor(ed / 10)
            }
            if (en !== t) {
                var eh = ef.length - 3 - el;
                while (eh > 0) {
                    ef = ef.substring(0, eh) + en + ef.substring(eh);
                    eh -= 3
                }
            }
            if (el > 0) {
                return ec + ef.substring(0, ef.length - el) + "." + ef.substring(ef.length - el, ef.length)
            }
            return ec + ef
        }
        function ao(eg, ef, ea, ei, eb, eh) {
            if (eg instanceof Array) {
                var ed = [];
                for (var ec = 0, ee = eg.length; ec < ee; ec++) {
                    ed.push(cX(eg[ec], ef, ea, ei, eb, eh))
                }
                return ed
            }
            return cX(eg, ef, ea, ei, eb, eh)
        }
        cW.nf = function (ec, ea, eb) {
            return ao(ec, "", "-", ea, eb)
        };
        cW.nfs = function (ec, ea, eb) {
            return ao(ec, " ", "-", ea, eb)
        };
        cW.nfp = function (ec, ea, eb) {
            return ao(ec, "+", "-", ea, eb)
        };
        cW.nfc = function (ec, ea, eb) {
            return ao(ec, "", "-", ea, eb, ",")
        };
        var aM = function (ec, eb) {
            eb = eb === t || eb === null ? eb = 8 : eb;
            if (ec < 0) {
                ec = 4294967295 + ec + 1
            }
            var ea = Number(ec).toString(16).toUpperCase();
            while (ea.length < eb) {
                ea = "0" + ea
            }
            if (ea.length >= eb) {
                ea = ea.substring(ea.length - eb, ea.length)
            }
            return ea
        };
        cW.hex = function (eb, ea) {
            if (arguments.length === 1) {
                if (eb instanceof bP) {
                    ea = 4
                } else {
                    ea = 8
                }
            }
            return aM(eb, ea)
        };

        function dF(ea) {
            var eb = parseInt("0x" + ea, 16);
            if (eb > 2147483647) {
                eb -= 4294967296
            }
            return eb
        }
        cW.unhex = function (ec) {
            if (ec instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ec.length; eb++) {
                    ea.push(dF(ec[eb]))
                }
                return ea
            }
            return dF(ec)
        };
        cW.loadStrings = function (eb) {
            if (localStorage[eb]) {
                return localStorage[eb].split("\n")
            }
            var ea = w(eb);
            if (typeof ea !== "string" || ea === "") {
                return []
            }
            ea = ea.replace(/(\r\n?)/g, "\n").replace(/\n$/, "");
            return ea.split("\n")
        };
        cW.saveStrings = function (eb, ea) {
            localStorage[eb] = ea.join("\n")
        };
        cW.loadBytes = function (ec) {
            var eb = w(ec);
            var ea = [];
            for (var ed = 0; ed < eb.length; ed++) {
                ea.push(eb.charCodeAt(ed))
            }
            return ea
        };

        function bc(ea) {
            return Array.prototype.slice.call(ea, 1)
        }
        cW.matchAll = function (eb, ea) {
            var ed = [],
                ec;
            var ee = new RegExp(ea, "g");
            while ((ec = ee.exec(eb)) !== null) {
                ed.push(ec);
                if (ec[0].length === 0) {
                    ++ee.lastIndex
                }
            }
            return ed.length > 0 ? ed : null
        };
        cW.__contains = function (eb, ea) {
            if (typeof eb !== "string") {
                return eb.contains.apply(eb, bc(arguments))
            }
            return eb !== null && ea !== null && typeof ea === "string" && eb.indexOf(ea) > -1
        };
        cW.__replaceAll = function (ea, ec, eb) {
            if (typeof ea !== "string") {
                return ea.replaceAll.apply(ea, bc(arguments))
            }
            return ea.replace(new RegExp(ec, "g"), eb)
        };
        cW.__replaceFirst = function (ea, ec, eb) {
            if (typeof ea !== "string") {
                return ea.replaceFirst.apply(ea, bc(arguments))
            }
            return ea.replace(new RegExp(ec, ""), eb)
        };
        cW.__replace = function (ed, ef, ee) {
            if (typeof ed !== "string") {
                return ed.replace.apply(ed, bc(arguments))
            }
            if (ef instanceof RegExp) {
                return ed.replace(ef, ee)
            }
            if (typeof ef !== "string") {
                ef = ef.toString()
            }
            if (ef === "") {
                return ed
            }
            var ec = ed.indexOf(ef);
            if (ec < 0) {
                return ed
            }
            var eb = 0,
                ea = "";
            do {
                ea += ed.substring(eb, ec) + ee;
                eb = ec + ef.length
            } while ((ec = ed.indexOf(ef, eb)) >= 0);
            return ea + ed.substring(eb)
        };
        cW.__equals = function (eb, ea) {
            if (eb.equals instanceof Function) {
                return eb.equals.apply(eb, bc(arguments))
            }
            return eb.valueOf() === ea.valueOf()
        };
        cW.__equalsIgnoreCase = function (eb, ea) {
            if (typeof eb !== "string") {
                return eb.equalsIgnoreCase.apply(eb, bc(arguments))
            }
            return eb.toLowerCase() === ea.toLowerCase()
        };
        cW.__toCharArray = function (ec) {
            if (typeof ec !== "string") {
                return ec.toCharArray.apply(ec, bc(arguments))
            }
            var ed = [];
            for (var eb = 0, ea = ec.length; eb < ea; ++eb) {
                ed[eb] = new bP(ec.charAt(eb))
            }
            return ed
        };
        cW.__split = function (ed, ee, eb) {
            if (typeof ed !== "string") {
                return ed.split.apply(ed, bc(arguments))
            }
            var eg = new RegExp(ee);
            if (eb === t || eb < 1) {
                return ed.split(eg)
            }
            var ea = [],
                ef = ed,
                eh;
            while ((eh = ef.search(eg)) !== -1 && ea.length < eb - 1) {
                var ec = eg.exec(ef).toString();
                ea.push(ef.substring(0, eh));
                ef = ef.substring(eh + ec.length)
            }
            if (eh !== -1 || ef !== "") {
                ea.push(ef)
            }
            return ea
        };
        cW.__codePointAt = function (ed, eb) {
            var ee = ed.charCodeAt(eb),
                ec, ea;
            if (55296 <= ee && ee <= 56319) {
                ec = ee;
                ea = ed.charCodeAt(eb + 1);
                return (ec - 55296) * 1024 + (ea - 56320) + 65536
            }
            return ee
        };
        cW.match = function (eb, ea) {
            return eb.match(ea)
        };
        cW.__matches = function (eb, ea) {
            return (new RegExp(ea)).test(eb)
        };
        cW.__startsWith = function (ea, ec, eb) {
            if (typeof ea !== "string") {
                return ea.startsWith.apply(ea, bc(arguments))
            }
            eb = eb || 0;
            if (eb < 0 || eb > ea.length) {
                return false
            }
            return ec === "" || ec === ea ? true : ea.indexOf(ec) === eb
        };
        cW.__endsWith = function (eb, ec) {
            if (typeof eb !== "string") {
                return eb.endsWith.apply(eb, bc(arguments))
            }
            var ea = ec ? ec.length : 0;
            return ec === "" || ec === eb ? true : eb.indexOf(ec) === eb.length - ea
        };
        cW.__hashCode = function (ea) {
            if (ea.hashCode instanceof Function) {
                return ea.hashCode.apply(ea, bc(arguments))
            }
            return h(ea)
        };
        cW.__printStackTrace = function (ea) {
            cW.println("Exception: " + ea.toString())
        };
        var d9 = [];
        cW.println = function (ea) {
            var eb = d9.length;
            if (eb) {
                F.logger.log(d9.join(""));
                d9.length = 0
            }
            if (arguments.length === 0 && eb === 0) {
                F.logger.log("")
            } else {
                if (arguments.length !== 0) {
                    F.logger.log(ea)
                }
            }
        };
        cW.print = function (ea) {
            d9.push(ea)
        };
        cW.str = function (ec) {
            if (ec instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ec.length; eb++) {
                    ea.push(ec[eb].toString() + "")
                }
                return ea
            }
            return ec.toString() + ""
        };
        cW.trim = function (ec) {
            if (ec instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ec.length; eb++) {
                    ea.push(ec[eb].replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, ""))
                }
                return ea
            }
            return ec.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, "")
        };

        function aR(ea) {
            if (typeof ea === "number") {
                return ea !== 0
            }
            if (typeof ea === "boolean") {
                return ea
            }
            if (typeof ea === "string") {
                return ea.toLowerCase() === "true"
            }
            if (ea instanceof bP) {
                return ea.code === 49 || ea.code === 84 || ea.code === 116
            }
        }
        cW.parseBoolean = function (ec) {
            if (ec instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ec.length; eb++) {
                    ea.push(aR(ec[eb]))
                }
                return ea
            }
            return aR(ec)
        };
        cW.parseByte = function (ec) {
            if (ec instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ec.length; eb++) {
                    ea.push(0 - (ec[eb] & 128) | ec[eb] & 127)
                }
                return ea
            }
            return 0 - (ec & 128) | ec & 127
        };
        cW.parseChar = function (ec) {
            if (typeof ec === "number") {
                return new bP(String.fromCharCode(ec & 65535))
            }
            if (ec instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ec.length; eb++) {
                    ea.push(new bP(String.fromCharCode(ec[eb] & 65535)))
                }
                return ea
            }
            throw "char() may receive only one argument of type int, byte, int[], or byte[]."
        };

        function cO(ea) {
            if (typeof ea === "number") {
                return ea
            }
            if (typeof ea === "boolean") {
                return ea ? 1 : 0
            }
            if (typeof ea === "string") {
                return parseFloat(ea)
            }
            if (ea instanceof bP) {
                return ea.code
            }
        }
        cW.parseFloat = function (ec) {
            if (ec instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ec.length; eb++) {
                    ea.push(cO(ec[eb]))
                }
                return ea
            }
            return cO(ec)
        };

        function al(ec, ea) {
            if (typeof ec === "number") {
                return ec & 4294967295
            }
            if (typeof ec === "boolean") {
                return ec ? 1 : 0
            }
            if (typeof ec === "string") {
                var eb = parseInt(ec, ea || 10);
                return eb & 4294967295
            }
            if (ec instanceof bP) {
                return ec.code
            }
        }
        cW.parseInt = function (ed, ec) {
            if (ed instanceof Array) {
                var ea = [];
                for (var eb = 0; eb < ed.length; eb++) {
                    if (typeof ed[eb] === "string" && !/^\s*[+\-]?\d+\s*$/.test(ed[eb])) {
                        ea.push(0)
                    } else {
                        ea.push(al(ed[eb], ec))
                    }
                }
                return ea
            }
            return al(ed, ec)
        };
        cW.__int_cast = function (ea) {
            return 0 | ea
        };
        cW.__instanceof = function (ec, eb) {
            if (typeof eb !== "function") {
                throw "Function is expected as type argument for instanceof operator"
            }
            if (typeof ec === "string") {
                return eb === Object || eb === String
            }
            if (ec instanceof eb) {
                return true
            }
            if (typeof ec !== "object" || ec === null) {
                return false
            }
            var ee = ec.constructor;
            if (eb.$isInterface) {
                var ed = [];
                while (ee) {
                    if (ee.$interfaces) {
                        ed = ed.concat(ee.$interfaces)
                    }
                    ee = ee.$base
                }
                while (ed.length > 0) {
                    var ea = ed.shift();
                    if (ea === eb) {
                        return true
                    }
                    if (ea.$interfaces) {
                        ed = ed.concat(ea.$interfaces)
                    }
                }
                return false
            }
            while (ee.hasOwnProperty("$base")) {
                ee = ee.$base;
                if (ee === eb) {
                    return true
                }
            }
            return false
        };
        cW.abs = q.abs;
        cW.ceil = q.ceil;
        cW.constrain = function (eb, ec, ea) {
            return eb > ea ? ea : eb < ec ? ec : eb
        };
        cW.dist = function () {
            var ec, eb, ea;
            if (arguments.length === 4) {
                ec = arguments[0] - arguments[2];
                eb = arguments[1] - arguments[3];
                return q.sqrt(ec * ec + eb * eb)
            }
            if (arguments.length === 6) {
                ec = arguments[0] - arguments[3];
                eb = arguments[1] - arguments[4];
                ea = arguments[2] - arguments[5];
                return q.sqrt(ec * ec + eb * eb + ea * ea)
            }
        };
        cW.exp = q.exp;
        cW.floor = q.floor;
        cW.lerp = function (eb, ea, ec) {
            return (ea - eb) * ec + eb
        };
        cW.log = q.log;
        cW.mag = function (eb, ea, ec) {
            if (ec) {
                return q.sqrt(eb * eb + ea * ea + ec * ec)
            }
            return q.sqrt(eb * eb + ea * ea)
        };
        cW.map = function (ed, eb, ec, ea, ee) {
            return ea + (ee - ea) * ((ed - eb) / (ec - eb))
        };
        cW.max = function () {
            if (arguments.length === 2) {
                return arguments[0] < arguments[1] ? arguments[1] : arguments[0]
            }
            var eb = arguments.length === 1 ? arguments[0] : arguments;
            if (!("length" in eb && eb.length > 0)) {
                throw "Non-empty array is expected"
            }
            var ea = eb[0],
                ed = eb.length;
            for (var ec = 1; ec < ed; ++ec) {
                if (ea < eb[ec]) {
                    ea = eb[ec]
                }
            }
            return ea
        };
        cW.min = function () {
            if (arguments.length === 2) {
                return arguments[0] < arguments[1] ? arguments[0] : arguments[1]
            }
            var ea = arguments.length === 1 ? arguments[0] : arguments;
            if (!("length" in ea && ea.length > 0)) {
                throw "Non-empty array is expected"
            }
            var ec = ea[0],
                ed = ea.length;
            for (var eb = 1; eb < ed; ++eb) {
                if (ec > ea[eb]) {
                    ec = ea[eb]
                }
            }
            return ec
        };
        cW.norm = function (eb, ea, ec) {
            return (eb - ea) / (ec - ea)
        };
        cW.pow = q.pow;
        cW.round = q.round;
        cW.sq = function (ea) {
            return ea * ea
        };
        cW.sqrt = q.sqrt;
        cW.acos = q.acos;
        cW.asin = q.asin;
        cW.atan = q.atan;
        cW.atan2 = q.atan2;
        cW.cos = q.cos;
        cW.degrees = function (ea) {
            return ea * 180 / q.PI
        };
        cW.radians = function (ea) {
            return ea / 180 * q.PI
        };
        cW.sin = q.sin;
        cW.tan = q.tan;
        var bY = q.random;
        cW.random = function () {
            if (arguments.length === 0) {
                return bY()
            }
            if (arguments.length === 1) {
                return bY() * arguments[0]
            }
            var eb = arguments[0],
                ea = arguments[1];
            return bY() * (ea - eb) + eb
        };

        function co(ec, eb) {
            var ee = ec || 362436069,
                ea = eb || 521288629;
            var ed = function () {
                ee = 36969 * (ee & 65535) + (ee >>> 16) & 4294967295;
                ea = 18000 * (ea & 65535) + (ea >>> 16) & 4294967295;
                return ((ee & 65535) << 16 | ea & 65535) & 4294967295
            };
            this.nextDouble = function () {
                var ef = ed() / 4294967296;
                return ef < 0 ? 1 + ef : ef
            };
            this.nextInt = ed
        }
        co.createRandomized = function () {
            var ea = new Date;
            return new co(ea / 60000 & 4294967295, ea & 4294967295)
        };
        cW.randomSeed = function (ea) {
            bY = (new co(ea)).nextDouble
        };
        cW.Random = function (ea) {
            var ed = false,
                eb, ec;
            this.nextGaussian = function () {
                if (ed) {
                    ed = false;
                    return eb
                }
                var eh, ef, ee;
                do {
                    eh = 2 * ec() - 1;
                    ef = 2 * ec() - 1;
                    ee = eh * eh + ef * ef
                } while (ee >= 1 || ee === 0);
                var eg = q.sqrt(-2 * q.log(ee) / ee);
                eb = ef * eg;
                ed = true;
                return eh * eg
            };
            ec = ea === t ? q.random : (new co(ea)).nextDouble
        };

        function dz(eh) {
            var eb = eh !== t ? new co(eh) : co.createRandomized();
            var eg, ee;
            var ed = new b(512);
            for (eg = 0; eg < 256; ++eg) {
                ed[eg] = eg
            }
            for (eg = 0; eg < 256; ++eg) {
                var ej = ed[ee = eb.nextInt() & 255];
                ed[ee] = ed[eg];
                ed[eg] = ej
            }
            for (eg = 0; eg < 256; ++eg) {
                ed[eg + 256] = ed[eg]
            }
            function ea(en, ek, eq, ep) {
                var eo = en & 15;
                var em = eo < 8 ? ek : eq,
                    el = eo < 4 ? eq : eo === 12 || eo === 14 ? ek : ep;
                return ((eo & 1) === 0 ? em : -em) + ((eo & 2) === 0 ? el : -el)
            }
            function ef(em, ek, en) {
                var el = (em & 1) === 0 ? ek : en;
                return (em & 2) === 0 ? -el : el
            }
            function ei(el, ek) {
                return (el & 1) === 0 ? -ek : ek
            }
            function ec(em, el, ek) {
                return el + em * (ek - el)
            }
            this.noise3d = function (ew, ev, eu) {
                var en = q.floor(ew) & 255,
                    el = q.floor(ev) & 255,
                    ek = q.floor(eu) & 255;
                ew -= q.floor(ew);
                ev -= q.floor(ev);
                eu -= q.floor(eu);
                var er = (3 - 2 * ew) * ew * ew,
                    eq = (3 - 2 * ev) * ev * ev,
                    ep = (3 - 2 * eu) * eu * eu;
                var ey = ed[en] + el,
                    et = ed[ey] + ek,
                    es = ed[ey + 1] + ek,
                    ex = ed[en + 1] + el,
                    eo = ed[ex] + ek,
                    em = ed[ex + 1] + ek;
                return ec(ep, ec(eq, ec(er, ea(ed[et], ew, ev, eu), ea(ed[eo], ew - 1, ev, eu)), ec(er, ea(ed[es], ew, ev - 1, eu), ea(ed[em], ew - 1, ev - 1, eu))), ec(eq, ec(er, ea(ed[et + 1], ew, ev, eu - 1), ea(ed[eo + 1], ew - 1, ev, eu - 1)), ec(er, ea(ed[es + 1], ew, ev - 1, eu - 1), ea(ed[em + 1], ew - 1, ev - 1, eu - 1))))
            };
            this.noise2d = function (ek, er) {
                var eq = q.floor(ek) & 255,
                    eo = q.floor(er) & 255;
                ek -= q.floor(ek);
                er -= q.floor(er);
                var em = (3 - 2 * ek) * ek * ek,
                    el = (3 - 2 * er) * er * er;
                var ep = ed[eq] + eo,
                    en = ed[eq + 1] + eo;
                return ec(el, ec(em, ef(ed[ep], ek, er), ef(ed[en], ek - 1, er)), ec(em, ef(ed[ep + 1], ek, er - 1), ef(ed[en + 1], ek - 1, er - 1)))
            };
            this.noise1d = function (ek) {
                var em = q.floor(ek) & 255;
                ek -= q.floor(ek);
                var el = (3 - 2 * ek) * ek * ek;
                return ec(el, ei(ed[em], ek), ei(ed[em + 1], ek - 1))
            }
        }
        var bW = {
            generator: t,
            octaves: 4,
            fallout: 0.5,
            seed: t
        };
        cW.noise = function (ea, eh, eg) {
            if (bW.generator === t) {
                bW.generator = new dz(bW.seed)
            }
            var ef = bW.generator;
            var ee = 1,
                eb = 1,
                ed = 0;
            for (var ec = 0; ec < bW.octaves; ++ec) {
                ee *= bW.fallout;
                switch (arguments.length) {
                    case 1:
                        ed += ee * (1 + ef.noise1d(eb * ea)) / 2;
                        break;
                    case 2:
                        ed += ee * (1 + ef.noise2d(eb * ea, eb * eh)) / 2;
                        break;
                    case 3:
                        ed += ee * (1 + ef.noise3d(eb * ea, eb * eh, eb * eg)) / 2;
                        break
                }
                eb *= 2
            }
            return ed
        };
        cW.noiseDetail = function (eb, ea) {
            bW.octaves = eb;
            if (ea !== t) {
                bW.fallout = ea
            }
        };
        cW.noiseSeed = function (ea) {
            bW.seed = ea;
            bW.generator = t
        };
        ds.prototype.size = function (eb, ee, ed) {
            if (ce) {
                cW.stroke(0)
            }
            if (aH) {
                cW.fill(255)
            }
            var ec = {
                fillStyle: d8.fillStyle,
                strokeStyle: d8.strokeStyle,
                lineCap: d8.lineCap,
                lineJoin: d8.lineJoin
            };
            if (ae.style.length > 0) {
                ae.style.removeProperty("width");
                ae.style.removeProperty("height")
            }
            ae.width = cW.width = eb || 100;
            ae.height = cW.height = ee || 100;
            for (var ef in ec) {
                if (ec.hasOwnProperty(ef)) {
                    d8[ef] = ec[ef]
                }
            }
            cW.textFont(W);
            cW.background();
            bZ = q.max(1000, eb * ee * 0.05);
            cW.externals.context = d8;
            for (var ea = 0; ea < 720; ea++) {
                ah[ea] = cW.sin(ea * (q.PI / 180) * 0.5);
                bl[ea] = cW.cos(ea * (q.PI / 180) * 0.5)
            }
        };
        bR.prototype.size = function (ea, ec, eb) {
            if (d8 === t) {
                d8 = ae.getContext("2d");
                am = new V;
                da = new V;
                dJ = new aX;
                aT = new aX
            }
            ds.prototype.size.apply(this, arguments)
        };
        bB.prototype.size = function () {
            var eb = false;
            return function ea(ed, ef, ee) {
                if (eb) {
                    throw "Multiple calls to size() for 3D renders are not allowed."
                }
                eb = true;

                function eg(ei) {
                    var el = ["experimental-webgl", "webgl", "webkit-3d"],
                        ek;
                    for (var ej = 0, eh = el.length; ej < eh; ej++) {
                        ek = ei.getContext(el[ej], {
                            antialias: false,
                            preserveDrawingBuffer: true
                        });
                        if (ek) {
                            break
                        }
                    }
                    return ek
                }
                try {
                    ae.width = cW.width = ed || 100;
                    ae.height = cW.height = ef || 100;
                    d8 = eg(ae);
                    c7 = d8.createTexture();
                    bS = d8.createTexture()
                } catch (ec) {
                    F.debug(ec)
                }
                if (!d8) {
                    throw "WebGL context is not supported on this browser."
                }
                d8.viewport(0, 0, ae.width, ae.height);
                d8.enable(d8.DEPTH_TEST);
                d8.enable(d8.BLEND);
                d8.blendFunc(d8.SRC_ALPHA, d8.ONE_MINUS_SRC_ALPHA);
                dQ = bF(d8, dE, aW);
                bT = bF(d8, aO, bQ);
                cW.strokeWeight(1);
                dx = bF(d8, dn, aF);
                d8.useProgram(dx);
                dZ("usingTexture3d", dx, "usingTexture", dT);
                cW.lightFalloff(1, 0, 0);
                cW.shininess(1);
                cW.ambient(255, 255, 255);
                cW.specular(0, 0, 0);
                cW.emissive(0, 0, 0);
                bh = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, bh);
                d8.bufferData(d8.ARRAY_BUFFER, dh, d8.STATIC_DRAW);
                cJ = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, cJ);
                d8.bufferData(d8.ARRAY_BUFFER, df, d8.STATIC_DRAW);
                dk = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, dk);
                d8.bufferData(d8.ARRAY_BUFFER, bH, d8.STATIC_DRAW);
                aB = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, aB);
                d8.bufferData(d8.ARRAY_BUFFER, ak, d8.STATIC_DRAW);
                b2 = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, b2);
                d8.bufferData(d8.ARRAY_BUFFER, ai, d8.STATIC_DRAW);
                bg = d8.createBuffer();
                b8 = d8.createBuffer();
                at = d8.createBuffer();
                aG = d8.createBuffer();
                bC = d8.createBuffer();
                af = d8.createBuffer();
                aw = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, aw);
                d8.bufferData(d8.ARRAY_BUFFER, new e([0, 0, 0]), d8.STATIC_DRAW);
                cH = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, cH);
                d8.bufferData(d8.ARRAY_BUFFER, new e([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0]), d8.STATIC_DRAW);
                ac = d8.createBuffer();
                d8.bindBuffer(d8.ARRAY_BUFFER, ac);
                d8.bufferData(d8.ARRAY_BUFFER, new e([0, 0, 1, 0, 1, 1, 0, 1]), d8.STATIC_DRAW);
                R = d8.createBuffer();
                d8.bindBuffer(d8.ELEMENT_ARRAY_BUFFER, R);
                d8.bufferData(d8.ELEMENT_ARRAY_BUFFER, new y([0, 1, 2, 2, 3, 0]), d8.STATIC_DRAW);
                bV = new aP;
                ch = new aP;
                dJ = new aP;
                aT = new aP;
                db = new aP;
                cW.camera();
                cW.perspective();
                am = new V;
                da = new V;
                c3 = new aP;
                aQ = new aP;
                aL = new aP;
                bz = new aP;
                cd = new aP;
                U = new aP;
                U.set(-1, 3, -3, 1, 3, -6, 3, 0, -3, 3, 0, 0, 1, 0, 0, 0);
                ds.prototype.size.apply(this, arguments)
            }
        }();
        bR.prototype.ambientLight = ds.prototype.a3DOnlyFunction;
        bB.prototype.ambientLight = function (ea, ed, ei, ej, ef, ee) {
            if (dL === 8) {
                throw "can only create " + 8 + " lights"
            }
            var eg = new A(ej, ef, ee);
            var eh = new aP;
            eh.scale(1, -1, 1);
            eh.apply(dJ.array());
            eh.mult(eg, eg);
            var eb = dH(ea, ed, ei, 0);
            var ec = [((eb >> 16) & 255) / 255, ((eb >> 8) & 255) / 255, (eb & 255) / 255];
            d8.useProgram(dx);
            d2("uLights.color.3d." + dL, dx, "uLights" + dL + ".color", ec);
            d2("uLights.position.3d." + dL, dx, "uLights" + dL + ".position", eg.array());
            dZ("uLights.type.3d." + dL, dx, "uLights" + dL + ".type", 0);
            dZ("uLightCount3d", dx, "uLightCount", ++dL)
        };
        bR.prototype.directionalLight = ds.prototype.a3DOnlyFunction;
        bB.prototype.directionalLight = function (ea, eg, ei, eh, ef, ee) {
            if (dL === 8) {
                throw "can only create " + 8 + " lights"
            }
            d8.useProgram(dx);
            var ej = new aP;
            ej.scale(1, -1, 1);
            ej.apply(dJ.array());
            ej = ej.array();
            var ec = [ej[0] * eh + ej[4] * ef + ej[8] * ee, ej[1] * eh + ej[5] * ef + ej[9] * ee, ej[2] * eh + ej[6] * ef + ej[10] * ee];
            var eb = dH(ea, eg, ei, 0);
            var ed = [((eb >> 16) & 255) / 255, ((eb >> 8) & 255) / 255, (eb & 255) / 255];
            d2("uLights.color.3d." + dL, dx, "uLights" + dL + ".color", ed);
            d2("uLights.position.3d." + dL, dx, "uLights" + dL + ".position", ec);
            dZ("uLights.type.3d." + dL, dx, "uLights" + dL + ".type", 1);
            dZ("uLightCount3d", dx, "uLightCount", ++dL)
        };
        bR.prototype.lightFalloff = ds.prototype.a3DOnlyFunction;
        bB.prototype.lightFalloff = function (eb, ea, ec) {
            d8.useProgram(dx);
            d2("uFalloff3d", dx, "uFalloff", [eb, ea, ec])
        };
        bR.prototype.lightSpecular = ds.prototype.a3DOnlyFunction;
        bB.prototype.lightSpecular = function (ee, ed, ea) {
            var eb = dH(ee, ed, ea, 0);
            var ec = [((eb >> 16) & 255) / 255, ((eb >> 8) & 255) / 255, (eb & 255) / 255];
            d8.useProgram(dx);
            d2("uSpecular3d", dx, "uSpecular", ec)
        };
        cW.lights = function () {
            cW.ambientLight(128, 128, 128);
            cW.directionalLight(128, 128, 128, 0, 0, -1);
            cW.lightFalloff(1, 0, 0);
            cW.lightSpecular(0, 0, 0)
        };
        bR.prototype.pointLight = ds.prototype.a3DOnlyFunction;
        bB.prototype.pointLight = function (ea, ed, ei, ej, ef, ee) {
            if (dL === 8) {
                throw "can only create " + 8 + " lights"
            }
            var eg = new A(ej, ef, ee);
            var eh = new aP;
            eh.scale(1, -1, 1);
            eh.apply(dJ.array());
            eh.mult(eg, eg);
            var eb = dH(ea, ed, ei, 0);
            var ec = [((eb >> 16) & 255) / 255, ((eb >> 8) & 255) / 255, (eb & 255) / 255];
            d8.useProgram(dx);
            d2("uLights.color.3d." + dL, dx, "uLights" + dL + ".color", ec);
            d2("uLights.position.3d." + dL, dx, "uLights" + dL + ".position", eg.array());
            dZ("uLights.type.3d." + dL, dx, "uLights" + dL + ".type", 2);
            dZ("uLightCount3d", dx, "uLightCount", ++dL)
        };
        bR.prototype.noLights = ds.prototype.a3DOnlyFunction;
        bB.prototype.noLights = function () {
            dL = 0;
            d8.useProgram(dx);
            dZ("uLightCount3d", dx, "uLightCount", dL)
        };
        bR.prototype.spotLight = ds.prototype.a3DOnlyFunction;
        bB.prototype.spotLight = function (ea, ei, en, eo, em, ek, ej, eh, ef, ee, eg) {
            if (dL === 8) {
                throw "can only create " + 8 + " lights"
            }
            d8.useProgram(dx);
            var el = new A(eo, em, ek);
            var ep = new aP;
            ep.scale(1, -1, 1);
            ep.apply(dJ.array());
            ep.mult(el, el);
            ep = ep.array();
            var ec = [ep[0] * ej + ep[4] * eh + ep[8] * ef, ep[1] * ej + ep[5] * eh + ep[9] * ef, ep[2] * ej + ep[6] * eh + ep[10] * ef];
            var eb = dH(ea, ei, en, 0);
            var ed = [((eb >> 16) & 255) / 255, ((eb >> 8) & 255) / 255, (eb & 255) / 255];
            d2("uLights.color.3d." + dL, dx, "uLights" + dL + ".color", ed);
            d2("uLights.position.3d." + dL, dx, "uLights" + dL + ".position", el.array());
            d2("uLights.direction.3d." + dL, dx, "uLights" + dL + ".direction", ec);
            d2("uLights.concentration.3d." + dL, dx, "uLights" + dL + ".concentration", eg);
            d2("uLights.angle.3d." + dL, dx, "uLights" + dL + ".angle", ee);
            dZ("uLights.type.3d." + dL, dx, "uLights" + dL + ".type", 3);
            dZ("uLightCount3d", dx, "uLightCount", ++dL)
        };
        bR.prototype.beginCamera = function () {
            throw "beginCamera() is not available in 2D mode"
        };
        bB.prototype.beginCamera = function () {
            if (ap) {
                throw "You cannot call beginCamera() again before calling endCamera()"
            }
            ap = true;
            dJ = ch;
            aT = bV
        };
        bR.prototype.endCamera = function () {
            throw "endCamera() is not available in 2D mode"
        };
        bB.prototype.endCamera = function () {
            if (!ap) {
                throw "You cannot call endCamera() before calling beginCamera()"
            }
            dJ.set(bV);
            aT.set(ch);
            ap = false
        };
        cW.camera = function (el, ek, ei, eg, ee, ed, et, er, ep) {
            if (el === t) {
                dl = cW.width / 2;
                dj = cW.height / 2;
                di = dj / q.tan(cK / 2);
                el = dl;
                ek = dj;
                ei = di;
                eg = dl;
                ee = dj;
                ed = 0;
                et = 0;
                er = 1;
                ep = 0
            }
            var ef = new A(el - eg, ek - ee, ei - ed);
            var eh = new A(et, er, ep);
            ef.normalize();
            var ej = A.cross(eh, ef);
            eh = A.cross(ef, ej);
            ej.normalize();
            eh.normalize();
            var eu = ej.x,
                es = ej.y,
                eq = ej.z;
            var ec = eh.x,
                eb = eh.y,
                ea = eh.z;
            var eo = ef.x,
                en = ef.y,
                em = ef.z;
            bV.set(eu, es, eq, 0, ec, eb, ea, 0, eo, en, em, 0, 0, 0, 0, 1);
            bV.translate(-el, -ek, -ei);
            ch.reset();
            ch.invApply(eu, es, eq, 0, ec, eb, ea, 0, eo, en, em, 0, 0, 0, 0, 1);
            ch.translate(el, ek, ei);
            dJ.set(bV);
            aT.set(ch)
        };
        cW.perspective = function (ee, ec, ef, eb) {
            if (arguments.length === 0) {
                dj = ae.height / 2;
                di = dj / q.tan(cK / 2);
                a0 = di / 10;
                av = di * 10;
                b5 = cW.width / cW.height;
                ee = cK;
                ec = b5;
                ef = a0;
                eb = av
            }
            var eg, ea, eh, ed;
            eg = ef * q.tan(ee / 2);
            ea = -eg;
            eh = eg * ec;
            ed = ea * ec;
            cW.frustum(ed, eh, ea, eg, ef, eb)
        };
        bR.prototype.frustum = function () {
            throw "Processing.js: frustum() is not supported in 2D mode"
        };
        bB.prototype.frustum = function (eg, ec, eb, ef, ee, ea) {
            ci = true;
            db = new aP;
            db.set(2 * ee / (ec - eg), 0, (ec + eg) / (ec - eg), 0, 0, 2 * ee / (ef - eb), (ef + eb) / (ef - eb), 0, 0, 0, -(ea + ee) / (ea - ee), -(2 * ea * ee) / (ea - ee), 0, 0, -1, 0);
            var ed = new aP;
            ed.set(db);
            ed.transpose();
            d8.useProgram(dQ);
            a9("projection2d", dQ, "uProjection", false, ed.array());
            d8.useProgram(dx);
            a9("projection3d", dx, "uProjection", false, ed.array());
            d8.useProgram(bT);
            a9("uProjectionUS", bT, "uProjection", false, ed.array())
        };
        cW.ortho = function (eb, em, ea, ek, eh, eg) {
            if (arguments.length === 0) {
                eb = 0;
                em = cW.width;
                ea = 0;
                ek = cW.height;
                eh = -10;
                eg = 10
            }
            var el = 2 / (em - eb);
            var ej = 2 / (ek - ea);
            var ei = -2 / (eg - eh);
            var ef = -(em + eb) / (em - eb);
            var ee = -(ek + ea) / (ek - ea);
            var ed = -(eg + eh) / (eg - eh);
            db = new aP;
            db.set(el, 0, 0, ef, 0, ej, 0, ee, 0, 0, ei, ed, 0, 0, 0, 1);
            var ec = new aP;
            ec.set(db);
            ec.transpose();
            d8.useProgram(dQ);
            a9("projection2d", dQ, "uProjection", false, ec.array());
            d8.useProgram(dx);
            a9("projection3d", dx, "uProjection", false, ec.array());
            d8.useProgram(bT);
            a9("uProjectionUS", bT, "uProjection", false, ec.array());
            ci = false
        };
        cW.printProjection = function () {
            db.print()
        };
        cW.printCamera = function () {
            bV.print()
        };
        bR.prototype.box = ds.prototype.a3DOnlyFunction;
        bB.prototype.box = function (ec, ef, eh) {
            if (!ef || !eh) {
                ef = eh = ec
            }
            var ee = new aP;
            ee.scale(ec, ef, eh);
            var eb = new aP;
            eb.scale(1, -1, 1);
            eb.apply(dJ.array());
            eb.transpose();
            if (aH) {
                d8.useProgram(dx);
                a9("model3d", dx, "uModel", false, ee.array());
                a9("view3d", dx, "uView", false, eb.array());
                d8.enable(d8.POLYGON_OFFSET_FILL);
                d8.polygonOffset(1, 1);
                d2("color3d", dx, "uColor", bo);
                if (dL > 0) {
                    var ed = new aP;
                    ed.set(eb);
                    var ea = new aP;
                    ea.set(ee);
                    ed.mult(ea);
                    var eg = new aP;
                    eg.set(ed);
                    eg.invert();
                    eg.transpose();
                    a9("uNormalTransform3d", dx, "uNormalTransform", false, eg.array());
                    dc("aNormal3d", dx, "aNormal", 3, cJ)
                } else {
                    cg("aNormal3d", dx, "aNormal")
                }
                dc("aVertex3d", dx, "aVertex", 3, bh);
                cg("aColor3d", dx, "aColor");
                cg("aTexture3d", dx, "aTexture");
                d8.drawArrays(d8.TRIANGLES, 0, dh.length / 3);
                d8.disable(d8.POLYGON_OFFSET_FILL)
            }
            if (dW > 0 && ce) {
                d8.useProgram(dQ);
                a9("uModel2d", dQ, "uModel", false, ee.array());
                a9("uView2d", dQ, "uView", false, eb.array());
                d2("uColor2d", dQ, "uColor", c0);
                dZ("uIsDrawingText2d", dQ, "uIsDrawingText", false);
                dc("vertex2d", dQ, "aVertex", 3, dk);
                cg("aTextureCoord2d", dQ, "aTextureCoord");
                d8.drawArrays(d8.LINES, 0, bH.length / 3)
            }
        };
        var cD = function () {
            var eb;
            cF = [];
            for (eb = 0; eb < bM; eb++) {
                cF.push(0);
                cF.push(-1);
                cF.push(0);
                cF.push(bt[eb]);
                cF.push(bs[eb]);
                cF.push(br[eb])
            }
            cF.push(0);
            cF.push(-1);
            cF.push(0);
            cF.push(bt[0]);
            cF.push(bs[0]);
            cF.push(br[0]);
            var ef, ec, ee;
            var ed = 0;
            for (eb = 2; eb < bL; eb++) {
                ef = ec = ed;
                ed += bM;
                ee = ed;
                for (var ea = 0; ea < bM; ea++) {
                    cF.push(bt[ef]);
                    cF.push(bs[ef]);
                    cF.push(br[ef++]);
                    cF.push(bt[ee]);
                    cF.push(bs[ee]);
                    cF.push(br[ee++])
                }
                ef = ec;
                ee = ed;
                cF.push(bt[ef]);
                cF.push(bs[ef]);
                cF.push(br[ef]);
                cF.push(bt[ee]);
                cF.push(bs[ee]);
                cF.push(br[ee])
            }
            for (eb = 0; eb < bM; eb++) {
                ee = ed + eb;
                cF.push(bt[ee]);
                cF.push(bs[ee]);
                cF.push(br[ee]);
                cF.push(0);
                cF.push(1);
                cF.push(0)
            }
            cF.push(bt[ed]);
            cF.push(bs[ed]);
            cF.push(br[ed]);
            cF.push(0);
            cF.push(1);
            cF.push(0);
            d8.bindBuffer(d8.ARRAY_BUFFER, bg);
            d8.bufferData(d8.ARRAY_BUFFER, new e(cF), d8.STATIC_DRAW)
        };
        cW.sphereDetail = function (eb, em) {
            var eh;
            if (arguments.length === 1) {
                eb = em = arguments[0]
            }
            if (eb < 3) {
                eb = 3
            }
            if (em < 2) {
                em = 2
            }
            if (eb === bM && em === bL) {
                return
            }
            var el = 720 / eb;
            var ef = new e(eb);
            var ec = new e(eb);
            for (eh = 0; eh < eb; eh++) {
                ef[eh] = bl[eh * el % 720 | 0];
                ec[eh] = ah[eh * el % 720 | 0]
            }
            var ek = eb * (em - 1) + 2;
            var ej = 0;
            bt = new e(ek);
            bs = new e(ek);
            br = new e(ek);
            var ei = 720 * 0.5 / em;
            var ee = ei;
            for (eh = 1; eh < em; eh++) {
                var ed = ah[ee % 720 | 0];
                var ea = -bl[ee % 720 | 0];
                for (var eg = 0; eg < eb; eg++) {
                    bt[ej] = ef[eg] * ed;
                    bs[ej] = ea;
                    br[ej++] = ec[eg] * ed
                }
                ee += ei
            }
            bM = eb;
            bL = em;
            cD()
        };
        bR.prototype.sphere = ds.prototype.a3DOnlyFunction;
        bB.prototype.sphere = function () {
            var ee = arguments[0];
            if (bM < 3 || bL < 2) {
                cW.sphereDetail(30)
            }
            var ed = new aP;
            ed.scale(ee, ee, ee);
            var eb = new aP;
            eb.scale(1, -1, 1);
            eb.apply(dJ.array());
            eb.transpose();
            if (aH) {
                if (dL > 0) {
                    var ec = new aP;
                    ec.set(eb);
                    var ea = new aP;
                    ea.set(ed);
                    ec.mult(ea);
                    var ef = new aP;
                    ef.set(ec);
                    ef.invert();
                    ef.transpose();
                    a9("uNormalTransform3d", dx, "uNormalTransform", false, ef.array());
                    dc("aNormal3d", dx, "aNormal", 3, bg)
                } else {
                    cg("aNormal3d", dx, "aNormal")
                }
                d8.useProgram(dx);
                cg("aTexture3d", dx, "aTexture");
                a9("uModel3d", dx, "uModel", false, ed.array());
                a9("uView3d", dx, "uView", false, eb.array());
                dc("aVertex3d", dx, "aVertex", 3, bg);
                cg("aColor3d", dx, "aColor");
                d8.enable(d8.POLYGON_OFFSET_FILL);
                d8.polygonOffset(1, 1);
                d2("uColor3d", dx, "uColor", bo);
                d8.drawArrays(d8.TRIANGLE_STRIP, 0, cF.length / 3);
                d8.disable(d8.POLYGON_OFFSET_FILL)
            }
            if (dW > 0 && ce) {
                d8.useProgram(dQ);
                a9("uModel2d", dQ, "uModel", false, ed.array());
                a9("uView2d", dQ, "uView", false, eb.array());
                dc("aVertex2d", dQ, "aVertex", 3, bg);
                cg("aTextureCoord2d", dQ, "aTextureCoord");
                d2("uColor2d", dQ, "uColor", c0);
                dZ("uIsDrawingText", dQ, "uIsDrawingText", false);
                d8.drawArrays(d8.LINE_STRIP, 0, cF.length / 3)
            }
        };
        cW.modelX = function (eg, ef, ee) {
            var ei = dJ.array();
            var ek = ch.array();
            var ea = ei[0] * eg + ei[1] * ef + ei[2] * ee + ei[3];
            var ej = ei[4] * eg + ei[5] * ef + ei[6] * ee + ei[7];
            var eh = ei[8] * eg + ei[9] * ef + ei[10] * ee + ei[11];
            var eb = ei[12] * eg + ei[13] * ef + ei[14] * ee + ei[15];
            var ec = ek[0] * ea + ek[1] * ej + ek[2] * eh + ek[3] * eb;
            var ed = ek[12] * ea + ek[13] * ej + ek[14] * eh + ek[15] * eb;
            return ed !== 0 ? ec / ed : ec
        };
        cW.modelY = function (eg, ef, ee) {
            var ei = dJ.array();
            var ek = ch.array();
            var ea = ei[0] * eg + ei[1] * ef + ei[2] * ee + ei[3];
            var ej = ei[4] * eg + ei[5] * ef + ei[6] * ee + ei[7];
            var eh = ei[8] * eg + ei[9] * ef + ei[10] * ee + ei[11];
            var eb = ei[12] * eg + ei[13] * ef + ei[14] * ee + ei[15];
            var ec = ek[4] * ea + ek[5] * ej + ek[6] * eh + ek[7] * eb;
            var ed = ek[12] * ea + ek[13] * ej + ek[14] * eh + ek[15] * eb;
            return ed !== 0 ? ec / ed : ec
        };
        cW.modelZ = function (eg, ef, ee) {
            var ei = dJ.array();
            var ek = ch.array();
            var ea = ei[0] * eg + ei[1] * ef + ei[2] * ee + ei[3];
            var ej = ei[4] * eg + ei[5] * ef + ei[6] * ee + ei[7];
            var eh = ei[8] * eg + ei[9] * ef + ei[10] * ee + ei[11];
            var ec = ei[12] * eg + ei[13] * ef + ei[14] * ee + ei[15];
            var eb = ek[8] * ea + ek[9] * ej + ek[10] * eh + ek[11] * ec;
            var ed = ek[12] * ea + ek[13] * ej + ek[14] * eh + ek[15] * ec;
            return ed !== 0 ? eb / ed : eb
        };
        bR.prototype.ambient = ds.prototype.a3DOnlyFunction;
        bB.prototype.ambient = function (ed, ec, eb) {
            d8.useProgram(dx);
            dZ("uUsingMat3d", dx, "uUsingMat", true);
            var ea = cW.color(ed, ec, eb);
            d2("uMaterialAmbient3d", dx, "uMaterialAmbient", cW.color.toGLArray(ea).slice(0, 3))
        };
        bR.prototype.emissive = ds.prototype.a3DOnlyFunction;
        bB.prototype.emissive = function (ed, ec, eb) {
            d8.useProgram(dx);
            dZ("uUsingMat3d", dx, "uUsingMat", true);
            var ea = cW.color(ed, ec, eb);
            d2("uMaterialEmissive3d", dx, "uMaterialEmissive", cW.color.toGLArray(ea).slice(0, 3))
        };
        bR.prototype.shininess = ds.prototype.a3DOnlyFunction;
        bB.prototype.shininess = function (ea) {
            d8.useProgram(dx);
            dZ("uUsingMat3d", dx, "uUsingMat", true);
            d2("uShininess3d", dx, "uShininess", ea)
        };
        bR.prototype.specular = ds.prototype.a3DOnlyFunction;
        bB.prototype.specular = function (ed, ec, eb) {
            d8.useProgram(dx);
            dZ("uUsingMat3d", dx, "uUsingMat", true);
            var ea = cW.color(ed, ec, eb);
            d2("uMaterialSpecular3d", dx, "uMaterialSpecular", cW.color.toGLArray(ea).slice(0, 3))
        };
        cW.screenX = function (eh, eg, ef) {
            var ej = dJ.array();
            if (ej.length === 16) {
                var ea = ej[0] * eh + ej[1] * eg + ej[2] * ef + ej[3];
                var ek = ej[4] * eh + ej[5] * eg + ej[6] * ef + ej[7];
                var ei = ej[8] * eh + ej[9] * eg + ej[10] * ef + ej[11];
                var eb = ej[12] * eh + ej[13] * eg + ej[14] * ef + ej[15];
                var ee = db.array();
                var ec = ee[0] * ea + ee[1] * ek + ee[2] * ei + ee[3] * eb;
                var ed = ee[12] * ea + ee[13] * ek + ee[14] * ei + ee[15] * eb;
                if (ed !== 0) {
                    ec /= ed
                }
                return cW.width * (1 + ec) / 2
            }
            return dJ.multX(eh, eg)
        };
        cW.screenY = function aA(eh, eg, ef) {
            var ej = dJ.array();
            if (ej.length === 16) {
                var ea = ej[0] * eh + ej[1] * eg + ej[2] * ef + ej[3];
                var ek = ej[4] * eh + ej[5] * eg + ej[6] * ef + ej[7];
                var ei = ej[8] * eh + ej[9] * eg + ej[10] * ef + ej[11];
                var eb = ej[12] * eh + ej[13] * eg + ej[14] * ef + ej[15];
                var ee = db.array();
                var ec = ee[4] * ea + ee[5] * ek + ee[6] * ei + ee[7] * eb;
                var ed = ee[12] * ea + ee[13] * ek + ee[14] * ei + ee[15] * eb;
                if (ed !== 0) {
                    ec /= ed
                }
                return cW.height * (1 + ec) / 2
            }
            return dJ.multY(eh, eg)
        };
        cW.screenZ = function ay(eh, eg, ef) {
            var ej = dJ.array();
            if (ej.length !== 16) {
                return 0
            }
            var ee = db.array();
            var ea = ej[0] * eh + ej[1] * eg + ej[2] * ef + ej[3];
            var ek = ej[4] * eh + ej[5] * eg + ej[6] * ef + ej[7];
            var ei = ej[8] * eh + ej[9] * eg + ej[10] * ef + ej[11];
            var ec = ej[12] * eh + ej[13] * eg + ej[14] * ef + ej[15];
            var eb = ee[8] * ea + ee[9] * ek + ee[10] * ei + ee[11] * ec;
            var ed = ee[12] * ea + ee[13] * ek + ee[14] * ei + ee[15] * ec;
            if (ed !== 0) {
                eb /= ed
            }
            return (eb + 1) / 2
        };
        ds.prototype.fill = function () {
            var ea = cW.color(arguments[0], arguments[1], arguments[2], arguments[3]);
            if (ea === a1 && aH) {
                return
            }
            aH = true;
            a1 = ea
        };
        bR.prototype.fill = function () {
            ds.prototype.fill.apply(this, arguments);
            aq = true
        };
        bB.prototype.fill = function () {
            ds.prototype.fill.apply(this, arguments);
            bo = cW.color.toGLArray(a1)
        };

        function bn() {
            if (aH) {
                if (aq) {
                    d8.fillStyle = cW.color.toString(a1);
                    aq = false
                }
                d8.fill()
            }
        }
        cW.noFill = function () {
            aH = false
        };
        ds.prototype.stroke = function () {
            var ea = cW.color(arguments[0], arguments[1], arguments[2], arguments[3]);
            if (ea === cv && ce) {
                return
            }
            ce = true;
            cv = ea
        };
        bR.prototype.stroke = function () {
            ds.prototype.stroke.apply(this, arguments);
            b3 = true
        };
        bB.prototype.stroke = function () {
            ds.prototype.stroke.apply(this, arguments);
            c0 = cW.color.toGLArray(cv)
        };

        function dd() {
            if (ce) {
                if (b3) {
                    d8.strokeStyle = cW.color.toString(cv);
                    b3 = false
                }
                d8.stroke()
            }
        }
        cW.noStroke = function () {
            ce = false
        };
        ds.prototype.strokeWeight = function (ea) {
            dW = ea
        };
        bR.prototype.strokeWeight = function (ea) {
            ds.prototype.strokeWeight.apply(this, arguments);
            d8.lineWidth = ea
        };
        bB.prototype.strokeWeight = function (ea) {
            ds.prototype.strokeWeight.apply(this, arguments);
            d8.useProgram(dQ);
            d2("pointSize2d", dQ, "uPointSize", ea);
            d8.useProgram(bT);
            d2("pointSizeUnlitShape", bT, "uPointSize", ea);
            d8.lineWidth(ea)
        };
        cW.strokeCap = function (ea) {
            dY.$ensureContext().lineCap = ea
        };
        cW.strokeJoin = function (ea) {
            dY.$ensureContext().lineJoin = ea
        };
        bR.prototype.smooth = function () {
            dO = true;
            var ea = ae.style;
            ea.setProperty("image-rendering", "optimizeQuality", "important");
            ea.setProperty("-ms-interpolation-mode", "bicubic", "important");
            if (d8.hasOwnProperty("mozImageSmoothingEnabled")) {
                d8.mozImageSmoothingEnabled = true
            }
        };
        bB.prototype.smooth = function () {
            dO = true
        };
        bR.prototype.noSmooth = function () {
            dO = false;
            var ea = ae.style;
            ea.setProperty("image-rendering", "optimizeSpeed", "important");
            ea.setProperty("image-rendering", "-moz-crisp-edges", "important");
            ea.setProperty("image-rendering", "-webkit-optimize-contrast", "important");
            ea.setProperty("image-rendering", "optimize-contrast", "important");
            ea.setProperty("-ms-interpolation-mode", "nearest-neighbor", "important");
            if (d8.hasOwnProperty("mozImageSmoothingEnabled")) {
                d8.mozImageSmoothingEnabled = false
            }
        };
        bB.prototype.noSmooth = function () {
            dO = false
        };
        bR.prototype.point = function (ea, eb) {
            if (!ce) {
                return
            }
            ea = q.round(ea);
            eb = q.round(eb);
            d8.fillStyle = cW.color.toString(cv);
            aq = true;
            if (dW > 1) {
                d8.beginPath();
                d8.arc(ea, eb, dW / 2, 0, 6.283185307179586, false);
                d8.fill()
            } else {
                d8.fillRect(ea, eb, 1, 1)
            }
        };
        bB.prototype.point = function (ea, ee, ed) {
            var ec = new aP;
            ec.translate(ea, ee, ed || 0);
            ec.transpose();
            var eb = new aP;
            eb.scale(1, -1, 1);
            eb.apply(dJ.array());
            eb.transpose();
            d8.useProgram(dQ);
            a9("uModel2d", dQ, "uModel", false, ec.array());
            a9("uView2d", dQ, "uView", false, eb.array());
            if (dW > 0 && ce) {
                d2("uColor2d", dQ, "uColor", c0);
                dZ("uIsDrawingText2d", dQ, "uIsDrawingText", false);
                dZ("uSmooth2d", dQ, "uSmooth", dO);
                dc("aVertex2d", dQ, "aVertex", 3, aw);
                cg("aTextureCoord2d", dQ, "aTextureCoord");
                d8.drawArrays(d8.POINTS, 0, 1)
            }
        };
        cW.beginShape = function (ea) {
            dR = ea;
            d6 = [];
            bb = []
        };
        bR.prototype.vertex = function (eb, ed, ea) {
            var ec = [];
            if (du) {
                du = false
            }
            ec.isVert = true;
            ec[0] = eb;
            ec[1] = ed;
            ec[2] = 0;
            ec[3] = 0;
            ec[4] = 0;
            ec[5] = a1;
            ec[6] = cv;
            bb.push(ec);
            if (ea) {
                bb[bb.length - 1]["moveTo"] = ea
            }
        };
        bB.prototype.vertex = function (ea, ef, ee, ed, ec) {
            var eb = [];
            if (du) {
                du = false
            }
            eb.isVert = true;
            if (ec === t && dT) {
                ec = ed;
                ed = ee;
                ee = 0
            }
            if (ed !== t && ec !== t) {
                if (d4 === 2) {
                    ed /= cs.width;
                    ec /= cs.height
                }
                ed = ed > 1 ? 1 : ed;
                ed = ed < 0 ? 0 : ed;
                ec = ec > 1 ? 1 : ec;
                ec = ec < 0 ? 0 : ec
            }
            eb[0] = ea;
            eb[1] = ef;
            eb[2] = ee || 0;
            eb[3] = ed || 0;
            eb[4] = ec || 0;
            eb[5] = bo[0];
            eb[6] = bo[1];
            eb[7] = bo[2];
            eb[8] = bo[3];
            eb[9] = c0[0];
            eb[10] = c0[1];
            eb[11] = c0[2];
            eb[12] = c0[3];
            eb[13] = a8;
            eb[14] = a7;
            eb[15] = a6;
            bb.push(eb)
        };
        var d1 = function (ec, eb) {
            var ea = new aP;
            ea.scale(1, -1, 1);
            ea.apply(dJ.array());
            ea.transpose();
            d8.useProgram(bT);
            a9("uViewUS", bT, "uView", false, ea.array());
            dZ("uSmoothUS", bT, "uSmooth", dO);
            dc("aVertexUS", bT, "aVertex", 3, aw);
            d8.bufferData(d8.ARRAY_BUFFER, new e(ec), d8.STREAM_DRAW);
            dc("aColorUS", bT, "aColor", 4, aG);
            d8.bufferData(d8.ARRAY_BUFFER, new e(eb), d8.STREAM_DRAW);
            d8.drawArrays(d8.POINTS, 0, ec.length / 3)
        };
        var bj = function (ee, ed, ec) {
            var eb;
            if (ed === "LINES") {
                eb = d8.LINES
            } else {
                if (ed === "LINE_LOOP") {
                    eb = d8.LINE_LOOP
                } else {
                    eb = d8.LINE_STRIP
                }
            }
            var ea = new aP;
            ea.scale(1, -1, 1);
            ea.apply(dJ.array());
            ea.transpose();
            d8.useProgram(bT);
            a9("uViewUS", bT, "uView", false, ea.array());
            dc("aVertexUS", bT, "aVertex", 3, b8);
            d8.bufferData(d8.ARRAY_BUFFER, new e(ee), d8.STREAM_DRAW);
            dc("aColorUS", bT, "aColor", 4, bC);
            d8.bufferData(d8.ARRAY_BUFFER, new e(ec), d8.STREAM_DRAW);
            d8.drawArrays(eb, 0, ee.length / 3)
        };
        var dm = function (ef, ee, ed, ec) {
            var eb;
            if (ee === "TRIANGLES") {
                eb = d8.TRIANGLES
            } else {
                if (ee === "TRIANGLE_FAN") {
                    eb = d8.TRIANGLE_FAN
                } else {
                    eb = d8.TRIANGLE_STRIP
                }
            }
            var ea = new aP;
            ea.scale(1, -1, 1);
            ea.apply(dJ.array());
            ea.transpose();
            d8.useProgram(dx);
            a9("model3d", dx, "uModel", false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            a9("view3d", dx, "uView", false, ea.array());
            d8.enable(d8.POLYGON_OFFSET_FILL);
            d8.polygonOffset(1, 1);
            d2("color3d", dx, "uColor", [-1, 0, 0, 0]);
            dc("vertex3d", dx, "aVertex", 3, at);
            d8.bufferData(d8.ARRAY_BUFFER, new e(ef), d8.STREAM_DRAW);
            if (dT && bf !== null) {
                bw(ed)
            }
            dc("aColor3d", dx, "aColor", 4, aG);
            d8.bufferData(d8.ARRAY_BUFFER, new e(ed), d8.STREAM_DRAW);
            cg("aNormal3d", dx, "aNormal");
            if (dT) {
                dZ("uUsingTexture3d", dx, "uUsingTexture", dT);
                dc("aTexture3d", dx, "aTexture", 2, af);
                d8.bufferData(d8.ARRAY_BUFFER, new e(ec), d8.STREAM_DRAW)
            }
            d8.drawArrays(eb, 0, ef.length / 3);
            d8.disable(d8.POLYGON_OFFSET_FILL)
        };

        function cS() {
            bn();
            dd();
            d8.closePath()
        }
        bR.prototype.endShape = function (eh) {
            if (bb.length === 0) {
                return
            }
            var ed = eh === 2;
            if (ed) {
                bb.push(bb[0])
            }
            var ec = [];
            var ea = [];
            var ej = [];
            var em = [];
            var ef = [];
            var ei;
            du = true;
            var eg, ee, eb;
            var el = bb.length;
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                for (ee = 0; ee < 3; ee++) {
                    ea.push(ei[ee])
                }
            }
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                for (ee = 5; ee < 9; ee++) {
                    ej.push(ei[ee])
                }
            }
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                for (ee = 9; ee < 13; ee++) {
                    em.push(ei[ee])
                }
            }
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                ef.push(ei[3]);
                ef.push(ei[4])
            }
            if (dP && (dR === 20 || dR === t)) {
                if (el > 3) {
                    var ek = [],
                        en = 1 - aJ;
                    d8.beginPath();
                    d8.moveTo(bb[1][0], bb[1][1]);
                    for (eg = 1; eg + 2 < el; eg++) {
                        ei = bb[eg];
                        ek[0] = [ei[0], ei[1]];
                        ek[1] = [ei[0] + (en * bb[eg + 1][0] - en * bb[eg - 1][0]) / 6, ei[1] + (en * bb[eg + 1][1] - en * bb[eg - 1][1]) / 6];
                        ek[2] = [bb[eg + 1][0] + (en * bb[eg][0] - en * bb[eg + 2][0]) / 6, bb[eg + 1][1] + (en * bb[eg][1] - en * bb[eg + 2][1]) / 6];
                        ek[3] = [bb[eg + 1][0], bb[eg + 1][1]];
                        d8.bezierCurveTo(ek[1][0], ek[1][1], ek[2][0], ek[2][1], ek[3][0], ek[3][1])
                    }
                    cS()
                }
            } else {
                if (aa && (dR === 20 || dR === t)) {
                    d8.beginPath();
                    for (eg = 0; eg < el; eg++) {
                        ei = bb[eg];
                        if (bb[eg]["isVert"]) {
                            if (bb[eg]["moveTo"]) {
                                d8.moveTo(ei[0], ei[1])
                            } else {
                                d8.lineTo(ei[0], ei[1])
                            }
                        } else {
                            d8.bezierCurveTo(bb[eg][0], bb[eg][1], bb[eg][2], bb[eg][3], bb[eg][4], bb[eg][5])
                        }
                    }
                    cS()
                } else {
                    if (dR === 2) {
                        for (eg = 0; eg < el; eg++) {
                            ei = bb[eg];
                            if (ce) {
                                cW.stroke(ei[6])
                            }
                            cW.point(ei[0], ei[1])
                        }
                    } else {
                        if (dR === 4) {
                            for (eg = 0; eg + 1 < el; eg += 2) {
                                ei = bb[eg];
                                if (ce) {
                                    cW.stroke(bb[eg + 1][6])
                                }
                                cW.line(ei[0], ei[1], bb[eg + 1][0], bb[eg + 1][1])
                            }
                        } else {
                            if (dR === 9) {
                                for (eg = 0; eg + 2 < el; eg += 3) {
                                    ei = bb[eg];
                                    d8.beginPath();
                                    d8.moveTo(ei[0], ei[1]);
                                    d8.lineTo(bb[eg + 1][0], bb[eg + 1][1]);
                                    d8.lineTo(bb[eg + 2][0], bb[eg + 2][1]);
                                    d8.lineTo(ei[0], ei[1]);
                                    if (aH) {
                                        cW.fill(bb[eg + 2][5]);
                                        bn()
                                    }
                                    if (ce) {
                                        cW.stroke(bb[eg + 2][6]);
                                        dd()
                                    }
                                    d8.closePath()
                                }
                            } else {
                                if (dR === 10) {
                                    for (eg = 0; eg + 1 < el; eg++) {
                                        ei = bb[eg];
                                        d8.beginPath();
                                        d8.moveTo(bb[eg + 1][0], bb[eg + 1][1]);
                                        d8.lineTo(ei[0], ei[1]);
                                        if (ce) {
                                            cW.stroke(bb[eg + 1][6])
                                        }
                                        if (aH) {
                                            cW.fill(bb[eg + 1][5])
                                        }
                                        if (eg + 2 < el) {
                                            d8.lineTo(bb[eg + 2][0], bb[eg + 2][1]);
                                            if (ce) {
                                                cW.stroke(bb[eg + 2][6])
                                            }
                                            if (aH) {
                                                cW.fill(bb[eg + 2][5])
                                            }
                                        }
                                        cS()
                                    }
                                } else {
                                    if (dR === 11) {
                                        if (el > 2) {
                                            d8.beginPath();
                                            d8.moveTo(bb[0][0], bb[0][1]);
                                            d8.lineTo(bb[1][0], bb[1][1]);
                                            d8.lineTo(bb[2][0], bb[2][1]);
                                            if (aH) {
                                                cW.fill(bb[2][5]);
                                                bn()
                                            }
                                            if (ce) {
                                                cW.stroke(bb[2][6]);
                                                dd()
                                            }
                                            d8.closePath();
                                            for (eg = 3; eg < el; eg++) {
                                                ei = bb[eg];
                                                d8.beginPath();
                                                d8.moveTo(bb[0][0], bb[0][1]);
                                                d8.lineTo(bb[eg - 1][0], bb[eg - 1][1]);
                                                d8.lineTo(ei[0], ei[1]);
                                                if (aH) {
                                                    cW.fill(ei[5]);
                                                    bn()
                                                }
                                                if (ce) {
                                                    cW.stroke(ei[6]);
                                                    dd()
                                                }
                                                d8.closePath()
                                            }
                                        }
                                    } else {
                                        if (dR === 16) {
                                            for (eg = 0; eg + 3 < el; eg += 4) {
                                                ei = bb[eg];
                                                d8.beginPath();
                                                d8.moveTo(ei[0], ei[1]);
                                                for (ee = 1; ee < 4; ee++) {
                                                    d8.lineTo(bb[eg + ee][0], bb[eg + ee][1])
                                                }
                                                d8.lineTo(ei[0], ei[1]);
                                                if (aH) {
                                                    cW.fill(bb[eg + 3][5]);
                                                    bn()
                                                }
                                                if (ce) {
                                                    cW.stroke(bb[eg + 3][6]);
                                                    dd()
                                                }
                                                d8.closePath()
                                            }
                                        } else {
                                            if (dR === 17) {
                                                if (el > 3) {
                                                    for (eg = 0; eg + 1 < el; eg += 2) {
                                                        ei = bb[eg];
                                                        d8.beginPath();
                                                        if (eg + 3 < el) {
                                                            d8.moveTo(bb[eg + 2][0], bb[eg + 2][1]);
                                                            d8.lineTo(ei[0], ei[1]);
                                                            d8.lineTo(bb[eg + 1][0], bb[eg + 1][1]);
                                                            d8.lineTo(bb[eg + 3][0], bb[eg + 3][1]);
                                                            if (aH) {
                                                                cW.fill(bb[eg + 3][5])
                                                            }
                                                            if (ce) {
                                                                cW.stroke(bb[eg + 3][6])
                                                            }
                                                        } else {
                                                            d8.moveTo(ei[0], ei[1]);
                                                            d8.lineTo(bb[eg + 1][0], bb[eg + 1][1])
                                                        }
                                                        cS()
                                                    }
                                                }
                                            } else {
                                                d8.beginPath();
                                                d8.moveTo(bb[0][0], bb[0][1]);
                                                for (eg = 1; eg < el; eg++) {
                                                    ei = bb[eg];
                                                    if (ei.isVert) {
                                                        if (ei.moveTo) {
                                                            d8.moveTo(ei[0], ei[1])
                                                        } else {
                                                            d8.lineTo(ei[0], ei[1])
                                                        }
                                                    }
                                                }
                                                cS()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            dP = false;
            aa = false;
            cb = [];
            c2 = 0;
            if (ed) {
                bb.pop()
            }
        };
        bB.prototype.endShape = function (eh) {
            if (bb.length === 0) {
                return
            }
            var ed = eh === 2;
            var ec = [];
            var ea = [];
            var ej = [];
            var em = [];
            var ef = [];
            var ei;
            du = true;
            var eg, ee, eb;
            var el = bb.length;
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                for (ee = 0; ee < 3; ee++) {
                    ea.push(ei[ee])
                }
            }
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                for (ee = 5; ee < 9; ee++) {
                    ej.push(ei[ee])
                }
            }
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                for (ee = 9; ee < 13; ee++) {
                    em.push(ei[ee])
                }
            }
            for (eg = 0; eg < el; eg++) {
                ei = bb[eg];
                ef.push(ei[3]);
                ef.push(ei[4])
            }
            if (ed) {
                ea.push(bb[0][0]);
                ea.push(bb[0][1]);
                ea.push(bb[0][2]);
                for (eg = 5; eg < 9; eg++) {
                    ej.push(bb[0][eg])
                }
                for (eg = 9; eg < 13; eg++) {
                    em.push(bb[0][eg])
                }
                ef.push(bb[0][3]);
                ef.push(bb[0][4])
            }
            if (dP && (dR === 20 || dR === t)) {
                ec = ea;
                if (ce) {
                    bj(ec, null, em)
                }
                if (aH) {
                    dm(ea, null, ej)
                }
            } else {
                if (aa && (dR === 20 || dR === t)) {
                    ec = ea;
                    ec.splice(ec.length - 3);
                    em.splice(em.length - 4);
                    if (ce) {
                        bj(ec, null, em)
                    }
                    if (aH) {
                        dm(ea, "TRIANGLES", ej)
                    }
                } else {
                    if (dR === 2) {
                        for (eg = 0; eg < el; eg++) {
                            ei = bb[eg];
                            for (ee = 0; ee < 3; ee++) {
                                ec.push(ei[ee])
                            }
                        }
                        d1(ec, em)
                    } else {
                        if (dR === 4) {
                            for (eg = 0; eg < el; eg++) {
                                ei = bb[eg];
                                for (ee = 0; ee < 3; ee++) {
                                    ec.push(ei[ee])
                                }
                            }
                            for (eg = 0; eg < el; eg++) {
                                ei = bb[eg];
                                for (ee = 5; ee < 9; ee++) {
                                    ej.push(ei[ee])
                                }
                            }
                            bj(ec, "LINES", em)
                        } else {
                            if (dR === 9) {
                                if (el > 2) {
                                    for (eg = 0; eg + 2 < el; eg += 3) {
                                        ea = [];
                                        ef = [];
                                        ec = [];
                                        ej = [];
                                        em = [];
                                        for (ee = 0; ee < 3; ee++) {
                                            for (eb = 0; eb < 3; eb++) {
                                                ec.push(bb[eg + ee][eb]);
                                                ea.push(bb[eg + ee][eb])
                                            }
                                        }
                                        for (ee = 0; ee < 3; ee++) {
                                            for (eb = 3; eb < 5; eb++) {
                                                ef.push(bb[eg + ee][eb])
                                            }
                                        }
                                        for (ee = 0; ee < 3; ee++) {
                                            for (eb = 5; eb < 9; eb++) {
                                                ej.push(bb[eg + ee][eb]);
                                                em.push(bb[eg + ee][eb + 4])
                                            }
                                        }
                                        if (ce) {
                                            bj(ec, "LINE_LOOP", em)
                                        }
                                        if (aH || dT) {
                                            dm(ea, "TRIANGLES", ej, ef)
                                        }
                                    }
                                }
                            } else {
                                if (dR === 10) {
                                    if (el > 2) {
                                        for (eg = 0; eg + 2 < el; eg++) {
                                            ec = [];
                                            ea = [];
                                            em = [];
                                            ej = [];
                                            ef = [];
                                            for (ee = 0; ee < 3; ee++) {
                                                for (eb = 0; eb < 3; eb++) {
                                                    ec.push(bb[eg + ee][eb]);
                                                    ea.push(bb[eg + ee][eb])
                                                }
                                            }
                                            for (ee = 0; ee < 3; ee++) {
                                                for (eb = 3; eb < 5; eb++) {
                                                    ef.push(bb[eg + ee][eb])
                                                }
                                            }
                                            for (ee = 0; ee < 3; ee++) {
                                                for (eb = 5; eb < 9; eb++) {
                                                    em.push(bb[eg + ee][eb + 4]);
                                                    ej.push(bb[eg + ee][eb])
                                                }
                                            }
                                            if (aH || dT) {
                                                dm(ea, "TRIANGLE_STRIP", ej, ef)
                                            }
                                            if (ce) {
                                                bj(ec, "LINE_LOOP", em)
                                            }
                                        }
                                    }
                                } else {
                                    if (dR === 11) {
                                        if (el > 2) {
                                            for (eg = 0; eg < 3; eg++) {
                                                ei = bb[eg];
                                                for (ee = 0; ee < 3; ee++) {
                                                    ec.push(ei[ee])
                                                }
                                            }
                                            for (eg = 0; eg < 3; eg++) {
                                                ei = bb[eg];
                                                for (ee = 9; ee < 13; ee++) {
                                                    em.push(ei[ee])
                                                }
                                            }
                                            if (ce) {
                                                bj(ec, "LINE_LOOP", em)
                                            }
                                            for (eg = 2; eg + 1 < el; eg++) {
                                                ec = [];
                                                em = [];
                                                ec.push(bb[0][0]);
                                                ec.push(bb[0][1]);
                                                ec.push(bb[0][2]);
                                                em.push(bb[0][9]);
                                                em.push(bb[0][10]);
                                                em.push(bb[0][11]);
                                                em.push(bb[0][12]);
                                                for (ee = 0; ee < 2; ee++) {
                                                    for (eb = 0; eb < 3; eb++) {
                                                        ec.push(bb[eg + ee][eb])
                                                    }
                                                }
                                                for (ee = 0; ee < 2; ee++) {
                                                    for (eb = 9; eb < 13; eb++) {
                                                        em.push(bb[eg + ee][eb])
                                                    }
                                                }
                                                if (ce) {
                                                    bj(ec, "LINE_STRIP", em)
                                                }
                                            }
                                            if (aH || dT) {
                                                dm(ea, "TRIANGLE_FAN", ej, ef)
                                            }
                                        }
                                    } else {
                                        if (dR === 16) {
                                            for (eg = 0; eg + 3 < el; eg += 4) {
                                                ec = [];
                                                for (ee = 0; ee < 4; ee++) {
                                                    ei = bb[eg + ee];
                                                    for (eb = 0; eb < 3; eb++) {
                                                        ec.push(ei[eb])
                                                    }
                                                }
                                                if (ce) {
                                                    bj(ec, "LINE_LOOP", em)
                                                }
                                                if (aH) {
                                                    ea = [];
                                                    ej = [];
                                                    ef = [];
                                                    for (ee = 0; ee < 3; ee++) {
                                                        ea.push(bb[eg][ee])
                                                    }
                                                    for (ee = 5; ee < 9; ee++) {
                                                        ej.push(bb[eg][ee])
                                                    }
                                                    for (ee = 0; ee < 3; ee++) {
                                                        ea.push(bb[eg + 1][ee])
                                                    }
                                                    for (ee = 5; ee < 9; ee++) {
                                                        ej.push(bb[eg + 1][ee])
                                                    }
                                                    for (ee = 0; ee < 3; ee++) {
                                                        ea.push(bb[eg + 3][ee])
                                                    }
                                                    for (ee = 5; ee < 9; ee++) {
                                                        ej.push(bb[eg + 3][ee])
                                                    }
                                                    for (ee = 0; ee < 3; ee++) {
                                                        ea.push(bb[eg + 2][ee])
                                                    }
                                                    for (ee = 5; ee < 9; ee++) {
                                                        ej.push(bb[eg + 2][ee])
                                                    }
                                                    if (dT) {
                                                        ef.push(bb[eg + 0][3]);
                                                        ef.push(bb[eg + 0][4]);
                                                        ef.push(bb[eg + 1][3]);
                                                        ef.push(bb[eg + 1][4]);
                                                        ef.push(bb[eg + 3][3]);
                                                        ef.push(bb[eg + 3][4]);
                                                        ef.push(bb[eg + 2][3]);
                                                        ef.push(bb[eg + 2][4])
                                                    }
                                                    dm(ea, "TRIANGLE_STRIP", ej, ef)
                                                }
                                            }
                                        } else {
                                            if (dR === 17) {
                                                var ek = [];
                                                if (el > 3) {
                                                    for (eg = 0; eg < 2; eg++) {
                                                        ei = bb[eg];
                                                        for (ee = 0; ee < 3; ee++) {
                                                            ec.push(ei[ee])
                                                        }
                                                    }
                                                    for (eg = 0; eg < 2; eg++) {
                                                        ei = bb[eg];
                                                        for (ee = 9; ee < 13; ee++) {
                                                            em.push(ei[ee])
                                                        }
                                                    }
                                                    bj(ec, "LINE_STRIP", em);
                                                    if (el > 4 && el % 2 > 0) {
                                                        ek = ea.splice(ea.length - 3);
                                                        bb.pop()
                                                    }
                                                    for (eg = 0; eg + 3 < el; eg += 2) {
                                                        ec = [];
                                                        em = [];
                                                        for (ee = 0; ee < 3; ee++) {
                                                            ec.push(bb[eg + 1][ee])
                                                        }
                                                        for (ee = 0; ee < 3; ee++) {
                                                            ec.push(bb[eg + 3][ee])
                                                        }
                                                        for (ee = 0; ee < 3; ee++) {
                                                            ec.push(bb[eg + 2][ee])
                                                        }
                                                        for (ee = 0; ee < 3; ee++) {
                                                            ec.push(bb[eg + 0][ee])
                                                        }
                                                        for (ee = 9; ee < 13; ee++) {
                                                            em.push(bb[eg + 1][ee])
                                                        }
                                                        for (ee = 9; ee < 13; ee++) {
                                                            em.push(bb[eg + 3][ee])
                                                        }
                                                        for (ee = 9; ee < 13; ee++) {
                                                            em.push(bb[eg + 2][ee])
                                                        }
                                                        for (ee = 9; ee < 13; ee++) {
                                                            em.push(bb[eg + 0][ee])
                                                        }
                                                        if (ce) {
                                                            bj(ec, "LINE_STRIP", em)
                                                        }
                                                    }
                                                    if (aH || dT) {
                                                        dm(ea, "TRIANGLE_LIST", ej, ef)
                                                    }
                                                }
                                            } else {
                                                if (el === 1) {
                                                    for (ee = 0; ee < 3; ee++) {
                                                        ec.push(bb[0][ee])
                                                    }
                                                    for (ee = 9; ee < 13; ee++) {
                                                        em.push(bb[0][ee])
                                                    }
                                                    d1(ec, em)
                                                } else {
                                                    for (eg = 0; eg < el; eg++) {
                                                        ei = bb[eg];
                                                        for (ee = 0; ee < 3; ee++) {
                                                            ec.push(ei[ee])
                                                        }
                                                        for (ee = 5; ee < 9; ee++) {
                                                            em.push(ei[ee])
                                                        }
                                                    }
                                                    if (ce && ed) {
                                                        bj(ec, "LINE_LOOP", em)
                                                    } else {
                                                        if (ce && !ed) {
                                                            bj(ec, "LINE_STRIP", em)
                                                        }
                                                    }
                                                    if (aH || dT) {
                                                        dm(ea, "TRIANGLE_FAN", ej, ef)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dT = false;
                    d8.useProgram(dx);
                    dZ("usingTexture3d", dx, "uUsingTexture", dT)
                }
            }
            dP = false;
            aa = false;
            cb = [];
            c2 = 0
        };
        var aY = function (ed, ec) {
            var ee = 1 / ed;
            var eb = ee * ee;
            var ea = eb * ee;
            ec.set(0, 0, 0, 1, ea, eb, ee, 0, 6 * ea, 2 * eb, 0, 0, 6 * ea, 0, 0, 0)
        };
        var dr = function () {
            if (!aL) {
                c3 = new aP;
                aL = new aP;
                cM = true
            }
            var ea = aJ;
            c3.set((ea - 1) / 2, (ea + 3) / 2, (-3 - ea) / 2, (1 - ea) / 2, 1 - ea, (-5 - ea) / 2, ea + 2, (ea - 1) / 2, (ea - 1) / 2, 0, (1 - ea) / 2, 0, 0, 1, 0, 0);
            aY(Q, aL);
            if (!cd) {
                aQ = new aP
            }
            aQ.set(c3);
            aQ.preApply(cd);
            aL.apply(c3)
        };
        bR.prototype.bezierVertex = function () {
            aa = true;
            var ea = [];
            if (du) {
                throw "vertex() must be used at least once before calling bezierVertex()"
            }
            for (var eb = 0; eb < arguments.length; eb++) {
                ea[eb] = arguments[eb]
            }
            bb.push(ea);
            bb[bb.length - 1]["isVert"] = false
        };
        bB.prototype.bezierVertex = function () {
            aa = true;
            var eh = [];
            if (du) {
                throw "vertex() must be used at least once before calling bezierVertex()"
            }
            if (arguments.length === 9) {
                if (bz === t) {
                    bz = new aP
                }
                var em = bb.length - 1;
                aY(cy, bz);
                bz.apply(U);
                var eo = bz.array();
                var ed = bb[em][0],
                    en = bb[em][1],
                    eg = bb[em][2];
                var ej = eo[4] * ed + eo[5] * arguments[0] + eo[6] * arguments[3] + eo[7] * arguments[6];
                var ei = eo[8] * ed + eo[9] * arguments[0] + eo[10] * arguments[3] + eo[11] * arguments[6];
                var ef = eo[12] * ed + eo[13] * arguments[0] + eo[14] * arguments[3] + eo[15] * arguments[6];
                var ep = eo[4] * en + eo[5] * arguments[1] + eo[6] * arguments[4] + eo[7] * arguments[7];
                var el = eo[8] * en + eo[9] * arguments[1] + eo[10] * arguments[4] + eo[11] * arguments[7];
                var ek = eo[12] * en + eo[13] * arguments[1] + eo[14] * arguments[4] + eo[15] * arguments[7];
                var ec = eo[4] * eg + eo[5] * arguments[2] + eo[6] * arguments[5] + eo[7] * arguments[8];
                var eb = eo[8] * eg + eo[9] * arguments[2] + eo[10] * arguments[5] + eo[11] * arguments[8];
                var ea = eo[12] * eg + eo[13] * arguments[2] + eo[14] * arguments[5] + eo[15] * arguments[8];
                for (var ee = 0; ee < cy; ee++) {
                    ed += ej;
                    ej += ei;
                    ei += ef;
                    en += ep;
                    ep += el;
                    el += ek;
                    eg += ec;
                    ec += eb;
                    eb += ea;
                    cW.vertex(ed, en, eg)
                }
                cW.vertex(arguments[6], arguments[7], arguments[8])
            }
        };
        cW.texture = function (ed) {
            var eb = dY.$ensureContext();
            if (ed.__texture) {
                eb.bindTexture(eb.TEXTURE_2D, ed.__texture)
            } else {
                if (ed.localName === "canvas") {
                    eb.bindTexture(eb.TEXTURE_2D, c7);
                    eb.texImage2D(eb.TEXTURE_2D, 0, eb.RGBA, eb.RGBA, eb.UNSIGNED_BYTE, ed);
                    eb.texParameteri(eb.TEXTURE_2D, eb.TEXTURE_MAG_FILTER, eb.LINEAR);
                    eb.texParameteri(eb.TEXTURE_2D, eb.TEXTURE_MIN_FILTER, eb.LINEAR);
                    eb.generateMipmap(eb.TEXTURE_2D);
                    cs.width = ed.width;
                    cs.height = ed.height
                } else {
                    var ec = eb.createTexture(),
                        ef = d.createElement("canvas"),
                        ea = ef.getContext("2d"),
                        ee;
                    if (ed.width & ed.width - 1 === 0) {
                        ef.width = ed.width
                    } else {
                        ee = 1;
                        while (ee < ed.width) {
                            ee *= 2
                        }
                        ef.width = ee
                    }
                    if (ed.height & ed.height - 1 === 0) {
                        ef.height = ed.height
                    } else {
                        ee = 1;
                        while (ee < ed.height) {
                            ee *= 2
                        }
                        ef.height = ee
                    }
                    ea.drawImage(ed.sourceImg, 0, 0, ed.width, ed.height, 0, 0, ef.width, ef.height);
                    eb.bindTexture(eb.TEXTURE_2D, ec);
                    eb.texParameteri(eb.TEXTURE_2D, eb.TEXTURE_MIN_FILTER, eb.LINEAR_MIPMAP_LINEAR);
                    eb.texParameteri(eb.TEXTURE_2D, eb.TEXTURE_MAG_FILTER, eb.LINEAR);
                    eb.texParameteri(eb.TEXTURE_2D, eb.TEXTURE_WRAP_T, eb.CLAMP_TO_EDGE);
                    eb.texParameteri(eb.TEXTURE_2D, eb.TEXTURE_WRAP_S, eb.CLAMP_TO_EDGE);
                    eb.texImage2D(eb.TEXTURE_2D, 0, eb.RGBA, eb.RGBA, eb.UNSIGNED_BYTE, ef);
                    eb.generateMipmap(eb.TEXTURE_2D);
                    ed.__texture = ec;
                    cs.width = ed.width;
                    cs.height = ed.height
                }
            }
            dT = true;
            eb.useProgram(dx);
            dZ("usingTexture3d", dx, "uUsingTexture", dT)
        };
        cW.textureMode = function (ea) {
            d4 = ea
        };
        var ar = function (ev, eg, em, et, ef, el, er, ee, ek, ep, ed, ei) {
            var ew = et;
            var eh = ef;
            var en = el;
            var ej = aL.array();
            var eu = ej[4] * ev + ej[5] * et + ej[6] * er + ej[7] * ep;
            var es = ej[8] * ev + ej[9] * et + ej[10] * er + ej[11] * ep;
            var eq = ej[12] * ev + ej[13] * et + ej[14] * er + ej[15] * ep;
            var ez = ej[4] * eg + ej[5] * ef + ej[6] * ee + ej[7] * ed;
            var ey = ej[8] * eg + ej[9] * ef + ej[10] * ee + ej[11] * ed;
            var ex = ej[12] * eg + ej[13] * ef + ej[14] * ee + ej[15] * ed;
            var ec = ej[4] * em + ej[5] * el + ej[6] * ek + ej[7] * ei;
            var eb = ej[8] * em + ej[9] * el + ej[10] * ek + ej[11] * ei;
            var ea = ej[12] * em + ej[13] * el + ej[14] * ek + ej[15] * ei;
            cW.vertex(ew, eh, en);
            for (var eo = 0; eo < Q; eo++) {
                ew += eu;
                eu += es;
                es += eq;
                eh += ez;
                ez += ey;
                ey += ex;
                en += ec;
                ec += eb;
                eb += ea;
                cW.vertex(ew, eh, en)
            }
        };
        bR.prototype.curveVertex = function (ea, eb) {
            dP = true;
            cW.vertex(ea, eb)
        };
        bB.prototype.curveVertex = function (ea, ed, ec) {
            dP = true;
            if (!cM) {
                dr()
            }
            var eb = [];
            eb[0] = ea;
            eb[1] = ed;
            eb[2] = ec;
            cb.push(eb);
            c2++;
            if (c2 > 3) {
                ar(cb[c2 - 4][0], cb[c2 - 4][1], cb[c2 - 4][2], cb[c2 - 3][0], cb[c2 - 3][1], cb[c2 - 3][2], cb[c2 - 2][0], cb[c2 - 2][1], cb[c2 - 2][2], cb[c2 - 1][0], cb[c2 - 1][1], cb[c2 - 1][2])
            }
        };
        bR.prototype.curve = function (ef, eh, ed, eg, eb, ee, ea, ec) {
            cW.beginShape();
            cW.curveVertex(ef, eh);
            cW.curveVertex(ed, eg);
            cW.curveVertex(eb, ee);
            cW.curveVertex(ea, ec);
            cW.endShape()
        };
        bB.prototype.curve = function (ec, ek, eg, eb, ej, ef, ea, ei, ee, el, eh, ed) {
            if (ed !== t) {
                cW.beginShape();
                cW.curveVertex(ec, ek, eg);
                cW.curveVertex(eb, ej, ef);
                cW.curveVertex(ea, ei, ee);
                cW.curveVertex(el, eh, ed);
                cW.endShape();
                return
            }
            cW.beginShape();
            cW.curveVertex(ec, ek);
            cW.curveVertex(eg, eb);
            cW.curveVertex(ej, ef);
            cW.curveVertex(ea, ei);
            cW.endShape()
        };
        cW.curveTightness = function (ea) {
            aJ = ea
        };
        cW.curveDetail = function (ea) {
            Q = ea;
            dr()
        };
        cW.rectMode = function (ea) {
            bK = ea
        };
        cW.imageMode = function (ea) {
            switch (ea) {
                case 0:
                    bk = aZ;
                    break;
                case 1:
                    bk = b1;
                    break;
                case 3:
                    bk = aN;
                    break;
                default:
                    throw "Invalid imageMode"
            }
        };
        cW.ellipseMode = function (ea) {
            cN = ea
        };
        cW.arc = function (em, ek, ed, eo, ec, el) {
            if (ed <= 0 || el < ec) {
                return
            }
            if (cN === 1) {
                ed = ed - em;
                eo = eo - ek
            } else {
                if (cN === 2) {
                    em = em - ed;
                    ek = ek - eo;
                    ed = ed * 2;
                    eo = eo * 2
                } else {
                    if (cN === 3) {
                        em = em - ed / 2;
                        ek = ek - eo / 2
                    }
                }
            }
            while (ec < 0) {
                ec += 6.283185307179586;
                el += 6.283185307179586
            }
            if (el - ec > 6.283185307179586) {
                ec = 0;
                el = 6.283185307179586
            }
            var en = ed / 2,
                ep = eo / 2,
                eh = em + en,
                ef = ek + ep,
                eb = 0 | 0.5 + ec * cW.RAD_TO_DEG * 2,
                ej = 0 | 0.5 + el * cW.RAD_TO_DEG * 2,
                ei, eg;
            if (aH) {
                var ee = ce;
                ce = false;
                cW.beginShape();
                cW.vertex(eh, ef);
                for (ei = eb; ei <= ej; ei++) {
                    eg = ei % 720;
                    cW.vertex(eh + bl[eg] * en, ef + ah[eg] * ep)
                }
                cW.endShape(2);
                ce = ee
            }
            if (ce) {
                var ea = aH;
                aH = false;
                cW.beginShape();
                for (ei = eb; ei <= ej; ei++) {
                    eg = ei % 720;
                    cW.vertex(eh + bl[eg] * en, ef + ah[eg] * ep)
                }
                cW.endShape();
                aH = ea
            }
        };
        bR.prototype.line = function (eb, ei, ea, eg) {
            if (!ce) {
                return
            }
            eb = q.round(eb);
            ea = q.round(ea);
            ei = q.round(ei);
            eg = q.round(eg);
            if (eb === ea && ei === eg) {
                cW.point(eb, ei);
                return
            }
            var ec = t,
                ej = t,
                ef = true,
                eh = dJ.array(),
                ed = [1, 0, 0, 0, 1, 0];
            for (var ee = 0; ee < 6 && ef; ee++) {
                ef = eh[ee] === ed[ee]
            }
            if (ef) {
                if (eb === ea) {
                    if (ei > eg) {
                        ec = ei;
                        ei = eg;
                        eg = ec
                    }
                    eg++;
                    if (dW % 2 === 1) {
                        d8.translate(0.5, 0)
                    }
                } else {
                    if (ei === eg) {
                        if (eb > ea) {
                            ec = eb;
                            eb = ea;
                            ea = ec
                        }
                        ea++;
                        if (dW % 2 === 1) {
                            d8.translate(0, 0.5)
                        }
                    }
                }
                if (dW === 1) {
                    ej = d8.lineCap;
                    d8.lineCap = "butt"
                }
            }
            d8.beginPath();
            d8.moveTo(eb || 0, ei || 0);
            d8.lineTo(ea || 0, eg || 0);
            dd();
            if (ef) {
                if (eb === ea && dW % 2 === 1) {
                    d8.translate(-0.5, 0)
                } else {
                    if (ei === eg && dW % 2 === 1) {
                        d8.translate(0, -0.5)
                    }
                }
                if (dW === 1) {
                    d8.lineCap = ej
                }
            }
        };
        bB.prototype.line = function (ec, ef, eh, eb, ed, eg) {
            if (ed === t || eg === t) {
                eg = 0;
                ed = eb;
                eb = eh;
                eh = 0
            }
            if (ec === eb && ef === ed && eh === eg) {
                cW.point(ec, ef, eh);
                return
            }
            var ee = [ec, ef, eh, eb, ed, eg];
            var ea = new aP;
            ea.scale(1, -1, 1);
            ea.apply(dJ.array());
            ea.transpose();
            if (dW > 0 && ce) {
                d8.useProgram(dQ);
                a9("uModel2d", dQ, "uModel", false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                a9("uView2d", dQ, "uView", false, ea.array());
                d2("uColor2d", dQ, "uColor", c0);
                dZ("uIsDrawingText", dQ, "uIsDrawingText", false);
                dc("aVertex2d", dQ, "aVertex", 3, b8);
                cg("aTextureCoord2d", dQ, "aTextureCoord");
                d8.bufferData(d8.ARRAY_BUFFER, new e(ee), d8.STREAM_DRAW);
                d8.drawArrays(d8.LINES, 0, 2)
            }
        };
        bR.prototype.bezier = function () {
            if (arguments.length !== 8) {
                throw "You must use 8 parameters for bezier() in 2D mode"
            }
            cW.beginShape();
            cW.vertex(arguments[0], arguments[1]);
            cW.bezierVertex(arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
            cW.endShape()
        };
        bB.prototype.bezier = function () {
            if (arguments.length !== 12) {
                throw "You must use 12 parameters for bezier() in 3D mode"
            }
            cW.beginShape();
            cW.vertex(arguments[0], arguments[1], arguments[2]);
            cW.bezierVertex(arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
            cW.endShape()
        };
        cW.bezierDetail = function (ea) {
            cy = ea
        };
        cW.bezierPoint = function (eb, ea, ee, ed, ec) {
            return (1 - ec) * (1 - ec) * (1 - ec) * eb + 3 * (1 - ec) * (1 - ec) * ec * ea + 3 * (1 - ec) * ec * ec * ee + ec * ec * ec * ed
        };
        cW.bezierTangent = function (eb, ea, ee, ed, ec) {
            return 3 * ec * ec * (-eb + 3 * ea - 3 * ee + ed) + 6 * ec * (eb - 2 * ea + ee) + 3 * (-eb + ea)
        };
        cW.curvePoint = function (eb, ea, ee, ed, ec) {
            return 0.5 * (2 * ea + (-eb + ee) * ec + (2 * eb - 5 * ea + 4 * ee - ed) * ec * ec + (-eb + 3 * ea - 3 * ee + ed) * ec * ec * ec)
        };
        cW.curveTangent = function (eb, ea, ee, ed, ec) {
            return 0.5 * (-eb + ee + 2 * (2 * eb - 5 * ea + 4 * ee - ed) * ec + 3 * (-eb + 3 * ea - 3 * ee + ed) * ec * ec)
        };
        cW.triangle = function (ed, ef, eb, ee, ea, ec) {
            cW.beginShape(9);
            cW.vertex(ed, ef, 0);
            cW.vertex(eb, ee, 0);
            cW.vertex(ea, ec, 0);
            cW.endShape()
        };
        cW.quad = function (ef, eh, ed, eg, eb, ee, ea, ec) {
            cW.beginShape(16);
            cW.vertex(ef, eh, 0);
            cW.vertex(ed, eg, 0);
            cW.vertex(eb, ee, 0);
            cW.vertex(ea, ec, 0);
            cW.endShape()
        };
        var bN = function (eg, ef, ea, eh, ej, ee, ei, eb) {
            if (eb === t) {
                ee = ej;
                ei = ej;
                eb = ej
            }
            var ec = ea / 2,
                ed = eh / 2;
            if (ej > ec || ej > ed) {
                ej = q.min(ec, ed)
            }
            if (ee > ec || ee > ed) {
                ee = q.min(ec, ed)
            }
            if (ei > ec || ei > ed) {
                ei = q.min(ec, ed)
            }
            if (eb > ec || eb > ed) {
                eb = q.min(ec, ed)
            }
            if (!aH || ce) {
                d8.translate(0.5, 0.5)
            }
            d8.beginPath();
            d8.moveTo(eg + ej, ef);
            d8.lineTo(eg + ea - ee, ef);
            d8.quadraticCurveTo(eg + ea, ef, eg + ea, ef + ee);
            d8.lineTo(eg + ea, ef + eh - ei);
            d8.quadraticCurveTo(eg + ea, ef + eh, eg + ea - ei, ef + eh);
            d8.lineTo(eg + eb, ef + eh);
            d8.quadraticCurveTo(eg, ef + eh, eg, ef + eh - eb);
            d8.lineTo(eg, ef + ej);
            d8.quadraticCurveTo(eg, ef, eg + ej, ef);
            if (!aH || ce) {
                d8.translate(-0.5, -0.5)
            }
            bn();
            dd()
        };
        bR.prototype.rect = function (eb, eh, ee, ea, ec, ef, ed, eg) {
            if (!ee && !ea) {
                return
            }
            if (bK === 1) {
                ee -= eb;
                ea -= eh
            } else {
                if (bK === 2) {
                    ee *= 2;
                    ea *= 2;
                    eb -= ee / 2;
                    eh -= ea / 2
                } else {
                    if (bK === 3) {
                        eb -= ee / 2;
                        eh -= ea / 2
                    }
                }
            }
            eb = q.round(eb);
            eh = q.round(eh);
            ee = q.round(ee);
            ea = q.round(ea);
            if (ec !== t) {
                bN(eb, eh, ee, ea, ec, ef, ed, eg);
                return
            }
            if (ce && dW % 2 === 1) {
                d8.translate(0.5, 0.5)
            }
            d8.beginPath();
            d8.rect(eb, eh, ee, ea);
            bn();
            dd();
            if (ce && dW % 2 === 1) {
                d8.translate(-0.5, -0.5)
            }
        };
        bB.prototype.rect = function (ei, eh, ea, ek, em, ef, el, eb) {
            if (em !== t) {
                throw "rect() with rounded corners is not supported in 3D mode"
            }
            if (bK === 1) {
                ea -= ei;
                ek -= eh
            } else {
                if (bK === 2) {
                    ea *= 2;
                    ek *= 2;
                    ei -= ea / 2;
                    eh -= ek / 2
                } else {
                    if (bK === 3) {
                        ei -= ea / 2;
                        eh -= ek / 2
                    }
                }
            }
            var ee = new aP;
            ee.translate(ei, eh, 0);
            ee.scale(ea, ek, 1);
            ee.transpose();
            var eg = new aP;
            eg.scale(1, -1, 1);
            eg.apply(dJ.array());
            eg.transpose();
            if (dW > 0 && ce) {
                d8.useProgram(dQ);
                a9("uModel2d", dQ, "uModel", false, ee.array());
                a9("uView2d", dQ, "uView", false, eg.array());
                d2("uColor2d", dQ, "uColor", c0);
                dZ("uIsDrawingText2d", dQ, "uIsDrawingText", false);
                dc("aVertex2d", dQ, "aVertex", 3, aB);
                cg("aTextureCoord2d", dQ, "aTextureCoord");
                d8.drawArrays(d8.LINE_LOOP, 0, ak.length / 3)
            }
            if (aH) {
                d8.useProgram(dx);
                a9("uModel3d", dx, "uModel", false, ee.array());
                a9("uView3d", dx, "uView", false, eg.array());
                d8.enable(d8.POLYGON_OFFSET_FILL);
                d8.polygonOffset(1, 1);
                d2("color3d", dx, "uColor", bo);
                if (dL > 0) {
                    var ej = new aP;
                    ej.set(eg);
                    var ec = new aP;
                    ec.set(ee);
                    ej.mult(ec);
                    var ed = new aP;
                    ed.set(ej);
                    ed.invert();
                    ed.transpose();
                    a9("uNormalTransform3d", dx, "uNormalTransform", false, ed.array());
                    dc("aNormal3d", dx, "aNormal", 3, b2)
                } else {
                    cg("normal3d", dx, "aNormal")
                }
                dc("vertex3d", dx, "aVertex", 3, aB);
                d8.drawArrays(d8.TRIANGLE_FAN, 0, ak.length / 3);
                d8.disable(d8.POLYGON_OFFSET_FILL)
            }
        };
        bR.prototype.ellipse = function (eg, ef, eb, ei) {
            eg = eg || 0;
            ef = ef || 0;
            if (eb <= 0 && ei <= 0) {
                return
            }
            if (cN === 2) {
                eb *= 2;
                ei *= 2
            } else {
                if (cN === 1) {
                    eb = eb - eg;
                    ei = ei - ef;
                    eg += eb / 2;
                    ef += ei / 2
                } else {
                    if (cN === 0) {
                        eg += eb / 2;
                        ef += ei / 2
                    }
                }
            }
            if (eb === ei) {
                d8.beginPath();
                d8.arc(eg, ef, eb / 2, 0, 6.283185307179586, false);
                bn();
                dd()
            } else {
                var eh = eb / 2,
                    ee = ei / 2,
                    ea = 0.5522847498307933,
                    ed = ea * eh,
                    ec = ea * ee;
                cW.beginShape();
                cW.vertex(eg + eh, ef);
                cW.bezierVertex(eg + eh, ef - ec, eg + ed, ef - ee, eg, ef - ee);
                cW.bezierVertex(eg - ed, ef - ee, eg - eh, ef - ec, eg - eh, ef);
                cW.bezierVertex(eg - eh, ef + ec, eg - ed, ef + ee, eg, ef + ee);
                cW.bezierVertex(eg + ed, ef + ee, eg + eh, ef + ec, eg + eh, ef);
                cW.endShape()
            }
        };
        bB.prototype.ellipse = function (en, em, ec, ep) {
            en = en || 0;
            em = em || 0;
            if (ec <= 0 && ep <= 0) {
                return
            }
            if (cN === 2) {
                ec *= 2;
                ep *= 2
            } else {
                if (cN === 1) {
                    ec = ec - en;
                    ep = ep - em;
                    en += ec / 2;
                    em += ep / 2
                } else {
                    if (cN === 0) {
                        en += ec / 2;
                        em += ep / 2
                    }
                }
            }
            var eo = ec / 2,
                ej = ep / 2,
                ea = 0.5522847498307933,
                ee = ea * eo,
                ed = ea * ej;
            cW.beginShape();
            cW.vertex(en + eo, em);
            cW.bezierVertex(en + eo, em - ed, 0, en + ee, em - ej, 0, en, em - ej, 0);
            cW.bezierVertex(en - ee, em - ej, 0, en - eo, em - ed, 0, en - eo, em, 0);
            cW.bezierVertex(en - eo, em + ed, 0, en - ee, em + ej, 0, en, em + ej, 0);
            cW.bezierVertex(en + ee, em + ej, 0, en + eo, em + ed, 0, en + eo, em, 0);
            cW.endShape();
            if (aH) {
                var ef = 0,
                    ek = 0,
                    eh, eg;
                for (eh = 0; eh < bb.length; eh++) {
                    ef += bb[eh][0];
                    ek += bb[eh][1]
                }
                ef /= bb.length;
                ek /= bb.length;
                var ei = [],
                    eb = [],
                    el = [];
                ei[0] = ef;
                ei[1] = ek;
                ei[2] = 0;
                ei[3] = 0;
                ei[4] = 0;
                ei[5] = bo[0];
                ei[6] = bo[1];
                ei[7] = bo[2];
                ei[8] = bo[3];
                ei[9] = c0[0];
                ei[10] = c0[1];
                ei[11] = c0[2];
                ei[12] = c0[3];
                ei[13] = a8;
                ei[14] = a7;
                ei[15] = a6;
                bb.unshift(ei);
                for (eh = 0; eh < bb.length; eh++) {
                    for (eg = 0; eg < 3; eg++) {
                        eb.push(bb[eh][eg])
                    }
                    for (eg = 5; eg < 9; eg++) {
                        el.push(bb[eh][eg])
                    }
                }
                dm(eb, "TRIANGLE_FAN", el)
            }
        };
        cW.normal = function (ea, ec, eb) {
            if (arguments.length !== 3 || !(typeof ea === "number" && typeof ec === "number" && typeof eb === "number")) {
                throw "normal() requires three numeric arguments."
            }
            a8 = ea;
            a7 = ec;
            a6 = eb;
            if (dR !== 0) {
                if (a2 === 0) {
                    a2 = 1
                } else {
                    if (a2 === 1) {
                        a2 = 2
                    }
                }
            }
        };
        cW.save = function (eb, ea) {
            if (ea !== t) {
                return D.open(ea.toDataURL(), "_blank")
            }
            return D.open(cW.externals.canvas.toDataURL(), "_blank")
        };
        var cw = 0;
        cW.saveFrame = function (ea) {
            if (ea === t) {
                ea = "screen-####.png"
            }
            var eb = ea.replace(/#+/, function (ed) {
                var ec = "" + cw++;
                while (ec.length < ed.length) {
                    ec = "0" + ec
                }
                return ec
            });
            cW.save(eb)
        };
        var cc = d.createElement("canvas").getContext("2d");
        var X = [t, t, t];

        function by(eh, eb, eg) {
            var ed = X.shift();
            if (ed === t) {
                ed = {};
                ed.canvas = d.createElement("canvas");
                ed.context = ed.canvas.getContext("2d")
            }
            X.push(ed);
            var ec = ed.canvas,
                ee = ed.context,
                ef = eb || eh.width,
                ea = eg || eh.height;
            ec.width = ef;
            ec.height = ea;
            if (!eh) {
                ee.clearRect(0, 0, ef, ea)
            } else {
                if ("data" in eh) {
                    ee.putImageData(eh, 0, 0)
                } else {
                    ee.clearRect(0, 0, ef, ea);
                    ee.drawImage(eh, 0, 0, ef, ea)
                }
            }
            return ed
        }
        function b0(ea) {
            return {
                getLength: function (eb) {
                    return function () {
                        if (eb.isRemote) {
                            throw "Image is loaded remotely. Cannot get length."
                        } else {
                            return eb.imageData.data.length ? eb.imageData.data.length / 4 : 0
                        }
                    }
                }(ea),
                getPixel: function (eb) {
                    return function (ec) {
                        var ee = ec * 4,
                            ed = eb.imageData.data;
                        if (eb.isRemote) {
                            throw "Image is loaded remotely. Cannot get pixels."
                        }
                        return (ed[ee + 3] & 255) << 24 | (ed[ee] & 255) << 16 | (ed[ee + 1] & 255) << 8 | ed[ee + 2] & 255
                    }
                }(ea),
                setPixel: function (eb) {
                    return function (ec, ef) {
                        var ee = ec * 4,
                            ed = eb.imageData.data;
                        if (eb.isRemote) {
                            throw "Image is loaded remotely. Cannot set pixel."
                        }
                        ed[ee + 0] = (ef >> 16) & 255;
                        ed[ee + 1] = (ef >> 8) & 255;
                        ed[ee + 2] = ef & 255;
                        ed[ee + 3] = (ef >> 24) & 255;
                        eb.__isDirty = true
                    }
                }(ea),
                toArray: function (eb) {
                    return function () {
                        var ec = [],
                            ef = eb.imageData.data,
                            ee = eb.width * eb.height;
                        if (eb.isRemote) {
                            throw "Image is loaded remotely. Cannot get pixels."
                        }
                        for (var ed = 0, eg = 0; ed < ee; ed++, eg += 4) {
                            ec.push((ef[eg + 3] & 255) << 24 | (ef[eg] & 255) << 16 | (ef[eg + 1] & 255) << 8 | ef[eg + 2] & 255)
                        }
                        return ec
                    }
                }(ea),
                set: function (eb) {
                    return function (ec) {
                        var eg, ef, eh;
                        if (this.isRemote) {
                            throw "Image is loaded remotely. Cannot set pixels."
                        }
                        ef = eb.imageData.data;
                        for (var ed = 0, ee = ec.length; ed < ee; ed++) {
                            eh = ec[ed];
                            eg = ed * 4;
                            ef[eg + 0] = (eh >> 16) & 255;
                            ef[eg + 1] = (eh >> 8) & 255;
                            ef[eg + 2] = eh & 255;
                            ef[eg + 3] = (eh >> 24) & 255
                        }
                        eb.__isDirty = true
                    }
                }(ea)
            }
        }
        var cG = function (ed, eg, ee) {
            this.__isDirty = false;
            if (ed instanceof HTMLImageElement) {
                this.fromHTMLImageData(ed)
            } else {
                if (eg || ee) {
                    this.width = ed || 1;
                    this.height = eg || 1;
                    var eb = this.sourceImg = d.createElement("canvas");
                    eb.width = this.width;
                    eb.height = this.height;
                    var eh = this.imageData = eb.getContext("2d").createImageData(this.width, this.height);
                    this.format = ee === 2 || ee === 4 ? ee : 1;
                    if (this.format === 1) {
                        for (var ec = 3, ef = this.imageData.data, ea = ef.length; ec < ea; ec += 4) {
                            ef[ec] = 255
                        }
                    }
                    this.__isDirty = true;
                    this.updatePixels()
                } else {
                    this.width = 0;
                    this.height = 0;
                    this.imageData = cc.createImageData(1, 1);
                    this.format = 2
                }
            }
            this.pixels = b0(this)
        };
        cG.prototype = {
            __isPImage: true,
            updatePixels: function () {
                var ea = this.sourceImg;
                if (ea && ea instanceof HTMLCanvasElement && this.__isDirty) {
                    ea.getContext("2d").putImageData(this.imageData, 0, 0)
                }
                this.__isDirty = false
            },
            fromHTMLImageData: function (ea) {
                var eb = by(ea);
                try {
                    var ed = eb.context.getImageData(0, 0, ea.width, ea.height);
                    this.fromImageData(ed)
                } catch (ec) {
                    if (ea.width && ea.height) {
                        this.isRemote = true;
                        this.width = ea.width;
                        this.height = ea.height
                    }
                }
                this.sourceImg = ea
            },
            get: function (ea, ed, eb, ec) {
                if (!arguments.length) {
                    return cW.get(this)
                }
                if (arguments.length === 2) {
                    return cW.get(ea, ed, this)
                }
                if (arguments.length === 4) {
                    return cW.get(ea, ed, eb, ec, this)
                }
            },
            set: function (ea, ec, eb) {
                cW.set(ea, ec, eb, this);
                this.__isDirty = true
            },
            blend: function (ei, ee, ed, eb, eg, ej, eh, ef, ea, ec) {
                if (arguments.length === 9) {
                    cW.blend(this, ei, ee, ed, eb, eg, ej, eh, ef, ea, this)
                } else {
                    if (arguments.length === 10) {
                        cW.blend(ei, ee, ed, eb, eg, ej, eh, ef, ea, ec, this)
                    }
                }
                delete this.sourceImg
            },
            copy: function (eh, ee, ed, ec, eb, ei, eg, ef, ea) {
                if (arguments.length === 8) {
                    cW.blend(this, eh, ee, ed, ec, eb, ei, eg, ef, 0, this)
                } else {
                    if (arguments.length === 9) {
                        cW.blend(eh, ee, ed, ec, eb, ei, eg, ef, ea, 0, this)
                    }
                }
                delete this.sourceImg
            },
            filter: function (eb, ea) {
                if (arguments.length === 2) {
                    cW.filter(eb, ea, this)
                } else {
                    if (arguments.length === 1) {
                        cW.filter(eb, null, this)
                    }
                }
                delete this.sourceImg
            },
            save: function (ea) {
                cW.save(ea, this)
            },
            resize: function (ea, ec) {
                if (this.isRemote) {
                    throw "Image is loaded remotely. Cannot resize."
                }
                if (this.width !== 0 || this.height !== 0) {
                    if (ea === 0 && ec !== 0) {
                        ea = q.floor(this.width / this.height * ec)
                    } else {
                        if (ec === 0 && ea !== 0) {
                            ec = q.floor(this.height / this.width * ea)
                        }
                    }
                    var eb = by(this.imageData).canvas;
                    var ed = by(eb, ea, ec).context.getImageData(0, 0, ea, ec);
                    this.fromImageData(ed)
                }
            },
            mask: function (ea) {
                var ed = this.toImageData(),
                    ec, eb;
                if (ea instanceof cG || ea.__isPImage) {
                    if (ea.width === this.width && ea.height === this.height) {
                        ea = ea.toImageData();
                        for (ec = 2, eb = this.width * this.height * 4; ec < eb; ec += 4) {
                            ed.data[ec + 1] = ea.data[ec]
                        }
                    } else {
                        throw "mask must have the same dimensions as PImage."
                    }
                } else {
                    if (ea instanceof Array) {
                        if (this.width * this.height === ea.length) {
                            for (ec = 0, eb = ea.length; ec < eb; ++ec) {
                                ed.data[ec * 4 + 3] = ea[ec]
                            }
                        } else {
                            throw "mask array must be the same length as PImage pixels array."
                        }
                    }
                }
                this.fromImageData(ed)
            },
            loadPixels: G,
            toImageData: function () {
                if (this.isRemote) {
                    return this.sourceImg
                }
                if (!this.__isDirty) {
                    return this.imageData
                }
                var ea = by(this.sourceImg);
                return ea.context.getImageData(0, 0, this.width, this.height)
            },
            toDataURL: function () {
                if (this.isRemote) {
                    throw "Image is loaded remotely. Cannot create dataURI."
                }
                var ea = by(this.imageData);
                return ea.canvas.toDataURL()
            },
            fromImageData: function (ee) {
                var eb = ee.width,
                    ed = ee.height,
                    ec = d.createElement("canvas"),
                    ea = ec.getContext("2d");
                this.width = ec.width = eb;
                this.height = ec.height = ed;
                ea.putImageData(ee, 0, 0);
                this.format = 2;
                this.imageData = ee;
                this.sourceImg = ec
            }
        };
        cW.PImage = cG;
        cW.createImage = function (ea, eb, ec) {
            return new cG(ea, eb, ec)
        };
        cW.loadImage = function (eb, ec, ee) {
            if (ec) {
                eb = eb + "." + ec
            }
            var ed;
            if (cQ.imageCache.images[eb]) {
                ed = new cG(cQ.imageCache.images[eb]);
                ed.loaded = true;
                return ed
            }
            ed = new cG;
            var ea = d.createElement("img");
            ed.sourceImg = ea;
            ea.onload = function (ei, eg, ef) {
                var ej = ei;
                var eh = eg;
                var ek = ef;
                return function () {
                    eh.fromHTMLImageData(ej);
                    eh.loaded = true;
                    if (ek) {
                        ek()
                    }
                }
            }(ea, ed, ee);
            ea.src = eb;
            return ed
        };
        cW.requestImage = cW.loadImage;

        function c9(ea, ed) {
            var eb;
            if (ea >= cW.width || ea < 0 || ed < 0 || ed >= cW.height) {
                return 0
            }
            if (dV) {
                var ec = ((0 | ea) + cW.width * (0 | ed)) * 4;
                eb = cW.imageData.data;
                return (eb[ec + 3] & 255) << 24 | (eb[ec] & 255) << 16 | (eb[ec + 1] & 255) << 8 | eb[ec + 2] & 255
            }
            eb = cW.toImageData(0 | ea, 0 | ed, 1, 1).data;
            return (eb[3] & 255) << 24 | (eb[0] & 255) << 16 | (eb[1] & 255) << 8 | eb[2] & 255
        }
        function c8(ea, ee, eb) {
            if (eb.isRemote) {
                throw "Image is loaded remotely. Cannot get x,y."
            }
            var ed = ee * eb.width * 4 + ea * 4,
                ec = eb.imageData.data;
            return (ec[ed + 3] & 255) << 24 | (ec[ed] & 255) << 16 | (ec[ed + 1] & 255) << 8 | ec[ed + 2] & 255
        }
        function c6(ea, ee, eb, ec) {
            var ed = new cG(eb, ec, 2);
            ed.fromImageData(cW.toImageData(ea, ee, eb, ec));
            return ed
        }
        function c5(ef, ee, eg, el, er) {
            if (er.isRemote) {
                throw "Image is loaded remotely. Cannot get x,y,w,h."
            }
            var ep = new cG(eg, el, 2),
                ec = ep.imageData.data,
                ed = er.width,
                em = er.height,
                eo = er.imageData.data;
            var ea = q.max(0, -ee),
                eb = q.max(0, -ef),
                eh = q.min(el, em - ee),
                ei = q.min(eg, ed - ef);
            for (var ek = ea; ek < eh; ++ek) {
                var en = ((ee + ek) * ed + (ef + eb)) * 4;
                var eq = (ek * eg + eb) * 4;
                for (var ej = eb; ej < ei; ++ej) {
                    ec[eq++] = eo[en++];
                    ec[eq++] = eo[en++];
                    ec[eq++] = eo[en++];
                    ec[eq++] = eo[en++]
                }
            }
            ep.__isDirty = true;
            return ep
        }
        cW.get = function (ea, ee, eb, ed, ec) {
            if (ec !== undefined) {
                return c5(ea, ee, eb, ed, ec)
            }
            if (ed !== undefined) {
                return c6(ea, ee, eb, ed)
            }
            if (eb !== undefined) {
                return c8(ea, ee, eb)
            }
            if (ee !== undefined) {
                return c9(ea, ee)
            }
            if (ea !== undefined) {
                return c5(0, 0, ea.width, ea.height, ea)
            }
            return c6(0, 0, cW.width, cW.height)
        };
        cW.createGraphics = function (ea, ec, eb) {
            var ed = new F;
            ed.size(ea, ec, eb);
            ed.background(0, 0);
            return ed
        };

        function T() {
            if (dV) {
                d8 = aj;
                dV = false;
                cW.updatePixels()
            }
        }
        function cq() {
            function eb(ef, ed) {
                function ee() {
                    T();
                    d8[ed].apply(d8, arguments)
                }
                ef[ed] = ee
            }
            function ea(eg, ee) {
                function ed() {
                    T();
                    return d8[ee]
                }
                function ef(eh) {
                    T();
                    d8[ee] = eh
                }
                cW.defineProperty(eg, ee, {
                    get: ed,
                    set: ef
                })
            }
            for (var ec in d8) {
                if (typeof d8[ec] === "function") {
                    eb(this, ec)
                } else {
                    ea(this, ec)
                }
            }
        }
        function cC() {
            if (dV) {
                return
            }
            cW.loadPixels();
            if (cn === null) {
                aj = d8;
                cn = new cq
            }
            dV = true;
            d8 = cn;
            d3 = 0
        }
        function bx(ea, ec, eb) {
            if (ea < cW.width && ea >= 0 && ec >= 0 && ec < cW.height) {
                cC();
                cW.pixels.setPixel((0 | ea) + cW.width * (0 | ec), eb);
                if (++d3 > bZ) {
                    T()
                }
            }
        }
        function bv(ea, eg, ed, eb) {
            if (eb.isRemote) {
                throw "Image is loaded remotely. Cannot set x,y."
            }
            var ef = cW.color.toArray(ed);
            var ee = eg * eb.width * 4 + ea * 4;
            var ec = eb.imageData.data;
            ec[ee] = ef[0];
            ec[ee + 1] = ef[1];
            ec[ee + 2] = ef[2];
            ec[ee + 3] = ef[3]
        }
        cW.set = function (ea, ef, ed, ec) {
            var eb, ee;
            if (arguments.length === 3) {
                if (typeof ed === "number") {
                    bx(ea, ef, ed)
                } else {
                    if (ed instanceof cG || ed.__isPImage) {
                        cW.image(ed, ea, ef)
                    }
                }
            } else {
                if (arguments.length === 4) {
                    bv(ea, ef, ed, ec)
                }
            }
        };
        cW.imageData = {};
        cW.pixels = {
            getLength: function () {
                return cW.imageData.data.length ? cW.imageData.data.length / 4 : 0
            },
            getPixel: function (ea) {
                var ec = ea * 4,
                    eb = cW.imageData.data;
                return eb[ec + 3] << 24 & 4278190080 | eb[ec + 0] << 16 & 16711680 | eb[ec + 1] << 8 & 65280 | eb[ec + 2] & 255
            },
            setPixel: function (ea, ed) {
                var ec = ea * 4,
                    eb = cW.imageData.data;
                eb[ec + 0] = (ed & 16711680) >>> 16;
                eb[ec + 1] = (ed & 65280) >>> 8;
                eb[ec + 2] = ed & 255;
                eb[ec + 3] = (ed & 4278190080) >>> 24
            },
            toArray: function () {
                var ea = [],
                    ec = cW.imageData.width * cW.imageData.height,
                    ed = cW.imageData.data;
                for (var eb = 0, ee = 0; eb < ec; eb++, ee += 4) {
                    ea.push(ed[ee + 3] << 24 & 4278190080 | ed[ee + 0] << 16 & 16711680 | ed[ee + 1] << 8 & 65280 | ed[ee + 2] & 255)
                }
                return ea
            },
            set: function (ea) {
                for (var eb = 0, ec = ea.length; eb < ec; eb++) {
                    this.setPixel(eb, ea[eb])
                }
            }
        };
        cW.loadPixels = function () {
            cW.imageData = dY.$ensureContext().getImageData(0, 0, cW.width, cW.height)
        };
        cW.updatePixels = function () {
            if (cW.imageData) {
                dY.$ensureContext().putImageData(cW.imageData, 0, 0)
            }
        };
        cW.hint = function (eb) {
            var ea = dY.$ensureContext();
            if (eb === 4) {
                ea.disable(ea.DEPTH_TEST);
                ea.depthMask(false);
                ea.clear(ea.DEPTH_BUFFER_BIT)
            } else {
                if (eb === -4) {
                    ea.enable(ea.DEPTH_TEST);
                    ea.depthMask(true)
                } else {
                    if (eb === -1 || eb === 2) {
                        dO = true
                    } else {
                        if (eb === 1) {
                            dO = false
                        }
                    }
                }
            }
        };
        var bE = function (ed, ec, eb, ea) {
            var ee;
            if (ed instanceof cG || ed.__isPImage) {
                ee = ed;
                if (!ee.loaded) {
                    throw "Error using image in background(): PImage not loaded."
                }
                if (ee.width !== cW.width || ee.height !== cW.height) {
                    throw "Background image must be the same dimensions as the canvas."
                }
            } else {
                ee = cW.color(ed, ec, eb, ea)
            }
            a4 = ee
        };
        bR.prototype.background = function (ed, ec, eb, ea) {
            if (ed !== t) {
                bE(ed, ec, eb, ea)
            }
            if (a4 instanceof cG || a4.__isPImage) {
                aD();
                d8.setTransform(1, 0, 0, 1, 0, 0);
                cW.image(a4, 0, 0);
                cP()
            } else {
                aD();
                d8.setTransform(1, 0, 0, 1, 0, 0);
                if (cW.alpha(a4) !== bU) {
                    d8.clearRect(0, 0, cW.width, cW.height)
                }
                d8.fillStyle = cW.color.toString(a4);
                d8.fillRect(0, 0, cW.width, cW.height);
                aq = true;
                cP()
            }
        };
        bB.prototype.background = function (ed, ec, eb, ea) {
            if (arguments.length > 0) {
                bE(ed, ec, eb, ea)
            }
            var ee = cW.color.toGLArray(a4);
            d8.clearColor(ee[0], ee[1], ee[2], ee[3]);
            d8.clear(d8.COLOR_BUFFER_BIT | d8.DEPTH_BUFFER_BIT)
        };
        bR.prototype.image = function (ed, ei, eg, ej, ee) {
            ei = q.round(ei);
            eg = q.round(eg);
            if (ed.width > 0) {
                var ek = ej || ed.width;
                var eh = ee || ed.height;
                var ea = bk(ei || 0, eg || 0, ej || ed.width, ee || ed.height, arguments.length < 4);
                var ef = !! ed.sourceImg && bf === null;
                if (ef) {
                    var eb = ed.sourceImg;
                    if (ed.__isDirty) {
                        ed.updatePixels()
                    }
                    d8.drawImage(eb, 0, 0, eb.width, eb.height, ea.x, ea.y, ea.w, ea.h)
                } else {
                    var ec = ed.toImageData();
                    if (bf !== null) {
                        bf(ec);
                        ed.__isDirty = true
                    }
                    d8.drawImage(by(ec).canvas, 0, 0, ed.width, ed.height, ea.x, ea.y, ea.w, ea.h)
                }
            }
        };
        bB.prototype.image = function (ec, ea, ee, eb, ed) {
            if (ec.width > 0) {
                ea = q.round(ea);
                ee = q.round(ee);
                eb = eb || ec.width;
                ed = ed || ec.height;
                cW.beginShape(cW.QUADS);
                cW.texture(ec);
                cW.vertex(ea, ee, 0, 0, 0);
                cW.vertex(ea, ee + ed, 0, 0, ed);
                cW.vertex(ea + eb, ee + ed, 0, eb, ed);
                cW.vertex(ea + eb, ee, 0, eb, 0);
                cW.endShape()
            }
        };
        cW.tint = function (ed, ec, ea, ei) {
            var ef = cW.color(ed, ec, ea, ei);
            var eb = cW.red(ef) / bJ;
            var ee = cW.green(ef) / bI;
            var eg = cW.blue(ef) / bG;
            var eh = cW.alpha(ef) / bU;
            bf = function (em) {
                var el = em.data,
                    ek = 4 * em.width * em.height;
                for (var ej = 0; ej < ek;) {
                    el[ej++] *= eb;
                    el[ej++] *= ee;
                    el[ej++] *= eg;
                    el[ej++] *= eh
                }
            };
            bw = function (ek) {
                for (var ej = 0; ej < ek.length;) {
                    ek[ej++] = eb;
                    ek[ej++] = ee;
                    ek[ej++] = eg;
                    ek[ej++] = eh
                }
            }
        };
        cW.noTint = function () {
            bf = null;
            bw = null
        };
        cW.copy = function (ea, ef, ee, eg, ec, ei, eh, eb, ed) {
            if (ed === t) {
                ed = eb;
                eb = eh;
                eh = ei;
                ei = ec;
                ec = eg;
                eg = ee;
                ee = ef;
                ef = ea;
                ea = cW
            }
            cW.blend(ea, ef, ee, eg, ec, ei, eh, eb, ed, 0)
        };
        cW.blend = function (ea, ek, ej, en, ef, ep, eo, eb, eh, eg, ed) {
            if (ea.isRemote) {
                throw "Image is loaded remotely. Cannot blend image."
            }
            if (eg === t) {
                eg = eh;
                eh = eb;
                eb = eo;
                eo = ep;
                ep = ef;
                ef = en;
                en = ej;
                ej = ek;
                ek = ea;
                ea = cW
            }
            var ec = ek + en,
                ei = ej + ef,
                em = ep + eb,
                ee = eo + eh,
                el = ed || cW;
            if (ed === t || eg === t) {
                cW.loadPixels()
            }
            ea.loadPixels();
            if (ea === cW && cW.intersect(ek, ej, ec, ei, ep, eo, em, ee)) {
                cW.blit_resize(cW.get(ek, ej, ec - ek, ei - ej), 0, 0, ec - ek - 1, ei - ej - 1, el.imageData.data, el.width, el.height, ep, eo, em, ee, eg)
            } else {
                cW.blit_resize(ea, ek, ej, ec, ei, el.imageData.data, el.width, el.height, ep, eo, em, ee, eg)
            }
            if (ed === t) {
                cW.updatePixels()
            }
        };
        var bp = function (ee) {
            var ea = cW.floor(ee * 3.5),
                ec, eb;
            ea = ea < 1 ? 1 : ea < 248 ? ea : 248;
            if (cW.shared.blurRadius !== ea) {
                cW.shared.blurRadius = ea;
                cW.shared.blurKernelSize = 1 + (cW.shared.blurRadius << 1);
                cW.shared.blurKernel = new e(cW.shared.blurKernelSize);
                var eg = cW.shared.blurKernel;
                var ef = cW.shared.blurKernelSize;
                var ed = cW.shared.blurRadius;
                for (ec = 0; ec < ef; ec++) {
                    eg[ec] = 0
                }
                var eh = (ea - 1) * (ea - 1);
                for (ec = 1; ec < ea; ec++) {
                    eg[ea + ec] = eg[eb] = eh
                }
                eg[ea] = ea * ea
            }
        };
        var b7 = function (eo, et) {
            var ec, ef, el, eq, er, eA, es;
            var ev, en, ez, ey, ep;
            var ei = et.pixels.getLength();
            var eu = new e(ei);
            var eD = new e(ei);
            var eh = new e(ei);
            var eC = new e(ei);
            var eB = 0;
            var ek, ej, ex, ee;
            bp(eo);
            var eb = et.height;
            var ea = et.width;
            var ew = cW.shared.blurKernelSize;
            var em = cW.shared.blurRadius;
            var eg = cW.shared.blurKernel;
            var ed = et.imageData.data;
            for (ej = 0; ej < eb; ej++) {
                for (ek = 0; ek < ea; ek++) {
                    eq = el = ef = er = ec = 0;
                    ev = ek - em;
                    if (ev < 0) {
                        ep = -ev;
                        ev = 0
                    } else {
                        if (ev >= ea) {
                            break
                        }
                        ep = 0
                    }
                    for (ex = ep; ex < ew; ex++) {
                        if (ev >= ea) {
                            break
                        }
                        ee = (ev + eB) * 4;
                        es = eg[ex];
                        er += es * ed[ee + 3];
                        ef += es * ed[ee];
                        el += es * ed[ee + 1];
                        eq += es * ed[ee + 2];
                        ec += es;
                        ev++
                    }
                    en = eB + ek;
                    eC[en] = er / ec;
                    eu[en] = ef / ec;
                    eD[en] = el / ec;
                    eh[en] = eq / ec
                }
                eB += ea
            }
            eB = 0;
            ez = -em;
            ey = ez * ea;
            for (ej = 0; ej < eb; ej++) {
                for (ek = 0; ek < ea; ek++) {
                    eq = el = ef = er = ec = 0;
                    if (ez < 0) {
                        ep = en = -ez;
                        ev = ek
                    } else {
                        if (ez >= eb) {
                            break
                        }
                        ep = 0;
                        en = ez;
                        ev = ek + ey
                    }
                    for (ex = ep; ex < ew; ex++) {
                        if (en >= eb) {
                            break
                        }
                        es = eg[ex];
                        er += es * eC[ev];
                        ef += es * eu[ev];
                        el += es * eD[ev];
                        eq += es * eh[ev];
                        ec += es;
                        en++;
                        ev += ea
                    }
                    ee = (ek + eB) * 4;
                    ed[ee] = ef / ec;
                    ed[ee + 1] = el / ec;
                    ed[ee + 2] = eq / ec;
                    ed[ee + 3] = er / ec
                }
                eB += ea;
                ey += ea;
                ez++
            }
        };
        var cf = function (er, el) {
            var eh = 0;
            var ev = el.pixels.getLength();
            var em = new K(ev);
            var ep, eb, ek, ej, ed;
            var eq, ee, eg, ei, ec, en, eu, ea, es, ef, et, eo;
            if (!er) {
                while (eh < ev) {
                    ep = eh;
                    eb = eh + el.width;
                    while (eh < eb) {
                        ek = ej = el.pixels.getPixel(eh);
                        ee = eh - 1;
                        eq = eh + 1;
                        eg = eh - el.width;
                        ei = eh + el.width;
                        if (ee < ep) {
                            ee = eh
                        }
                        if (eq >= eb) {
                            eq = eh
                        }
                        if (eg < 0) {
                            eg = 0
                        }
                        if (ei >= ev) {
                            ei = eh
                        }
                        eu = el.pixels.getPixel(eg);
                        en = el.pixels.getPixel(ee);
                        ea = el.pixels.getPixel(ei);
                        ec = el.pixels.getPixel(eq);
                        ed = 77 * (ek >> 16 & 255) + 151 * (ek >> 8 & 255) + 28 * (ek & 255);
                        ef = 77 * (en >> 16 & 255) + 151 * (en >> 8 & 255) + 28 * (en & 255);
                        es = 77 * (ec >> 16 & 255) + 151 * (ec >> 8 & 255) + 28 * (ec & 255);
                        et = 77 * (eu >> 16 & 255) + 151 * (eu >> 8 & 255) + 28 * (eu & 255);
                        eo = 77 * (ea >> 16 & 255) + 151 * (ea >> 8 & 255) + 28 * (ea & 255);
                        if (ef > ed) {
                            ej = en;
                            ed = ef
                        }
                        if (es > ed) {
                            ej = ec;
                            ed = es
                        }
                        if (et > ed) {
                            ej = eu;
                            ed = et
                        }
                        if (eo > ed) {
                            ej = ea;
                            ed = eo
                        }
                        em[eh++] = ej
                    }
                }
            } else {
                while (eh < ev) {
                    ep = eh;
                    eb = eh + el.width;
                    while (eh < eb) {
                        ek = ej = el.pixels.getPixel(eh);
                        ee = eh - 1;
                        eq = eh + 1;
                        eg = eh - el.width;
                        ei = eh + el.width;
                        if (ee < ep) {
                            ee = eh
                        }
                        if (eq >= eb) {
                            eq = eh
                        }
                        if (eg < 0) {
                            eg = 0
                        }
                        if (ei >= ev) {
                            ei = eh
                        }
                        eu = el.pixels.getPixel(eg);
                        en = el.pixels.getPixel(ee);
                        ea = el.pixels.getPixel(ei);
                        ec = el.pixels.getPixel(eq);
                        ed = 77 * (ek >> 16 & 255) + 151 * (ek >> 8 & 255) + 28 * (ek & 255);
                        ef = 77 * (en >> 16 & 255) + 151 * (en >> 8 & 255) + 28 * (en & 255);
                        es = 77 * (ec >> 16 & 255) + 151 * (ec >> 8 & 255) + 28 * (ec & 255);
                        et = 77 * (eu >> 16 & 255) + 151 * (eu >> 8 & 255) + 28 * (eu & 255);
                        eo = 77 * (ea >> 16 & 255) + 151 * (ea >> 8 & 255) + 28 * (ea & 255);
                        if (ef < ed) {
                            ej = en;
                            ed = ef
                        }
                        if (es < ed) {
                            ej = ec;
                            ed = es
                        }
                        if (et < ed) {
                            ej = eu;
                            ed = et
                        }
                        if (eo < ed) {
                            ej = ea;
                            ed = eo
                        }
                        em[eh++] = ej
                    }
                }
            }
            el.pixels.set(em)
        };
        cW.filter = function (eh, eg, ed) {
            var ek, ef, eb, ej;
            if (arguments.length === 3) {
                ed.loadPixels();
                ek = ed
            } else {
                cW.loadPixels();
                ek = cW
            }
            if (eg === t) {
                eg = null
            }
            if (ek.isRemote) {
                throw "Image is loaded remotely. Cannot filter image."
            }
            var el = ek.pixels.getLength();
            switch (eh) {
                case 11:
                    var em = eg || 1;
                    b7(em, ek);
                    break;
                case 12:
                    if (ek.format === 4) {
                        for (ej = 0; ej < el; ej++) {
                            ef = 255 - ek.pixels.getPixel(ej);
                            ek.pixels.setPixel(ej, 4278190080 | ef << 16 | ef << 8 | ef)
                        }
                        ek.format = 1
                    } else {
                        for (ej = 0; ej < el; ej++) {
                            ef = ek.pixels.getPixel(ej);
                            eb = 77 * (ef >> 16 & 255) + 151 * (ef >> 8 & 255) + 28 * (ef & 255) >> 8;
                            ek.pixels.setPixel(ej, ef & 4278190080 | eb << 16 | eb << 8 | eb)
                        }
                    }
                    break;
                case 13:
                    for (ej = 0; ej < el; ej++) {
                        ek.pixels.setPixel(ej, ek.pixels.getPixel(ej) ^ 16777215)
                    }
                    break;
                case 15:
                    if (eg === null) {
                        throw "Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"
                    }
                    var ep = cW.floor(eg);
                    if (ep < 2 || ep > 255) {
                        throw "Levels must be between 2 and 255 for filter(POSTERIZE, levels)"
                    }
                    var ei = ep - 1;
                    for (ej = 0; ej < el; ej++) {
                        var ea = ek.pixels.getPixel(ej) >> 16 & 255;
                        var en = ek.pixels.getPixel(ej) >> 8 & 255;
                        var ec = ek.pixels.getPixel(ej) & 255;
                        ea = (ea * ep >> 8) * 255 / ei;
                        en = (en * ep >> 8) * 255 / ei;
                        ec = (ec * ep >> 8) * 255 / ei;
                        ek.pixels.setPixel(ej, 4278190080 & ek.pixels.getPixel(ej) | ea << 16 | en << 8 | ec)
                    }
                    break;
                case 14:
                    for (ej = 0; ej < el; ej++) {
                        ek.pixels.setPixel(ej, ek.pixels.getPixel(ej) | 4278190080)
                    }
                    ek.format = 1;
                    break;
                case 16:
                    if (eg === null) {
                        eg = 0.5
                    }
                    if (eg < 0 || eg > 1) {
                        throw "Level must be between 0 and 1 for filter(THRESHOLD, level)"
                    }
                    var ee = cW.floor(eg * 255);
                    for (ej = 0; ej < el; ej++) {
                        var eo = cW.max((ek.pixels.getPixel(ej) & 16711680) >> 16, cW.max((ek.pixels.getPixel(ej) & 65280) >> 8, ek.pixels.getPixel(ej) & 255));
                        ek.pixels.setPixel(ej, ek.pixels.getPixel(ej) & 4278190080 | (eo < ee ? 0 : 16777215))
                    }
                    break;
                case 17:
                    cf(true, ek);
                    break;
                case 18:
                    cf(false, ek);
                    break
            }
            ek.updatePixels()
        };
        cW.shared = {
            fracU: 0,
            ifU: 0,
            fracV: 0,
            ifV: 0,
            u1: 0,
            u2: 0,
            v1: 0,
            v2: 0,
            sX: 0,
            sY: 0,
            iw: 0,
            iw1: 0,
            ih1: 0,
            ul: 0,
            ll: 0,
            ur: 0,
            lr: 0,
            cUL: 0,
            cLL: 0,
            cUR: 0,
            cLR: 0,
            srcXOffset: 0,
            srcYOffset: 0,
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            srcBuffer: null,
            blurRadius: 0,
            blurKernelSize: 0,
            blurKernel: null
        };
        cW.intersect = function (ec, ej, eb, ei, en, eg, em, ef) {
            var el = eb - ec + 1;
            var ee = ei - ej + 1;
            var ea = em - en + 1;
            var eh = ef - eg + 1;
            if (en < ec) {
                ea += en - ec;
                if (ea > el) {
                    ea = el
                }
            } else {
                var ek = el + ec - en;
                if (ea > ek) {
                    ea = ek
                }
            }
            if (eg < ej) {
                eh += eg - ej;
                if (eh > ee) {
                    eh = ee
                }
            } else {
                var ed = ee + ej - eg;
                if (eh > ed) {
                    eh = ed
                }
            }
            return !(ea <= 0 || eh <= 0)
        };
        var dS = {};
        dS[1] = cW.modes.blend;
        dS[2] = cW.modes.add;
        dS[4] = cW.modes.subtract;
        dS[8] = cW.modes.lightest;
        dS[16] = cW.modes.darkest;
        dS[0] = cW.modes.replace;
        dS[32] = cW.modes.difference;
        dS[64] = cW.modes.exclusion;
        dS[128] = cW.modes.multiply;
        dS[256] = cW.modes.screen;
        dS[512] = cW.modes.overlay;
        dS[1024] = cW.modes.hard_light;
        dS[2048] = cW.modes.soft_light;
        dS[4096] = cW.modes.dodge;
        dS[8192] = cW.modes.burn;
        cW.blit_resize = function (en, ez, et, ey, es, eE, ej, er, ex, eo, ew, em, ep) {
            var eC, eB;
            if (ez < 0) {
                ez = 0
            }
            if (et < 0) {
                et = 0
            }
            if (ey >= en.width) {
                ey = en.width - 1
            }
            if (es >= en.height) {
                es = en.height - 1
            }
            var eI = ey - ez;
            var eN = es - et;
            var ea = ew - ex;
            var ek = em - eo;
            if (ea <= 0 || ek <= 0 || eI <= 0 || eN <= 0 || ex >= ej || eo >= er || ez >= en.width || et >= en.height) {
                return
            }
            var eh = q.floor(eI / ea * 32768);
            var ee = q.floor(eN / ek * 32768);
            var eG = cW.shared;
            eG.srcXOffset = q.floor(ex < 0 ? -ex * eh : ez * 32768);
            eG.srcYOffset = q.floor(eo < 0 ? -eo * ee : et * 32768);
            if (ex < 0) {
                ea += ex;
                ex = 0
            }
            if (eo < 0) {
                ek += eo;
                eo = 0
            }
            ea = q.min(ea, ej - ex);
            ek = q.min(ek, er - eo);
            var eu = eo * ej + ex;
            var eQ;
            eG.srcBuffer = en.imageData.data;
            eG.iw = en.width;
            eG.iw1 = en.width - 1;
            eG.ih1 = en.height - 1;
            var ev = cW.filter_bilinear,
                eK = cW.filter_new_scanline,
                ei = dS[ep],
                eH, eM, eF, eJ, ec, ed, eb = 4278190080,
                eL = 16711680,
                eA = 65280,
                eg = 255,
                eP = 32767,
                eD = 15,
                el = 1,
                eq = 9,
                ef = eG.srcBuffer,
                eO = q.min;
            for (eB = 0; eB < ek; eB++) {
                eG.sX = eG.srcXOffset;
                eG.fracV = eG.srcYOffset & eP;
                eG.ifV = eP - eG.fracV;
                eG.v1 = (eG.srcYOffset >> eD) * eG.iw;
                eG.v2 = eO((eG.srcYOffset >> eD) + 1, eG.ih1) * eG.iw;
                for (eC = 0; eC < ea; eC++) {
                    eM = (eu + eC) * 4;
                    eQ = eE[eM + 3] << 24 & eb | eE[eM] << 16 & eL | eE[eM + 1] << 8 & eA | eE[eM + 2] & eg;
                    eG.fracU = eG.sX & eP;
                    eG.ifU = eP - eG.fracU;
                    eG.ul = eG.ifU * eG.ifV >> eD;
                    eG.ll = eG.ifU * eG.fracV >> eD;
                    eG.ur = eG.fracU * eG.ifV >> eD;
                    eG.lr = eG.fracU * eG.fracV >> eD;
                    eG.u1 = eG.sX >> eD;
                    eG.u2 = eO(eG.u1 + 1, eG.iw1);
                    eF = (eG.v1 + eG.u1) * 4;
                    eJ = (eG.v1 + eG.u2) * 4;
                    ec = (eG.v2 + eG.u1) * 4;
                    ed = (eG.v2 + eG.u2) * 4;
                    eG.cUL = ef[eF + 3] << 24 & eb | ef[eF] << 16 & eL | ef[eF + 1] << 8 & eA | ef[eF + 2] & eg;
                    eG.cUR = ef[eJ + 3] << 24 & eb | ef[eJ] << 16 & eL | ef[eJ + 1] << 8 & eA | ef[eJ + 2] & eg;
                    eG.cLL = ef[ec + 3] << 24 & eb | ef[ec] << 16 & eL | ef[ec + 1] << 8 & eA | ef[ec + 2] & eg;
                    eG.cLR = ef[ed + 3] << 24 & eb | ef[ed] << 16 & eL | ef[ed + 1] << 8 & eA | ef[ed + 2] & eg;
                    eG.r = eG.ul * ((eG.cUL & eL) >> 16) + eG.ll * ((eG.cLL & eL) >> 16) + eG.ur * ((eG.cUR & eL) >> 16) + eG.lr * ((eG.cLR & eL) >> 16) << el & eL;
                    eG.g = eG.ul * (eG.cUL & eA) + eG.ll * (eG.cLL & eA) + eG.ur * (eG.cUR & eA) + eG.lr * (eG.cLR & eA) >>> eD & eA;
                    eG.b = eG.ul * (eG.cUL & eg) + eG.ll * (eG.cLL & eg) + eG.ur * (eG.cUR & eg) + eG.lr * (eG.cLR & eg) >>> eD;
                    eG.a = eG.ul * ((eG.cUL & eb) >>> 24) + eG.ll * ((eG.cLL & eb) >>> 24) + eG.ur * ((eG.cUR & eb) >>> 24) + eG.lr * ((eG.cLR & eb) >>> 24) << eq & eb;
                    eH = ei(eQ, eG.a | eG.r | eG.g | eG.b);
                    eE[eM] = (eH & eL) >>> 16;
                    eE[eM + 1] = (eH & eA) >>> 8;
                    eE[eM + 2] = eH & eg;
                    eE[eM + 3] = (eH & eb) >>> 24;
                    eG.sX += eh
                }
                eu += ej;
                eG.srcYOffset += ee
            }
        };
        cW.loadFont = function (eb, ec) {
            if (eb === t) {
                throw "font name required in loadFont."
            }
            if (eb.indexOf(".svg") === -1) {
                if (ec === t) {
                    ec = W.size
                }
                return H.get(eb, ec)
            }
            var ea = cW.loadGlyphs(eb);
            return {
                name: eb,
                css: "12px sans-serif",
                glyph: true,
                units_per_em: ea.units_per_em,
                horiz_adv_x: 1 / ea.units_per_em * ea.horiz_adv_x,
                ascent: ea.ascent,
                descent: ea.descent,
                width: function (eh) {
                    var ef = 0;
                    var ed = eh.length;
                    for (var ee = 0; ee < ed; ee++) {
                        try {
                            ef += parseFloat(cW.glyphLook(cW.glyphTable[eb], eh[ee]).horiz_adv_x)
                        } catch (eg) {
                            F.debug(eg)
                        }
                    }
                    return ef / cW.glyphTable[eb].units_per_em
                }
            }
        };
        cW.createFont = function (ea, eb) {
            return cW.loadFont(ea, eb)
        };
        cW.textFont = function (ea, ec) {
            if (ec !== t) {
                if (!ea.glyph) {
                    ea = H.get(ea.name, ec)
                }
                d0 = ec
            }
            W = ea;
            Y = W.name;
            a3 = W.ascent;
            dA = W.descent;
            d7 = W.leading;
            var eb = dY.$ensureContext();
            eb.font = W.css
        };
        cW.textSize = function (eb) {
            W = H.get(Y, eb);
            d0 = eb;
            a3 = W.ascent;
            dA = W.descent;
            d7 = W.leading;
            var ea = dY.$ensureContext();
            ea.font = W.css
        };
        cW.textAscent = function () {
            return a3
        };
        cW.textDescent = function () {
            return dA
        };
        cW.textLeading = function (ea) {
            d7 = ea
        };
        cW.textAlign = function (eb, ea) {
            N = eb;
            c1 = ea || 0
        };

        function bu(ea) {
            if (ea instanceof String) {
                return ea
            }
            if (typeof ea === "number") {
                if (ea === (0 | ea)) {
                    return ea.toString()
                }
                return cW.nf(ea, 0, 3)
            }
            if (ea === null || ea === t) {
                return ""
            }
            return ea.toString()
        }
        bR.prototype.textWidth = function (ee) {
            var ea = bu(ee).split(/\r?\n/g),
                ec = 0;
            var eb, ed = ea.length;
            d8.font = W.css;
            for (eb = 0; eb < ed; ++eb) {
                ec = q.max(ec, W.measureTextWidth(ea[eb]))
            }
            return ec | 0
        };
        bB.prototype.textWidth = function (ef) {
            var ea = bu(ef).split(/\r?\n/g),
                ed = 0;
            var ec, ee = ea.length;
            if (cE === t) {
                cE = d.createElement("canvas")
            }
            var eb = cE.getContext("2d");
            eb.font = W.css;
            for (ec = 0; ec < ee; ++ec) {
                ed = q.max(ed, eb.measureText(ea[ec]).width)
            }
            return ed | 0
        };
        cW.glyphLook = function (ea, eb) {
            try {
                switch (eb) {
                    case "1":
                        return ea.one;
                    case "2":
                        return ea.two;
                    case "3":
                        return ea.three;
                    case "4":
                        return ea.four;
                    case "5":
                        return ea.five;
                    case "6":
                        return ea.six;
                    case "7":
                        return ea.seven;
                    case "8":
                        return ea.eight;
                    case "9":
                        return ea.nine;
                    case "0":
                        return ea.zero;
                    case " ":
                        return ea.space;
                    case "$":
                        return ea.dollar;
                    case "!":
                        return ea.exclam;
                    case '"':
                        return ea.quotedbl;
                    case "#":
                        return ea.numbersign;
                    case "%":
                        return ea.percent;
                    case "&":
                        return ea.ampersand;
                    case "'":
                        return ea.quotesingle;
                    case "(":
                        return ea.parenleft;
                    case ")":
                        return ea.parenright;
                    case "*":
                        return ea.asterisk;
                    case "+":
                        return ea.plus;
                    case ",":
                        return ea.comma;
                    case "-":
                        return ea.hyphen;
                    case ".":
                        return ea.period;
                    case "/":
                        return ea.slash;
                    case "_":
                        return ea.underscore;
                    case ":":
                        return ea.colon;
                    case ";":
                        return ea.semicolon;
                    case "<":
                        return ea.less;
                    case "=":
                        return ea.equal;
                    case ">":
                        return ea.greater;
                    case "?":
                        return ea.question;
                    case "@":
                        return ea.at;
                    case "[":
                        return ea.bracketleft;
                    case "\\":
                        return ea.backslash;
                    case "]":
                        return ea.bracketright;
                    case "^":
                        return ea.asciicircum;
                    case "`":
                        return ea.grave;
                    case "{":
                        return ea.braceleft;
                    case "|":
                        return ea.bar;
                    case "}":
                        return ea.braceright;
                    case "~":
                        return ea.asciitilde;
                    default:
                        return ea[eb]
                }
            } catch (ec) {
                F.debug(ec)
            }
        };
        bR.prototype.text$line = function (ei, el, ek, ej, ef) {
            var eh = 0,
                eg = 0;
            if (!W.glyph) {
                if (ei && "fillText" in d8) {
                    if (aq) {
                        d8.fillStyle = cW.color.toString(a1);
                        aq = false
                    }
                    if (ef === 39 || ef === 3) {
                        eh = W.measureTextWidth(ei);
                        if (ef === 39) {
                            eg = -eh
                        } else {
                            eg = -eh / 2
                        }
                    }
                    d8.fillText(ei, el + eg, ek)
                }
            } else {
                var ea = cW.glyphTable[Y];
                aD();
                d8.translate(el, ek + d0);
                if (ef === 39 || ef === 3) {
                    eh = ea.width(ei);
                    if (ef === 39) {
                        eg = -eh
                    } else {
                        eg = -eh / 2
                    }
                }
                var em = ea.units_per_em,
                    ee = 1 / em * d0;
                d8.scale(ee, ee);
                for (var eb = 0, ec = ei.length; eb < ec; eb++) {
                    try {
                        cW.glyphLook(ea, ei[eb]).draw()
                    } catch (ed) {
                        F.debug(ed)
                    }
                }
                cP()
            }
        };
        bB.prototype.text$line = function (eh, el, ek, ei, ef) {
            if (cE === t) {
                cE = d.createElement("canvas")
            }
            var eb = d8;
            d8 = cE.getContext("2d");
            d8.font = W.css;
            var eg = W.measureTextWidth(eh);
            cE.width = eg;
            cE.height = d0;
            d8 = cE.getContext("2d");
            d8.font = W.css;
            d8.textBaseline = "top";
            bR.prototype.text$line(eh, 0, 0, 0, 37);
            var ea = cE.width / cE.height;
            d8 = eb;
            d8.bindTexture(d8.TEXTURE_2D, bS);
            d8.texImage2D(d8.TEXTURE_2D, 0, d8.RGBA, d8.RGBA, d8.UNSIGNED_BYTE, cE);
            d8.texParameteri(d8.TEXTURE_2D, d8.TEXTURE_MAG_FILTER, d8.LINEAR);
            d8.texParameteri(d8.TEXTURE_2D, d8.TEXTURE_MIN_FILTER, d8.LINEAR);
            d8.texParameteri(d8.TEXTURE_2D, d8.TEXTURE_WRAP_T, d8.CLAMP_TO_EDGE);
            d8.texParameteri(d8.TEXTURE_2D, d8.TEXTURE_WRAP_S, d8.CLAMP_TO_EDGE);
            var ee = 0;
            if (ef === 39) {
                ee = -eg
            } else {
                if (ef === 3) {
                    ee = -eg / 2
                }
            }
            var ec = new aP;
            var ed = d0 * 0.5;
            ec.translate(el + ee - ed / 2, ek - ed, ei);
            ec.scale(-ea * ed, -ed, ed);
            ec.translate(-1, -1, -1);
            ec.transpose();
            var ej = new aP;
            ej.scale(1, -1, 1);
            ej.apply(dJ.array());
            ej.transpose();
            d8.useProgram(dQ);
            dc("aVertex2d", dQ, "aVertex", 3, cH);
            dc("aTextureCoord2d", dQ, "aTextureCoord", 2, ac);
            dZ("uSampler2d", dQ, "uSampler", [0]);
            dZ("uIsDrawingText2d", dQ, "uIsDrawingText", true);
            a9("uModel2d", dQ, "uModel", false, ec.array());
            a9("uView2d", dQ, "uView", false, ej.array());
            d2("uColor2d", dQ, "uColor", bo);
            d8.bindBuffer(d8.ELEMENT_ARRAY_BUFFER, R);
            d8.drawElements(d8.TRIANGLES, 6, d8.UNSIGNED_SHORT, 0)
        };

        function bi(ed, eg, ef, ee) {
            var ei, ec;
            if (ed.indexOf("\n") < 0) {
                ei = [ed];
                ec = 1
            } else {
                ei = ed.split(/\r?\n/g);
                ec = ei.length
            }
            var ea = 0;
            if (c1 === 101) {
                ea = a3 + dA
            } else {
                if (c1 === 3) {
                    ea = a3 / 2 - (ec - 1) * d7 / 2
                } else {
                    if (c1 === 102) {
                        ea = -(dA + (ec - 1) * d7)
                    }
                }
            }
            for (var eb = 0; eb < ec; ++eb) {
                var eh = ei[eb];
                dY.text$line(eh, eg, ef + ea, ee, N);
                ea += d7
            }
        }
        function bd(eq, el, ek, ep, en, ej) {
            if (eq.length === 0 || ep === 0 || en === 0) {
                return
            }
            if (d0 > en) {
                return
            }
            var em = -1;
            var ee = 0;
            var ea = 0;
            var eg = [];
            for (var ef = 0, es = eq.length; ef < es; ef++) {
                var eh = eq[ef];
                var ev = eh === " ";
                var eo = W.measureTextWidth(eh);
                if (eh !== "\n" && ea + eo <= ep) {
                    if (ev) {
                        em = ef
                    }
                    ea += eo
                } else {
                    if (em + 1 === ee) {
                        if (ef > 0) {
                            em = ef
                        } else {
                            return
                        }
                    }
                    if (eh === "\n") {
                        eg.push({
                            text: eq.substring(ee, ef),
                            width: ea
                        });
                        ee = ef + 1
                    } else {
                        eg.push({
                            text: eq.substring(ee, em + 1),
                            width: ea
                        });
                        ee = em + 1
                    }
                    ea = 0;
                    ef = ee - 1
                }
            }
            if (ee < es) {
                eg.push({
                    text: eq.substring(ee),
                    width: ea
                })
            }
            var eu = 1,
                ei = a3;
            if (N === 3) {
                eu = ep / 2
            } else {
                if (N === 39) {
                    eu = ep
                }
            }
            var er = eg.length,
                eb = q.min(er, q.floor(en / d7));
            if (c1 === 101) {
                ei = a3 + dA
            } else {
                if (c1 === 3) {
                    ei = en / 2 - d7 * (eb / 2 - 1)
                } else {
                    if (c1 === 102) {
                        ei = dA + d7
                    }
                }
            }
            var ec, ed, et;
            for (ec = 0; ec < er; ec++) {
                et = ec * d7;
                if (ei + et > en - dA) {
                    break
                }
                ed = eg[ec];
                dY.text$line(ed.text, el + eu, ek + ei + et, ej, N)
            }
        }
        cW.text = function () {
            if (cI === 5) {
                return
            }
            if (arguments.length === 3) {
                bi(bu(arguments[0]), arguments[1], arguments[2], 0)
            } else {
                if (arguments.length === 4) {
                    bi(bu(arguments[0]), arguments[1], arguments[2], arguments[3])
                } else {
                    if (arguments.length === 5) {
                        bd(bu(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], 0)
                    } else {
                        if (arguments.length === 6) {
                            bd(bu(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        }
                    }
                }
            }
        };
        cW.textMode = function (ea) {
            cI = ea
        };
        cW.loadGlyphs = function (eg) {
            var ei, eh, ee, ec, ep, eo, en, eq, ek, er, el, em = "[0-9\\-]+",
                ej;
            var ef = function (ex, ew) {
                var eu = 0,
                    et = [],
                    es, ev = new RegExp(ex, "g");
                es = et[eu] = ev.exec(ew);
                while (es) {
                    eu++;
                    es = et[eu] = ev.exec(ew)
                }
                return et
            };
            var eb = function (ex) {
                var ey = ef("[A-Za-z][0-9\\- ]+|Z", ex);
                var ew = function () {
                    aD();
                    return dY.$ensureContext()
                };
                var eu = function () {
                    bn();
                    dd();
                    cP()
                };
                ej = "return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";
                ei = 0;
                eh = 0;
                ee = 0;
                ec = 0;
                ep = 0;
                eo = 0;
                ex = 0;
                eq = 0;
                ek = "";
                er = ey.length - 1;
                for (var et = 0; et < er; et++) {
                    var es = ey[et][0],
                        ev = ef(em, es);
                    switch (es[0]) {
                        case "M":
                            ei = parseFloat(ev[0][0]);
                            eh = parseFloat(ev[1][0]);
                            ej += "curContext.moveTo(" + ei + "," + -eh + ");";
                            break;
                        case "L":
                            ei = parseFloat(ev[0][0]);
                            eh = parseFloat(ev[1][0]);
                            ej += "curContext.lineTo(" + ei + "," + -eh + ");";
                            break;
                        case "H":
                            ei = parseFloat(ev[0][0]);
                            ej += "curContext.lineTo(" + ei + "," + -eh + ");";
                            break;
                        case "V":
                            eh = parseFloat(ev[0][0]);
                            ej += "curContext.lineTo(" + ei + "," + -eh + ");";
                            break;
                        case "T":
                            ep = parseFloat(ev[0][0]);
                            eo = parseFloat(ev[1][0]);
                            if (ek === "Q" || ek === "T") {
                                ex = q.sqrt(q.pow(ei - ee, 2) + q.pow(ec - eh, 2));
                                eq = q.PI + q.atan2(ee - ei, ec - eh);
                                ee = ei + q.sin(eq) * ex;
                                ec = eh + q.cos(eq) * ex
                            } else {
                                ee = ei;
                                ec = eh
                            }
                            ej += "curContext.quadraticCurveTo(" + ee + "," + -ec + "," + ep + "," + -eo + ");";
                            ei = ep;
                            eh = eo;
                            break;
                        case "Q":
                            ee = parseFloat(ev[0][0]);
                            ec = parseFloat(ev[1][0]);
                            ep = parseFloat(ev[2][0]);
                            eo = parseFloat(ev[3][0]);
                            ej += "curContext.quadraticCurveTo(" + ee + "," + -ec + "," + ep + "," + -eo + ");";
                            ei = ep;
                            eh = eo;
                            break;
                        case "Z":
                            ej += "curContext.closePath();";
                            break
                    }
                    ek = es[0]
                }
                ej += "afterPathDraw();";
                ej += "curContext.translate(" + el + ",0);";
                ej += "}}";
                return (new Function("beforePathDraw", "afterPathDraw", ej))(ew, eu)
            };
            var ea = function (ev) {
                var eu = ev.getElementsByTagName("font");
                cW.glyphTable[eg].horiz_adv_x = eu[0].getAttribute("horiz-adv-x");
                var ex = ev.getElementsByTagName("font-face")[0];
                cW.glyphTable[eg].units_per_em = parseFloat(ex.getAttribute("units-per-em"));
                cW.glyphTable[eg].ascent = parseFloat(ex.getAttribute("ascent"));
                cW.glyphTable[eg].descent = parseFloat(ex.getAttribute("descent"));
                var ez = ev.getElementsByTagName("glyph"),
                    et = ez.length;
                for (var ey = 0; ey < et; ey++) {
                    var es = ez[ey].getAttribute("unicode");
                    var ew = ez[ey].getAttribute("glyph-name");
                    el = ez[ey].getAttribute("horiz-adv-x");
                    if (el === null) {
                        el = cW.glyphTable[eg].horiz_adv_x
                    }
                    en = ez[ey].getAttribute("d");
                    if (en !== t) {
                        ej = eb(en);
                        cW.glyphTable[eg][ew] = {
                            name: ew,
                            unicode: es,
                            horiz_adv_x: el,
                            draw: ej.draw
                        }
                    }
                }
            };
            var ed = function () {
                var eu;
                try {
                    eu = d.implementation.createDocument("", "", null)
                } catch (ew) {
                    F.debug(ew.message);
                    return
                }
                try {
                    eu.async = false;
                    eu.load(eg);
                    ea(eu.getElementsByTagName("svg")[0])
                } catch (et) {
                    F.debug(et);
                    try {
                        var es = new D.XMLHttpRequest;
                        es.open("GET", eg, false);
                        es.send(null);
                        ea(es.responseXML.documentElement)
                    } catch (ev) {
                        F.debug(et)
                    }
                }
            };
            cW.glyphTable[eg] = {};
            ed(eg);
            return cW.glyphTable[eg]
        };
        cW.param = function (ec) {
            var eb = "data-processing-" + ec;
            if (ae.hasAttribute(eb)) {
                return ae.getAttribute(eb)
            }
            for (var ed = 0, ea = ae.childNodes.length; ed < ea; ++ed) {
                var ee = ae.childNodes.item(ed);
                if (ee.nodeType !== 1 || ee.tagName.toLowerCase() !== "param") {
                    continue
                }
                if (ee.getAttribute("name") === ec) {
                    return ee.getAttribute("value")
                }
            }
            if (cQ.params.hasOwnProperty(ec)) {
                return cQ.params[ec]
            }
            return null
        };

        function cL(eb) {
            if (eb === "3D") {
                dY = new bB
            } else {
                if (eb === "2D") {
                    dY = new bR
                } else {
                    dY = new ca
                }
            }
            for (var ea in ca.prototype) {
                if (ca.prototype.hasOwnProperty(ea) && ea.indexOf("$") < 0) {
                    cW[ea] = dY[ea]
                }
            }
            dY.$init()
        }
        function cU(ea) {
            return function () {
                cL("2D");
                return dY[ea].apply(this, arguments)
            }
        }
        ca.prototype.translate = cU("translate");
        ca.prototype.transform = cU("transform");
        ca.prototype.scale = cU("scale");
        ca.prototype.pushMatrix = cU("pushMatrix");
        ca.prototype.popMatrix = cU("popMatrix");
        ca.prototype.resetMatrix = cU("resetMatrix");
        ca.prototype.applyMatrix = cU("applyMatrix");
        ca.prototype.rotate = cU("rotate");
        ca.prototype.rotateZ = cU("rotateZ");
        ca.prototype.shearX = cU("shearX");
        ca.prototype.shearY = cU("shearY");
        ca.prototype.redraw = cU("redraw");
        ca.prototype.toImageData = cU("toImageData");
        ca.prototype.ambientLight = cU("ambientLight");
        ca.prototype.directionalLight = cU("directionalLight");
        ca.prototype.lightFalloff = cU("lightFalloff");
        ca.prototype.lightSpecular = cU("lightSpecular");
        ca.prototype.pointLight = cU("pointLight");
        ca.prototype.noLights = cU("noLights");
        ca.prototype.spotLight = cU("spotLight");
        ca.prototype.beginCamera = cU("beginCamera");
        ca.prototype.endCamera = cU("endCamera");
        ca.prototype.frustum = cU("frustum");
        ca.prototype.box = cU("box");
        ca.prototype.sphere = cU("sphere");
        ca.prototype.ambient = cU("ambient");
        ca.prototype.emissive = cU("emissive");
        ca.prototype.shininess = cU("shininess");
        ca.prototype.specular = cU("specular");
        ca.prototype.fill = cU("fill");
        ca.prototype.stroke = cU("stroke");
        ca.prototype.strokeWeight = cU("strokeWeight");
        ca.prototype.smooth = cU("smooth");
        ca.prototype.noSmooth = cU("noSmooth");
        ca.prototype.point = cU("point");
        ca.prototype.vertex = cU("vertex");
        ca.prototype.endShape = cU("endShape");
        ca.prototype.bezierVertex = cU("bezierVertex");
        ca.prototype.curveVertex = cU("curveVertex");
        ca.prototype.curve = cU("curve");
        ca.prototype.line = cU("line");
        ca.prototype.bezier = cU("bezier");
        ca.prototype.rect = cU("rect");
        ca.prototype.ellipse = cU("ellipse");
        ca.prototype.background = cU("background");
        ca.prototype.image = cU("image");
        ca.prototype.textWidth = cU("textWidth");
        ca.prototype.text$line = cU("text$line");
        ca.prototype.$ensureContext = cU("$ensureContext");
        ca.prototype.$newPMatrix = cU("$newPMatrix");
        ca.prototype.size = function (ea, ec, eb) {
            cL(eb === 2 ? "3D" : "2D");
            cW.size(ea, ec, eb)
        };
        ca.prototype.$init = G;
        bR.prototype.$init = function () {
            cW.size(cW.width, cW.height);
            d8.lineCap = "round";
            cW.noSmooth();
            cW.disableContextMenu()
        };
        bB.prototype.$init = function () {
            cW.use3DContext = true;
            cW.disableContextMenu()
        };
        ds.prototype.$ensureContext = function () {
            return d8
        };

        function dy(eb, ed) {
            var ec = eb,
                ea = 0,
                ee = 0;
            cW.pmouseX = cW.mouseX;
            cW.pmouseY = cW.mouseY;
            if (ec.offsetParent) {
                do {
                    ea += ec.offsetLeft;
                    ee += ec.offsetTop
                } while ( !! (ec = ec.offsetParent))
            }
            ec = eb;
            do {
                ea -= ec.scrollLeft || 0;
                ee -= ec.scrollTop || 0
            } while ( !! (ec = ec.parentNode));
            ea += ad;
            ee += dp;
            ea += aU;
            ee += bX;
            ea += D.pageXOffset;
            ee += D.pageYOffset;
            return {
                X: ea,
                Y: ee
            }
        }
        function aI(ea, eb) {
            var ec = dy(ea, eb);
            cW.mouseX = eb.pageX - ec.X;
            cW.mouseY = eb.pageY - ec.Y
        }
        function cu(eb) {
            var ed = dy(eb.changedTouches[0].target, eb.changedTouches[0]),
                ea;
            for (ea = 0; ea < eb.touches.length; ea++) {
                var ef = eb.touches[ea];
                ef.offsetX = ef.pageX - ed.X;
                ef.offsetY = ef.pageY - ed.Y
            }
            for (ea = 0; ea < eb.targetTouches.length; ea++) {
                var ec = eb.targetTouches[ea];
                ec.offsetX = ec.pageX - ed.X;
                ec.offsetY = ec.pageY - ed.Y
            }
            for (ea = 0; ea < eb.changedTouches.length; ea++) {
                var ee = eb.changedTouches[ea];
                ee.offsetX = ee.pageX - ed.X;
                ee.offsetY = ee.pageY - ed.Y
            }
            return eb
        }
        bO(ae, "touchstart", function (ec) {
            ae.setAttribute("style", "-webkit-user-select: none");
            ae.setAttribute("onclick", "void(0)");
            ae.setAttribute("style", "-webkit-tap-highlight-color:rgba(0,0,0,0)");
            for (var eb = 0, ea = au.length; eb < ea; eb++) {
                var ed = au[eb].type;
                if (ed === "mouseout" || ed === "mousemove" || ed === "mousedown" || ed === "mouseup" || ed === "DOMMouseScroll" || ed === "mousewheel" || ed === "touchstart") {
                    de(au[eb])
                }
            }
            if (cW.touchStart !== t || cW.touchMove !== t || cW.touchEnd !== t || cW.touchCancel !== t) {
                bO(ae, "touchstart", function (ee) {
                    if (cW.touchStart !== t) {
                        ee = cu(ee);
                        cW.touchStart(ee)
                    }
                });
                bO(ae, "touchmove", function (ee) {
                    if (cW.touchMove !== t) {
                        ee.preventDefault();
                        ee = cu(ee);
                        cW.touchMove(ee)
                    }
                });
                bO(ae, "touchend", function (ee) {
                    if (cW.touchEnd !== t) {
                        ee = cu(ee);
                        cW.touchEnd(ee)
                    }
                });
                bO(ae, "touchcancel", function (ee) {
                    if (cW.touchCancel !== t) {
                        ee = cu(ee);
                        cW.touchCancel(ee)
                    }
                })
            } else {
                bO(ae, "touchstart", function (ee) {
                    aI(ae, ee.touches[0]);
                    cW.__mousePressed = true;
                    cW.mouseDragging = false;
                    cW.mouseButton = 37;
                    if (typeof cW.mousePressed === "function") {
                        cW.mousePressed()
                    }
                });
                bO(ae, "touchmove", function (ee) {
                    ee.preventDefault();
                    aI(ae, ee.touches[0]);
                    if (typeof cW.mouseMoved === "function" && !cW.__mousePressed) {
                        cW.mouseMoved()
                    }
                    if (typeof cW.mouseDragged === "function" && cW.__mousePressed) {
                        cW.mouseDragged();
                        cW.mouseDragging = true
                    }
                });
                bO(ae, "touchend", function (ee) {
                    cW.__mousePressed = false;
                    if (typeof cW.mouseClicked === "function" && !cW.mouseDragging) {
                        cW.mouseClicked()
                    }
                    if (typeof cW.mouseReleased === "function") {
                        cW.mouseReleased()
                    }
                })
            }
            ae.dispatchEvent(ec)
        });
        (function () {
            var ea = true,
                eb = function (ec) {
                    ec.preventDefault();
                    ec.stopPropagation()
                };
            cW.disableContextMenu = function () {
                if (!ea) {
                    return
                }
                bO(ae, "contextmenu", eb);
                ea = false
            };
            cW.enableContextMenu = function () {
                if (ea) {
                    return
                }
                de({
                    elem: ae,
                    type: "contextmenu",
                    fn: eb
                });
                ea = true
            }
        })();
        bO(ae, "mousemove", function (ea) {
            aI(ae, ea);
            if (typeof cW.mouseMoved === "function" && !cW.__mousePressed) {
                cW.mouseMoved()
            }
            if (typeof cW.mouseDragged === "function" && cW.__mousePressed) {
                cW.mouseDragged();
                cW.mouseDragging = true
            }
        });
        bO(ae, "mouseout", function (ea) {
            if (typeof cW.mouseOut === "function") {
                cW.mouseOut()
            }
        });
        bO(ae, "mouseover", function (ea) {
            aI(ae, ea);
            if (typeof cW.mouseOver === "function") {
                cW.mouseOver()
            }
        });
        ae.onmousedown = function () {
            ae.focus();
            return false
        };
        bO(ae, "mousedown", function (ea) {
            cW.__mousePressed = true;
            cW.mouseDragging = false;
            switch (ea.which) {
                case 1:
                    cW.mouseButton = 37;
                    break;
                case 2:
                    cW.mouseButton = 3;
                    break;
                case 3:
                    cW.mouseButton = 39;
                    break
            }
            if (typeof cW.mousePressed === "function") {
                cW.mousePressed()
            }
        });
        bO(ae, "mouseup", function (ea) {
            cW.__mousePressed = false;
            if (typeof cW.mouseClicked === "function" && !cW.mouseDragging) {
                cW.mouseClicked()
            }
            if (typeof cW.mouseReleased === "function") {
                cW.mouseReleased()
            }
        });
        var an = function (ea) {
            var eb = 0;
            if (ea.wheelDelta) {
                eb = ea.wheelDelta / 120;
                if (D.opera) {
                    eb = -eb
                }
            } else {
                if (ea.detail) {
                    eb = -ea.detail / 3
                }
            }
            cW.mouseScroll = eb;
            if (eb && typeof cW.mouseScrolled === "function") {
                cW.mouseScrolled()
            }
        };
        bO(d, "DOMMouseScroll", an);
        bO(d, "mousewheel", an);
        if (!ae.getAttribute("tabindex")) {
            ae.setAttribute("tabindex", 0)
        }
        function dD(eb) {
            var ea = eb.which || eb.keyCode;
            switch (ea) {
                case 13:
                    return 10;
                case 91:
                case 93:
                case 224:
                    return 157;
                case 57392:
                    return 17;
                case 46:
                    return 127;
                case 45:
                    return 155
            }
            return ea
        }
        function cB(eb) {
            var ec = eb.which || eb.keyCode;
            var ea = eb.shiftKey || eb.ctrlKey || eb.altKey || eb.metaKey;
            switch (ec) {
                case 13:
                    ec = ea ? 13 : 10;
                    break;
                case 8:
                    ec = ea ? 127 : 8;
                    break
            }
            return new bP(ec)
        }
        function cR(ea) {
            if (typeof ea.preventDefault === "function") {
                ea.preventDefault()
            } else {
                if (typeof ea.stopPropagation === "function") {
                    ea.stopPropagation()
                }
            }
            return false
        }
        function dG() {
            var ea;
            for (ea in ag) {
                if (ag.hasOwnProperty(ea)) {
                    cW.__keyPressed = true;
                    return
                }
            }
            cW.__keyPressed = false
        }
        function cx() {
            cW.__keyPressed = false;
            ag = [];
            dI = null
        }
        function bq(ea, eb) {
            ag[ea] = eb;
            dI = null;
            cW.key = eb;
            cW.keyCode = ea;
            cW.keyPressed();
            cW.keyCode = 0;
            cW.keyTyped();
            dG()
        }
        function cz(eb) {
            var ea = dD(eb);
            if (ea === 127) {
                bq(ea, new bP(127));
                return
            }
            if (dX.indexOf(ea) < 0) {
                dI = ea;
                return
            }
            var ec = new bP(65535);
            cW.key = ec;
            cW.keyCode = ea;
            ag[ea] = ec;
            cW.keyPressed();
            dI = null;
            dG();
            return cR(eb)
        }
        function dv(eb) {
            if (dI === null) {
                return
            }
            var ea = dI,
                ec = cB(eb);
            bq(ea, ec);
            return cR(eb)
        }
        function cp(eb) {
            var ea = dD(eb),
                ec = ag[ea];
            if (ec === t) {
                return
            }
            cW.key = ec;
            cW.keyCode = ea;
            cW.keyReleased();
            delete ag[ea];
            dG()
        }
        if (!cV) {
            if (ba instanceof F.Sketch) {
                cQ = ba
            } else {
                if (typeof ba === "function") {
                    cQ = new F.Sketch(ba)
                } else {
                    if (!ba) {
                        cQ = new F.Sketch(function () {})
                    } else {
                        cQ = F.compile(ba)
                    }
                }
            }
            cW.externals.sketch = cQ;
            cL();
            ae.onfocus = function () {
                cW.focused = true
            };
            ae.onblur = function () {
                cW.focused = false;
                if (!cQ.options.globalKeyEvents) {
                    cx()
                }
            };
            if (cQ.options.pauseOnBlur) {
                bO(D, "focus", function () {
                    if (aC) {
                        cW.loop()
                    }
                });
                bO(D, "blur", function () {
                    if (aC && ax) {
                        cW.noLoop();
                        aC = true
                    }
                    cx()
                })
            }
            var aV = cQ.options.globalKeyEvents ? D : ae;
            bO(aV, "keydown", cz);
            bO(aV, "keypress", dv);
            bO(aV, "keyup", cp);
            for (var c4 in F.lib) {
                if (F.lib.hasOwnProperty(c4)) {
                    if (F.lib[c4].hasOwnProperty("attach")) {
                        F.lib[c4].attach(cW)
                    } else {
                        if (F.lib[c4] instanceof Function) {
                            F.lib[c4].call(this)
                        }
                    }
                }
            }
            var dB = 100;
            var b6 = function (ed) {
                if (!(cQ.imageCache.pending || H.preloading.pending(dB))) {
                    if (D.opera) {
                        var ec, eb, ea = cQ.imageCache.operaCache;
                        for (ec in ea) {
                            if (ea.hasOwnProperty(ec)) {
                                eb = ea[ec];
                                if (eb !== null) {
                                    d.body.removeChild(eb)
                                }
                                delete ea[ec]
                            }
                        }
                    }
                    cQ.attach(ed, g);
                    cQ.onLoad(ed);
                    if (ed.setup) {
                        ed.setup();
                        ed.resetMatrix();
                        cQ.onSetup()
                    }
                    T();
                    if (ed.draw) {
                        if (!aC) {
                            ed.redraw()
                        } else {
                            ed.loop()
                        }
                    }
                } else {
                    D.setTimeout(function () {
                        b6(ed)
                    }, dB)
                }
            };
            a(this);
            b6(cW)
        } else {
            cQ = new F.Sketch;
            cL();
            cW.size = function (ea, ec, eb) {
                if (eb && eb === 2) {
                    cL("3D")
                } else {
                    cL("2D")
                }
                cW.size(ea, ec, eb)
            }
        }
    };
    F.debug = s;
    F.prototype = g;

    function u() {
        var R = ["abs", "acos", "alpha", "ambient", "ambientLight", "append", "applyMatrix", "arc", "arrayCopy", "asin", "atan", "atan2", "background", "beginCamera", "beginDraw", "beginShape", "bezier", "bezierDetail", "bezierPoint", "bezierTangent", "bezierVertex", "binary", "blend", "blendColor", "blit_resize", "blue", "box", "breakShape", "brightness", "camera", "ceil", "Character", "color", "colorMode", "concat", "constrain", "copy", "cos", "createFont", "createGraphics", "createImage", "cursor", "curve", "curveDetail", "curvePoint", "curveTangent", "curveTightness", "curveVertex", "day", "degrees", "directionalLight", "disableContextMenu", "dist", "draw", "ellipse", "ellipseMode", "emissive", "enableContextMenu", "endCamera", "endDraw", "endShape", "exit", "exp", "expand", "externals", "fill", "filter", "floor", "focused", "frameCount", "frameRate", "frustum", "get", "glyphLook", "glyphTable", "green", "height", "hex", "hint", "hour", "hue", "image", "imageMode", "intersect", "join", "key", "keyCode", "keyPressed", "keyReleased", "keyTyped", "lerp", "lerpColor", "lightFalloff", "lights", "lightSpecular", "line", "link", "loadBytes", "loadFont", "loadGlyphs", "loadImage", "loadPixels", "loadShape", "loadXML", "loadStrings", "log", "loop", "mag", "map", "match", "matchAll", "max", "millis", "min", "minute", "mix", "modelX", "modelY", "modelZ", "modes", "month", "mouseButton", "mouseClicked", "mouseDragged", "mouseMoved", "mouseOut", "mouseOver", "mousePressed", "mouseReleased", "mouseScroll", "mouseScrolled", "mouseX", "mouseY", "name", "nf", "nfc", "nfp", "nfs", "noCursor", "noFill", "noise", "noiseDetail", "noiseSeed", "noLights", "noLoop", "norm", "normal", "noSmooth", "noStroke", "noTint", "ortho", "param", "parseBoolean", "parseByte", "parseChar", "parseFloat", "parseInt", "peg", "perspective", "PImage", "pixels", "PMatrix2D", "PMatrix3D", "PMatrixStack", "pmouseX", "pmouseY", "point", "pointLight", "popMatrix", "popStyle", "pow", "print", "printCamera", "println", "printMatrix", "printProjection", "PShape", "PShapeSVG", "pushMatrix", "pushStyle", "quad", "radians", "random", "Random", "randomSeed", "rect", "rectMode", "red", "redraw", "requestImage", "resetMatrix", "reverse", "rotate", "rotateX", "rotateY", "rotateZ", "round", "saturation", "save", "saveFrame", "saveStrings", "scale", "screenX", "screenY", "screenZ", "second", "set", "setup", "shape", "shapeMode", "shared", "shearX", "shearY", "shininess", "shorten", "sin", "size", "smooth", "sort", "specular", "sphere", "sphereDetail", "splice", "split", "splitTokens", "spotLight", "sq", "sqrt", "status", "str", "stroke", "strokeCap", "strokeJoin", "strokeWeight", "subset", "tan", "text", "textAlign", "textAscent", "textDescent", "textFont", "textLeading", "textMode", "textSize", "texture", "textureMode", "textWidth", "tint", "toImageData", "touchCancel", "touchEnd", "touchMove", "touchStart", "translate", "transform", "triangle", "trim", "unbinary", "unhex", "updatePixels", "use3DContext", "vertex", "width", "XMLElement", "XML", "year", "__contains", "__equals", "__equalsIgnoreCase", "__frameRate", "__hashCode", "__int_cast", "__instanceof", "__keyPressed", "__mousePressed", "__printStackTrace", "__replace", "__replaceAll", "__replaceFirst", "__toCharArray", "__split", "__codePointAt", "__startsWith", "__endsWith", "__matches"];
        var P = {};
        var Q, O;
        for (Q = 0, O = R.length; Q < O; ++Q) {
            P[R[Q]] = null
        }
        for (var S in F.lib) {
            if (F.lib.hasOwnProperty(S)) {
                if (F.lib[S].exports) {
                    var N = F.lib[S].exports;
                    for (Q = 0, O = N.length; Q < O; ++Q) {
                        P[N[Q]] = null
                    }
                }
            }
        }
        return P
    }
    function c(ar) {
        var aX = u();

        function aE(bq) {
            var bt = [];
            var bv = bq.split(/([\{\[\(\)\]\}])/);
            var by = bv[0];
            var bw = [];
            for (var bs = 1; bs < bv.length; bs += 2) {
                var bx = bv[bs];
                if (bx === "[" || bx === "{" || bx === "(") {
                    bw.push(by);
                    by = bx
                } else {
                    if (bx === "]" || bx === "}" || bx === ")") {
                        var br = bx === "}" ? "A" : bx === ")" ? "B" : "C";
                        var bu = bt.length;
                        bt.push(by + bx);
                        by = bw.pop() + '"' + br + (bu + 1) + '"'
                    }
                }
                by += bv[bs + 1]
            }
            bt.unshift(by);
            return bt
        }
        function aj(br, bq) {
            return br.replace(/'(\d+)'/g, function (bt, bs) {
                var bu = bq[bs];
                if (bu.charAt(0) === "/") {
                    return bu
                }
                return /^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(bu) ? "(new $p.Character(" + bu + "))" : bu
            })
        }
        function aP(bt) {
            var bs = /^\s*/.exec(bt),
                bq;
            if (bs[0].length === bt.length) {
                bq = {
                    left: bs[0],
                    middle: "",
                    right: ""
                }
            } else {
                var br = /\s*$/.exec(bt);
                bq = {
                    left: bs[0],
                    middle: bt.substring(bs[0].length, br.index),
                    right: br[0]
                }
            }
            bq.untrim = function (bu) {
                return this.left + bu + this.right
            };
            return bq
        }
        function a6(bq) {
            return bq.replace(/^\s+/, "").replace(/\s+$/, "")
        }
        function av(bs, bt) {
            for (var br = 0, bq = bt.length; br < bq; ++br) {
                bs[bt[br]] = null
            }
            return bs
        }
        function ba(br) {
            for (var bq in br) {
                if (br.hasOwnProperty(bq)) {
                    return false
                }
            }
            return true
        }
        function aQ(bq) {
            return bq.substring(2, bq.length - 1)
        }
        var bg = ar.replace(/\r\n?|\n\r/g, "\n");
        var N = [];
        var a3 = bg.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g, function (by, br, bv, bw, bt, bx, bq, bs) {
            var bu;
            if (br || bv) {
                bu = N.length;
                N.push(by);
                return "'" + bu + "'"
            }
            if (bw) {
                bu = N.length;
                N.push(bx);
                return bt + "'" + bu + "'"
            }
            return bs !== "" ? " " : "\n"
        });
        a3 = a3.replace(/__x([0-9A-F]{4})/g, function (br, bq) {
            return "__x005F_x" + bq
        });
        a3 = a3.replace(/\$/g, "__x0024");
        var Z;
        var aA = a3;
        var aa = function (br, bs, bq, bt) {
            if ( !! bs || !! bt) {
                return br
            }
            Z = true;
            return ""
        };
        do {
            Z = false;
            aA = aA.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g, aa)
        } while (Z);
        var bk = aE(aA);
        var al;
        var aJ = {}, a9, az = 0;

        function bc(br, bq) {
            var bs = bk.length;
            bk.push(br);
            return '"' + bq + bs + '"'
        }
        function a7() {
            return "class" + ++az
        }
        function bl(br, bs, bq) {
            br.classId = bs;
            br.scopeId = bq;
            aJ[bs] = br
        }
        var V, S, ap, aV, bi, aZ;
        var O = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g;
        var bb = /\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g;
        var aM = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/;
        var bm = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g;
        var W = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/;
        var au = /\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;

        function ae(br) {
            var bq = br;
            bq = bq.replace(O, function (bs) {
                return bc(bs, "E")
            });
            bq = bq.replace(bb, function (bs) {
                return bc(bs, "D")
            });
            bq = bq.replace(au, function (bs) {
                return bc(bs, "H")
            });
            return bq
        }
        function bd(bs, br) {
            var bq = bs.replace(bm, function (bx, bu, bv, by, bw, bt) {
                if (bv !== br) {
                    return bx
                }
                return bc(bx, "G")
            });
            return bq
        }
        function aH(bq) {
            this.name = bq
        }
        aH.prototype.toString = function () {
            return this.name
        };

        function ao(br, bq) {
            this.params = br;
            this.methodArgsParam = bq
        }
        ao.prototype.getNames = function () {
            var bs = [];
            for (var br = 0, bq = this.params.length; br < bq; ++br) {
                bs.push(this.params[br].name)
            }
            return bs
        };
        ao.prototype.prependMethodArgs = function (bq) {
            if (!this.methodArgsParam) {
                return bq
            }
            return "{\nvar " + this.methodArgsParam.name + " = Array.prototype.slice.call(arguments, " + this.params.length + ");\n" + bq.substring(1)
        };
        ao.prototype.toString = function () {
            if (this.params.length === 0) {
                return "()"
            }
            var bq = "(";
            for (var bs = 0, br = this.params.length; bs < br; ++bs) {
                bq += this.params[bs] + ", "
            }
            return bq.substring(0, bq.length - 2) + ")"
        };

        function aD(bw) {
            var bt = a6(bw.substring(1, bw.length - 1));
            var bq = [],
                bu = null;
            if (bt !== "") {
                var br = bt.split(",");
                for (var bs = 0; bs < br.length; ++bs) {
                    var bv = /\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(br[bs]);
                    if (bs === br.length - 1 && br[bs].indexOf("...") >= 0) {
                        bu = new aH(bv[1]);
                        break
                    }
                    bq.push(new aH(bv[1]))
                }
            }
            return new ao(bq, bu)
        }
        function aq(bu) {
            var bt = bu;
            bt = bt.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g, function (bw, bv, bx) {
                return bx
            });
            bt = bt.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g, function (bw, bv, bx) {
                return bc(bw, "F")
            });
            bt = bt.replace(au, function (bv) {
                return bc(bv, "H")
            });
            bt = bt.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g, function (bA, bz, bx) {
                var bw = bx.replace(/"C(\d+)"/g, function (bC, bB) {
                    return bk[bB]
                }).replace(/\[\s*\]/g, "[null]").replace(/\s*\]\s*\[\s*/g, ", ");
                var by = "{" + bw.substring(1, bw.length - 1) + "}";
                var bv = "('" + bz + "', " + bc(by, "A") + ")";
                return "$p.createJavaArray" + bc(bv, "B")
            });
            bt = bt.replace(/(\.\s*length)\s*"B\d+"/g, "$1");
            bt = bt.replace(/#([0-9A-Fa-f]{6})\b/g, function (bv, bw) {
                return "0xFF" + bw
            });
            bt = bt.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g, function (by, bw, bx) {
                var bz = bk[bw];
                if (!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(bz)) {
                    return by
                }
                if (/^\(\s*int\s*\)$/.test(bz)) {
                    return "(int)" + bx
                }
                var bv = bz.split(/"C(\d+)"/g);
                if (bv.length > 1) {
                    if (!/^\[\s*\]$/.test(bk[bv[1]])) {
                        return by
                    }
                }
                return "" + bx
            });
            bt = bt.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g, function (bw, bv) {
                var bx = aP(bv);
                return bx.untrim("__int_cast(" + bx.middle + ")")
            });
            bt = bt.replace(/\bsuper(\s*"B\d+")/g, "$$superCstr$1").replace(/\bsuper(\s*\.)/g, "$$super$1");
            bt = bt.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/, function (bx, bw, bv) {
                if (bw === bv) {
                    return bx
                }
                return bv === "" ? "0" + bw : bw
            });
            bt = bt.replace(/\b(\.?\d+\.?)[fF]\b/g, "$1");
            bt = bt.replace(/([^\s])%([^=\s])/g, "$1 % $2");
            bt = bt.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g, "__$1");
            bt = bt.replace(/\b(boolean|byte|char|float|int)\s*"B/g, function (bw, bv) {
                return "parse" + bv.substring(0, 1).toUpperCase() + bv.substring(1) + '"B'
            });
            bt = bt.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g, function (bw, bA, bv, bz, by, bB) {
                if (bv) {
                    var bx = bk[bz];
                    if (by) {
                        return "pixels.setPixel" + bc("(" + bx.substring(1, bx.length - 1) + "," + bB + ")", "B")
                    }
                    return "pixels.getPixel" + bc("(" + bx.substring(1, bx.length - 1) + ")", "B")
                }
                if (bA) {
                    return "pixels.getLength" + bc("()", "B")
                }
                if (by) {
                    return "pixels.set" + bc("(" + bB + ")", "B")
                }
                return "pixels.toArray" + bc("()", "B")
            });
            var bs;

            function br(bw, bv, bA, by) {
                var bx = bk[by];
                bs = true;
                var bz = aP(bx.substring(1, bx.length - 1));
                return "__" + bA + (bz.middle === "" ? bc("(" + bv.replace(/\.\s*$/, "") + ")", "B") : bc("(" + bv.replace(/\.\s*$/, "") + "," + bz.middle + ")", "B"))
            }
            do {
                bs = false;
                bt = bt.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g, br)
            } while (bs);

            function bq(bx, bv, bw) {
                bs = true;
                return "__instanceof" + bc("(" + bv + ", " + bw + ")", "B")
            }
            do {
                bs = false;
                bt = bt.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g, bq)
            } while (bs);
            bt = bt.replace(/\bthis(\s*"B\d+")/g, "$$constr$1");
            return bt
        }
        function aC(br, bq) {
            this.baseInterfaceName = br;
            this.body = bq;
            bq.owner = this
        }
        aC.prototype.toString = function () {
            return "new (" + this.body + ")"
        };

        function ai(bs) {
            var br = (new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/)).exec(bs);
            var bv = a9,
                bu = a7();
            a9 = bu;
            var bq = br[1] + "$" + bu;
            var bt = new aC(bq, V(bk[br[2]], bq, "", "implements " + br[1]));
            bl(bt, bu, bv);
            a9 = bv;
            return bt
        }
        function af(br, bs, bq) {
            this.name = br;
            this.params = bs;
            this.body = bq
        }
        af.prototype.toString = function () {
            var bs = al;
            var bt = av({
                "this": null
            }, this.params.getNames());
            al = function (bu) {
                return bt.hasOwnProperty(bu.name) ? bu.name : bs(bu)
            };
            var br = "function";
            if (this.name) {
                br += " " + this.name
            }
            var bq = this.params.prependMethodArgs(this.body.toString());
            br += this.params + " " + bq;
            al = bs;
            return br
        };

        function aK(br) {
            var bq = (new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/)).exec(br);
            return new af(bq[1] !== "function" ? bq[1] : null, aD(bk[bq[2]]), ap(bk[bq[3]]))
        }
        function ad(bq) {
            this.members = bq
        }
        ad.prototype.toString = function () {
            var bs = al;
            al = function (bu) {
                return bu.name === "this" ? "this" : bs(bu)
            };
            var bq = "";
            for (var bt = 0, br = this.members.length; bt < br; ++bt) {
                if (this.members[bt].label) {
                    bq += this.members[bt].label + ": "
                }
                bq += this.members[bt].value.toString() + ", "
            }
            al = bs;
            return bq.substring(0, bq.length - 2)
        };

        function aF(bt) {
            var bq = bt.split(",");
            for (var bs = 0; bs < bq.length; ++bs) {
                var br = bq[bs].indexOf(":");
                if (br < 0) {
                    bq[bs] = {
                        value: aZ(bq[bs])
                    }
                } else {
                    bq[bs] = {
                        label: a6(bq[bs].substring(0, br)),
                        value: aZ(a6(bq[bs].substring(br + 1)))
                    }
                }
            }
            return new ad(bq)
        }
        function ay(bs) {
            if (bs.charAt(0) === "(" || bs.charAt(0) === "[") {
                return bs.charAt(0) + ay(bs.substring(1, bs.length - 1)) + bs.charAt(bs.length - 1)
            }
            if (bs.charAt(0) === "{") {
                if (/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(bs)) {
                    return "{" + bc(bs.substring(1, bs.length - 1), "I") + "}"
                }
                return "[" + ay(bs.substring(1, bs.length - 1)) + "]"
            }
            var br = aP(bs);
            var bq = aq(br.middle);
            bq = bq.replace(/"[ABC](\d+)"/g, function (bu, bt) {
                return ay(bk[bt])
            });
            return br.untrim(bq)
        }
        function R(bq) {
            return bq.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g, function (bt, bv, br, bx, bw, bu) {
                if (bv) {
                    return bt
                }
                var bs = {
                    name: br,
                    member: bw,
                    callSign: !! bu
                };
                return al(bs) + (bx === t ? "" : bx)
            })
        }
        function bp(br, bq) {
            this.expr = br;
            this.transforms = bq
        }
        bp.prototype.toString = function () {
            var bq = this.transforms;
            var br = R(this.expr);
            return br.replace(/"!(\d+)"/g, function (bt, bs) {
                return bq[bs].toString()
            })
        };
        aZ = function (bs) {
            var br = [];
            var bq = ay(bs);
            bq = bq.replace(/"H(\d+)"/g, function (bu, bt) {
                br.push(aK(bk[bt]));
                return '"!' + (br.length - 1) + '"'
            });
            bq = bq.replace(/"F(\d+)"/g, function (bu, bt) {
                br.push(ai(bk[bt]));
                return '"!' + (br.length - 1) + '"'
            });
            bq = bq.replace(/"I(\d+)"/g, function (bu, bt) {
                br.push(aF(bk[bt]));
                return '"!' + (br.length - 1) + '"'
            });
            return new bp(bq, br)
        };

        function a4(bq, bs, br) {
            this.name = bq;
            this.value = bs;
            this.isDefault = br
        }
        a4.prototype.toString = function () {
            return this.name + " = " + this.value
        };

        function ak(bu, br) {
            var bv = bu.indexOf("=");
            var bq, bt, bs;
            if (bv < 0) {
                bq = bu;
                bt = br;
                bs = true
            } else {
                bq = bu.substring(0, bv);
                bt = aZ(bu.substring(bv + 1));
                bs = false
            }
            return new a4(a6(bq.replace(/(\s*"C\d+")+/g, "")), bt, bs)
        }
        function aT(bq) {
            if (bq === "int" || bq === "float") {
                return "0"
            }
            if (bq === "boolean") {
                return "false"
            }
            if (bq === "color") {
                return "0x00000000"
            }
            return "null"
        }
        function aI(br, bq) {
            this.definitions = br;
            this.varType = bq
        }
        aI.prototype.getNames = function () {
            var bs = [];
            for (var br = 0, bq = this.definitions.length; br < bq; ++br) {
                bs.push(this.definitions[br].name)
            }
            return bs
        };
        aI.prototype.toString = function () {
            return "var " + this.definitions.join(",")
        };

        function ah(bq) {
            this.expression = bq
        }
        ah.prototype.toString = function () {
            return this.expression.toString()
        };

        function bn(bu) {
            if (aM.test(bu)) {
                var bt = W.exec(bu);
                var bs = bu.substring(bt[0].length).split(",");
                var bq = aT(bt[2]);
                for (var br = 0; br < bs.length; ++br) {
                    bs[br] = ak(bs[br], bq)
                }
                return new aI(bs, bt[2])
            }
            return new ah(aZ(bu))
        }
        function a1(bq, bs, br) {
            this.initStatement = bq;
            this.condition = bs;
            this.step = br
        }
        a1.prototype.toString = function () {
            return "(" + this.initStatement + "; " + this.condition + "; " + this.step + ")"
        };

        function aS(br, bq) {
            this.initStatement = br;
            this.container = bq
        }
        aS.prototype.toString = function () {
            var bq = this.initStatement.toString();
            if (bq.indexOf("=") >= 0) {
                bq = bq.substring(0, bq.indexOf("="))
            }
            return "(" + bq + " in " + this.container + ")"
        };

        function aY(br, bq) {
            this.initStatement = br;
            this.container = bq
        }
        aY.iteratorId = 0;
        aY.prototype.toString = function () {
            var bu = this.initStatement.toString();
            var br = "$it" + aY.iteratorId++;
            var bt = bu.replace(/^\s*var\s*/, "").split("=")[0];
            var bs = "var " + br + " = new $p.ObjectIterator(" + this.container + "), " + bt + " = void(0)";
            var bq = br + ".hasNext() && ((" + bt + " = " + br + ".next()) || true)";
            return "(" + bs + "; " + bq + ";)"
        };

        function Y(br) {
            var bq;
            if (/\bin\b/.test(br)) {
                bq = br.substring(1, br.length - 1).split(/\bin\b/g);
                return new aS(bn(a6(bq[0])), aZ(bq[1]))
            }
            if (br.indexOf(":") >= 0 && br.indexOf(";") < 0) {
                bq = br.substring(1, br.length - 1).split(":");
                return new aY(bn(a6(bq[0])), aZ(bq[1]))
            }
            bq = br.substring(1, br.length - 1).split(";");
            return new a1(bn(a6(bq[0])), aZ(bq[1]), aZ(bq[2]))
        }
        function a2(bq) {
            bq.sort(function (bs, br) {
                return br.weight - bs.weight
            })
        }
        function ab(bs, bq, br) {
            this.name = bs;
            this.body = bq;
            this.isStatic = br;
            bq.owner = this
        }
        ab.prototype.toString = function () {
            return "" + this.body
        };

        function an(bs, bq, br) {
            this.name = bs;
            this.body = bq;
            this.isStatic = br;
            bq.owner = this
        }
        an.prototype.toString = function () {
            return "" + this.body
        };

        function T(bs) {
            var br = O.exec(bs);
            O.lastIndex = 0;
            var bt = br[1].indexOf("static") >= 0;
            var bq = bk[aQ(br[6])],
                bv;
            var bw = a9,
                bu = a7();
            a9 = bu;
            if (br[2] === "interface") {
                bv = new ab(br[3], S(bq, br[3], br[4]), bt)
            } else {
                bv = new an(br[3], V(bq, br[3], br[4], br[5]), bt)
            }
            bl(bv, bu, bw);
            a9 = bw;
            return bv
        }
        function ac(bs, bt, bq, br) {
            this.name = bs;
            this.params = bt;
            this.body = bq;
            this.isStatic = br
        }
        ac.prototype.toString = function () {
            var bt = av({}, this.params.getNames());
            var bs = al;
            al = function (bu) {
                return bt.hasOwnProperty(bu.name) ? bu.name : bs(bu)
            };
            var br = this.params.prependMethodArgs(this.body.toString());
            var bq = "function " + this.methodId + this.params + " " + br + "\n";
            al = bs;
            return bq
        };

        function P(bt) {
            var br = bb.exec(bt);
            bb.lastIndex = 0;
            var bs = br[1].indexOf("static") >= 0;
            var bq = br[6] !== ";" ? bk[aQ(br[6])] : "{}";
            return new ac(br[3], aD(bk[aQ(br[4])]), ap(bq), bs)
        }
        function am(bs, br, bq) {
            this.definitions = bs;
            this.fieldType = br;
            this.isStatic = bq
        }
        am.prototype.getNames = function () {
            var bs = [];
            for (var br = 0, bq = this.definitions.length; br < bq; ++br) {
                bs.push(this.definitions[br].name)
            }
            return bs
        };
        am.prototype.toString = function () {
            var bx = al({
                name: "[this]"
            });
            if (this.isStatic) {
                var bw = this.owner.name;
                var bu = [];
                for (var bv = 0, bt = this.definitions.length; bv < bt; ++bv) {
                    var bs = this.definitions[bv];
                    var bq = bs.name,
                        by = bw + "." + bq;
                    var br = "if(" + by + " === void(0)) {\n " + by + " = " + bs.value + "; }\n$p.defineProperty(" + bx + ", '" + bq + "', { get: function(){return " + by + ";}, set: function(val){" + by + " = val;} });\n";
                    bu.push(br)
                }
                return bu.join("")
            }
            return bx + "." + this.definitions.join("; " + bx + ".")
        };

        function bf(bv) {
            var bu = W.exec(bv);
            var bq = bu[1].indexOf("static") >= 0;
            var bt = bv.substring(bu[0].length).split(/,\s*/g);
            var br = aT(bu[2]);
            for (var bs = 0; bs < bt.length; ++bs) {
                bt[bs] = ak(bt[bs], br)
            }
            return new am(bt, bu[2], bq)
        }
        function aN(br, bq) {
            this.params = br;
            this.body = bq
        }
        aN.prototype.toString = function () {
            var bt = av({}, this.params.getNames());
            var br = al;
            al = function (bu) {
                return bt.hasOwnProperty(bu.name) ? bu.name : br(bu)
            };
            var bs = "function $constr_" + this.params.params.length + this.params.toString();
            var bq = this.params.prependMethodArgs(this.body.toString());
            if (!/\$(superCstr|constr)\b/.test(bq)) {
                bq = "{\n$superCstr();\n" + bq.substring(1)
            }
            al = br;
            return bs + bq + "\n"
        };

        function at(bs) {
            var bq = (new RegExp(/"B(\d+)"\s*"A(\d+)"/)).exec(bs);
            var br = aD(bk[bq[1]]);
            return new aN(br, ap(bk[bq[2]]))
        }
        function aO(bs, bv, bu, bq, bw, bx) {
            var bt, br;
            this.name = bs;
            this.interfacesNames = bv;
            this.methodsNames = bu;
            this.fields = bq;
            this.innerClasses = bw;
            this.misc = bx;
            for (bt = 0, br = bq.length; bt < br; ++bt) {
                bq[bt].owner = this
            }
        }
        aO.prototype.getMembers = function (bx, bq, bv) {
            if (this.owner.base) {
                this.owner.base.body.getMembers(bx, bq, bv)
            }
            var bu, bt, bs, br;
            for (bu = 0, bs = this.fields.length; bu < bs; ++bu) {
                var bz = this.fields[bu].getNames();
                for (bt = 0, br = bz.length; bt < br; ++bt) {
                    bx[bz[bt]] = this.fields[bu]
                }
            }
            for (bu = 0, bs = this.methodsNames.length; bu < bs; ++bu) {
                var bw = this.methodsNames[bu];
                bq[bw] = true
            }
            for (bu = 0, bs = this.innerClasses.length; bu < bs; ++bu) {
                var by = this.innerClasses[bu];
                bv[by.name] = by
            }
        };
        aO.prototype.toString = function () {
            function br(bH) {
                var bG = 0;
                while (bH) {
                    ++bG;
                    bH = bH.scope
                }
                return bG
            }
            var bA = br(this.owner);
            var bB = this.name;
            var bx = "";
            var bC = "";
            var bE = {}, bz = {}, by = {};
            this.getMembers(bE, bz, by);
            var bw, bu, bv, bt;
            if (this.owner.interfaces) {
                var bq = [],
                    bs;
                for (bw = 0, bu = this.interfacesNames.length; bw < bu; ++bw) {
                    if (!this.owner.interfaces[bw]) {
                        continue
                    }
                    bs = al({
                        name: this.interfacesNames[bw]
                    });
                    bq.push(bs);
                    bx += "$p.extendInterfaceMembers(" + bB + ", " + bs + ");\n"
                }
                bC += bB + ".$interfaces = [" + bq.join(", ") + "];\n"
            }
            bC += bB + ".$isInterface = true;\n";
            bC += bB + ".$methods = ['" + this.methodsNames.join("', '") + "'];\n";
            a2(this.innerClasses);
            for (bw = 0, bu = this.innerClasses.length; bw < bu; ++bw) {
                var bF = this.innerClasses[bw];
                if (bF.isStatic) {
                    bx += bB + "." + bF.name + " = " + bF + ";\n"
                }
            }
            for (bw = 0, bu = this.fields.length; bw < bu; ++bw) {
                var bD = this.fields[bw];
                if (bD.isStatic) {
                    bx += bB + "." + bD.definitions.join(";\n" + bB + ".") + ";\n"
                }
            }
            return "(function() {\nfunction " + bB + "() { throw 'Unable to create the interface'; }\n" + bx + bC + "return " + bB + ";\n})()"
        };
        S = function (bw, br, bB) {
            var bC = bw.substring(1, bw.length - 1);
            bC = ae(bC);
            bC = bd(bC, br);
            var bz = [],
                bt = [];
            bC = bC.replace(/"([DE])(\d+)"/g, function (bF, bE, bD) {
                if (bE === "D") {
                    bz.push(bD)
                } else {
                    if (bE === "E") {
                        bt.push(bD)
                    }
                }
                return ""
            });
            var bx = bC.split(/;(?:\s*;)*/g);
            var bu;
            var bv, bs;
            if (bB !== t) {
                bu = bB.replace(/^\s*extends\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g)
            }
            for (bv = 0, bs = bz.length; bv < bs; ++bv) {
                var bq = P(bk[bz[bv]]);
                bz[bv] = bq.name
            }
            for (bv = 0, bs = bx.length - 1; bv < bs; ++bv) {
                var bA = aP(bx[bv]);
                bx[bv] = bf(bA.middle)
            }
            var by = bx.pop();
            for (bv = 0, bs = bt.length; bv < bs; ++bv) {
                bt[bv] = T(bk[bt[bv]])
            }
            return new aO(br, bu, bz, bx, bt, {
                tail: by
            })
        };

        function aB(br, by, bx, bw, bs, bz, bA, bu, bq) {
            var bv, bt;
            this.name = br;
            this.baseClassName = by;
            this.interfacesNames = bx;
            this.functions = bw;
            this.methods = bs;
            this.fields = bz;
            this.cstrs = bA;
            this.innerClasses = bu;
            this.misc = bq;
            for (bv = 0, bt = bz.length; bv < bt; ++bv) {
                bz[bv].owner = this
            }
        }
        aB.prototype.getMembers = function (bx, br, bw) {
            if (this.owner.base) {
                this.owner.base.body.getMembers(bx, br, bw)
            }
            var bv, bu, bt, bs;
            for (bv = 0, bt = this.fields.length; bv < bt; ++bv) {
                var bz = this.fields[bv].getNames();
                for (bu = 0, bs = bz.length; bu < bs; ++bu) {
                    bx[bz[bu]] = this.fields[bv]
                }
            }
            for (bv = 0, bt = this.methods.length; bv < bt; ++bv) {
                var bq = this.methods[bv];
                br[bq.name] = bq
            }
            for (bv = 0, bt = this.innerClasses.length; bv < bt; ++bv) {
                var by = this.innerClasses[bv];
                bw[by.name] = by
            }
        };
        aB.prototype.toString = function () {
            function bN(bV) {
                var bU = 0;
                while (bV) {
                    ++bU;
                    bV = bV.scope
                }
                return bU
            }
            var bB = bN(this.owner);
            var bG = "$this_" + bB;
            var bs = this.name;
            var bx = "var " + bG + " = this;\n";
            var bH = "";
            var bz = "";
            var bS = {}, bT = {}, bJ = {};
            this.getMembers(bS, bT, bJ);
            var bR = al;
            al = function (bV) {
                var bU = bV.name;
                if (bU === "this") {
                    return bV.callSign || !bV.member ? bG + ".$self" : bG
                }
                if (bS.hasOwnProperty(bU)) {
                    return bS[bU].isStatic ? bs + "." + bU : bG + "." + bU
                }
                if (bJ.hasOwnProperty(bU)) {
                    return bG + "." + bU
                }
                if (bT.hasOwnProperty(bU)) {
                    return bT[bU].isStatic ? bs + "." + bU : bG + ".$self." + bU
                }
                return bR(bV)
            };
            var bA;
            if (this.baseClassName) {
                bA = bR({
                    name: this.baseClassName
                });
                bx += "var $super = { $upcast: " + bG + " };\n";
                bx += "function $superCstr(){" + bA + ".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n";
                bz += bs + ".$base = " + bA + ";\n"
            } else {
                bx += "function $superCstr(){$p.extendClassChain(" + bG + ")}\n"
            }
            if (this.owner.base) {
                bH += "$p.extendStaticMembers(" + bs + ", " + bA + ");\n"
            }
            var bM, bK, bL, bI;
            if (this.owner.interfaces) {
                var bw = [],
                    bq;
                for (bM = 0, bK = this.interfacesNames.length; bM < bK; ++bM) {
                    if (!this.owner.interfaces[bM]) {
                        continue
                    }
                    bq = bR({
                        name: this.interfacesNames[bM]
                    });
                    bw.push(bq);
                    bH += "$p.extendInterfaceMembers(" + bs + ", " + bq + ");\n"
                }
                bz += bs + ".$interfaces = [" + bw.join(", ") + "];\n"
            }
            if (this.functions.length > 0) {
                bx += this.functions.join("\n") + "\n"
            }
            a2(this.innerClasses);
            for (bM = 0, bK = this.innerClasses.length; bM < bK; ++bM) {
                var bD = this.innerClasses[bM];
                if (bD.isStatic) {
                    bH += bs + "." + bD.name + " = " + bD + ";\n";
                    bx += bG + "." + bD.name + " = " + bs + "." + bD.name + ";\n"
                } else {
                    bx += bG + "." + bD.name + " = " + bD + ";\n"
                }
            }
            for (bM = 0, bK = this.fields.length; bM < bK; ++bM) {
                var br = this.fields[bM];
                if (br.isStatic) {
                    bH += bs + "." + br.definitions.join(";\n" + bs + ".") + ";\n";
                    for (bL = 0, bI = br.definitions.length; bL < bI; ++bL) {
                        var bu = br.definitions[bL].name,
                            by = bs + "." + bu;
                        bx += "$p.defineProperty(" + bG + ", '" + bu + "', {get: function(){return " + by + "}, set: function(val){" + by + " = val}});\n"
                    }
                } else {
                    bx += bG + "." + br.definitions.join(";\n" + bG + ".") + ";\n"
                }
            }
            var bC = {};
            for (bM = 0, bK = this.methods.length; bM < bK; ++bM) {
                var bt = this.methods[bM];
                var bP = bC[bt.name];
                var bv = bt.name + "$" + bt.params.params.length;
                var bF = !! bt.params.methodArgsParam;
                if (bP) {
                    ++bP;
                    bv += "_" + bP
                } else {
                    bP = 1
                }
                bt.methodId = bv;
                bC[bt.name] = bP;
                if (bt.isStatic) {
                    bH += bt;
                    bH += "$p.addMethod(" + bs + ", '" + bt.name + "', " + bv + ", " + bF + ");\n";
                    bx += "$p.addMethod(" + bG + ", '" + bt.name + "', " + bv + ", " + bF + ");\n"
                } else {
                    bx += bt;
                    bx += "$p.addMethod(" + bG + ", '" + bt.name + "', " + bv + ", " + bF + ");\n"
                }
            }
            bx += a6(this.misc.tail);
            if (this.cstrs.length > 0) {
                bx += this.cstrs.join("\n") + "\n"
            }
            bx += "function $constr() {\n";
            var bQ = [];
            for (bM = 0, bK = this.cstrs.length; bM < bK; ++bM) {
                var bO = this.cstrs[bM].params.params.length;
                var bE = !! this.cstrs[bM].params.methodArgsParam;
                bQ.push("if(arguments.length " + (bE ? ">=" : "===") + " " + bO + ") { $constr_" + bO + ".apply(" + bG + ", arguments); }")
            }
            if (bQ.length > 0) {
                bx += bQ.join(" else ") + " else "
            }
            bx += "$superCstr();\n}\n";
            bx += "$constr.apply(null, arguments);\n";
            al = bR;
            return "(function() {\nfunction " + bs + "() {\n" + bx + "}\n" + bH + bz + "return " + bs + ";\n})()"
        };
        V = function (bz, br, bq, bC) {
            var bE = bz.substring(1, bz.length - 1);
            bE = ae(bE);
            bE = bd(bE, br);
            var bs = [],
                bt = [],
                bD = [],
                bw = [];
            bE = bE.replace(/"([DEGH])(\d+)"/g, function (bH, bG, bF) {
                if (bG === "D") {
                    bs.push(bF)
                } else {
                    if (bG === "E") {
                        bt.push(bF)
                    } else {
                        if (bG === "H") {
                            bw.push(bF)
                        } else {
                            bD.push(bF)
                        }
                    }
                }
                return ""
            });
            var by = bE.replace(/^(?:\s*;)+/, "").split(/;(?:\s*;)*/g);
            var bx, bv;
            var bu;
            if (bq !== t) {
                bx = bq.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g, "$1")
            }
            if (bC !== t) {
                bv = bC.replace(/^\s*implements\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g)
            }
            for (bu = 0; bu < bw.length; ++bu) {
                bw[bu] = aK(bk[bw[bu]])
            }
            for (bu = 0; bu < bs.length; ++bu) {
                bs[bu] = P(bk[bs[bu]])
            }
            for (bu = 0; bu < by.length - 1; ++bu) {
                var bB = aP(by[bu]);
                by[bu] = bf(bB.middle)
            }
            var bA = by.pop();
            for (bu = 0; bu < bD.length; ++bu) {
                bD[bu] = at(bk[bD[bu]])
            }
            for (bu = 0; bu < bt.length; ++bu) {
                bt[bu] = T(bk[bt[bu]])
            }
            return new aB(br, bx, bv, bw, bs, by, bD, bt, {
                tail: bA
            })
        };

        function aw(br, bq) {
            this.name = br;
            this.body = bq;
            bq.owner = this
        }
        aw.prototype.toString = function () {
            return "var " + this.name + " = " + this.body + ";\n$p." + this.name + " = " + this.name + ";\n"
        };

        function a5(br, bq) {
            this.name = br;
            this.body = bq;
            bq.owner = this
        }
        a5.prototype.toString = function () {
            return "var " + this.name + " = " + this.body + ";\n$p." + this.name + " = " + this.name + ";\n"
        };

        function bo(bs) {
            var br = O.exec(bs);
            O.lastIndex = 0;
            var bq = bk[aQ(br[6])];
            var bv = a9,
                bt = a7();
            a9 = bt;
            var bu;
            if (br[2] === "interface") {
                bu = new aw(br[3], S(bq, br[3], br[4]))
            } else {
                bu = new a5(br[3], V(bq, br[3], br[4], br[5]))
            }
            bl(bu, bt, bv);
            a9 = bv;
            return bu
        }
        function aR(br, bs, bq) {
            this.name = br;
            this.params = bs;
            this.body = bq
        }
        aR.prototype.toString = function () {
            var bt = av({}, this.params.getNames());
            var bs = al;
            al = function (bu) {
                return bt.hasOwnProperty(bu.name) ? bu.name : bs(bu)
            };
            var br = this.params.prependMethodArgs(this.body.toString());
            var bq = "function " + this.name + this.params + " " + br + "\n$p." + this.name + " = " + this.name + ";";
            al = bs;
            return bq
        };

        function aW(bs) {
            var br = bb.exec(bs);
            var bq = bb.lastIndex = 0;
            return new aR(br[3], aD(bk[aQ(br[4])]), ap(bk[aQ(br[6])]))
        }
        function ag(bq) {
            var br = bq;
            br = br.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g, "$1");
            return br
        }
        function aU(bq, br) {
            this.argument = bq;
            this.misc = br
        }
        aU.prototype.toString = function () {
            return this.misc.prefix + this.argument.toString()
        };

        function Q(bq, br) {
            this.argument = bq;
            this.misc = br
        }
        Q.prototype.toString = function () {
            return this.misc.prefix + this.argument.toString()
        };

        function ax(bq, br, bs) {
            this.name = bq;
            this.argument = br;
            this.misc = bs
        }
        ax.prototype.toString = function () {
            var bq = this.misc.prefix;
            if (this.argument !== t) {
                bq += this.argument.toString()
            }
            return bq
        };

        function aL(bq) {
            this.expr = bq
        }
        aL.prototype.toString = function () {
            return "case " + this.expr + ":"
        };

        function X(bq) {
            this.label = bq
        }
        X.prototype.toString = function () {
            return this.label
        };
        aV = function (by, bz, bs) {
            var bD = new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g);
            var bA = [];
            by = ag(by);
            var bx = 0,
                bt, br;
            while ((bt = bD.exec(by)) !== null) {
                if (bt[1] !== t) {
                    var bw = by.lastIndexOf('"B', bD.lastIndex);
                    var bC = by.substring(bx, bw);
                    if (bt[1] === "for") {
                        bA.push(new aU(Y(bk[bt[2]]), {
                            prefix: bC
                        }))
                    } else {
                        if (bt[1] === "catch") {
                            bA.push(new Q(aD(bk[bt[2]]), {
                                prefix: bC
                            }))
                        } else {
                            bA.push(new ax(bt[1], aZ(bk[bt[2]]), {
                                prefix: bC
                            }))
                        }
                    }
                } else {
                    if (bt[3] !== t) {
                        bA.push(new ax(bt[3], t, {
                            prefix: by.substring(bx, bD.lastIndex)
                        }))
                    } else {
                        if (bt[4] !== t) {
                            br = by.substring(bx, bD.lastIndex - bt[4].length);
                            if (a6(br).length !== 0) {
                                continue
                            }
                            bA.push(br);
                            var bu = bt[4].charAt(1),
                                bq = bt[5];
                            if (bu === "D") {
                                bA.push(bz(bk[bq]))
                            } else {
                                if (bu === "E") {
                                    bA.push(bs(bk[bq]))
                                } else {
                                    if (bu === "H") {
                                        bA.push(aK(bk[bq]))
                                    } else {
                                        bA.push(ap(bk[bq]))
                                    }
                                }
                            }
                        } else {
                            if (bt[6] !== t) {
                                bA.push(new aL(aZ(a6(bt[7]))))
                            } else {
                                if (bt[8] !== t) {
                                    br = by.substring(bx, bD.lastIndex - bt[8].length);
                                    if (a6(br).length !== 0) {
                                        continue
                                    }
                                    bA.push(new X(by.substring(bx, bD.lastIndex)))
                                } else {
                                    var bB = aP(by.substring(bx, bD.lastIndex - 1));
                                    bA.push(bB.left);
                                    bA.push(bn(bB.middle));
                                    bA.push(bB.right + ";")
                                }
                            }
                        }
                    }
                }
                bx = bD.lastIndex
            }
            var bv = aP(by.substring(bx));
            bA.push(bv.left);
            if (bv.middle !== "") {
                bA.push(bn(bv.middle));
                bA.push(";" + bv.right)
            }
            return bA
        };

        function be(br) {
            var bs = [];
            for (var bt = 0, bq = br.length; bt < bq; ++bt) {
                var bu = br[bt];
                if (bu instanceof aI) {
                    bs = bs.concat(bu.getNames())
                } else {
                    if (bu instanceof aU && bu.argument.initStatement instanceof aI) {
                        bs = bs.concat(bu.argument.initStatement.getNames())
                    } else {
                        if (bu instanceof ab || bu instanceof an || bu instanceof aw || bu instanceof a5 || bu instanceof aR || bu instanceof af) {
                            bs.push(bu.name)
                        }
                    }
                }
            }
            return av({}, bs)
        }
        function U(bq) {
            this.statements = bq
        }
        U.prototype.toString = function () {
            var bs = be(this.statements);
            var br = al;
            if (!ba(bs)) {
                al = function (bt) {
                    return bs.hasOwnProperty(bt.name) ? bt.name : br(bt)
                }
            }
            var bq = "{\n" + this.statements.join("") + "\n}";
            al = br;
            return bq
        };
        ap = function (br) {
            var bq = aP(br.substring(1, br.length - 1));
            return new U(aV(bq.middle))
        };

        function aG(bq) {
            this.statements = bq
        }
        aG.prototype.toString = function () {
            var bu = [],
                bv = [],
                bw;
            for (var bt = 0, br = this.statements.length; bt < br; ++bt) {
                bw = this.statements[bt];
                if (bw instanceof a5 || bw instanceof aw) {
                    bu.push(bw)
                } else {
                    bv.push(bw)
                }
            }
            a2(bu);
            var bs = be(this.statements);
            al = function (by) {
                var bx = by.name;
                if (bs.hasOwnProperty(bx)) {
                    return bx
                }
                if (aX.hasOwnProperty(bx) || B.hasOwnProperty(bx) || g.hasOwnProperty(bx)) {
                    return "$p." + bx
                }
                return bx
            };
            var bq = "// this code was autogenerated from PJS\n(function($p) {\n" + bu.join("") + "\n" + bv.join("") + "\n})";
            al = null;
            return bq
        };
        bi = function () {
            var bq = ae(bk[0]);
            bq = bq.replace(/\bimport\s+[^;]+;/g, "");
            return new aG(aV(bq, aW, bo))
        };

        function bj(bq) {
            var bu = {};
            var bs, by;
            for (bs in aJ) {
                if (aJ.hasOwnProperty(bs)) {
                    by = aJ[bs];
                    var bE = by.scopeId,
                        br = by.name;
                    if (bE) {
                        var bD = aJ[bE];
                        by.scope = bD;
                        if (bD.inScope === t) {
                            bD.inScope = {}
                        }
                        bD.inScope[br] = by
                    } else {
                        bu[br] = by
                    }
                }
            }
            function bB(bF, bI) {
                var bL = bI.split(".");
                var bH = bF.scope,
                    bK;
                while (bH) {
                    if (bH.hasOwnProperty(bL[0])) {
                        bK = bH[bL[0]];
                        break
                    }
                    bH = bH.scope
                }
                if (bK === t) {
                    bK = bu[bL[0]]
                }
                for (var bJ = 1, bG = bL.length; bJ < bG && bK; ++bJ) {
                    bK = bK.inScope[bL[bJ]]
                }
                return bK
            }
            for (bs in aJ) {
                if (aJ.hasOwnProperty(bs)) {
                    by = aJ[bs];
                    var bx = by.body.baseClassName;
                    if (bx) {
                        var bA = bB(by, bx);
                        if (bA) {
                            by.base = bA;
                            if (!bA.derived) {
                                bA.derived = []
                            }
                            bA.derived.push(by)
                        }
                    }
                    var bw = by.body.interfacesNames,
                        bC = [],
                        bv, bt;
                    if (bw && bw.length > 0) {
                        for (bv = 0, bt = bw.length; bv < bt; ++bv) {
                            var bz = bB(by, bw[bv]);
                            bC.push(bz);
                            if (!bz) {
                                continue
                            }
                            if (!bz.derived) {
                                bz.derived = []
                            }
                            bz.derived.push(by)
                        }
                        if (bC.length > 0) {
                            by.interfaces = bC
                        }
                    }
                }
            }
        }
        function a8(bq) {
            var bv = [],
                bs = {};
            var br, by, bw;
            for (br in aJ) {
                if (aJ.hasOwnProperty(br)) {
                    bw = aJ[br];
                    if (!bw.inScope && !bw.derived) {
                        bv.push(br);
                        bw.weight = 0
                    } else {
                        var bx = [];
                        if (bw.inScope) {
                            for (by in bw.inScope) {
                                if (bw.inScope.hasOwnProperty(by)) {
                                    bx.push(bw.inScope[by])
                                }
                            }
                        }
                        if (bw.derived) {
                            bx = bx.concat(bw.derived)
                        }
                        bs[br] = bx
                    }
                }
            }
            function bz(bB, bD) {
                var bA = bs[bB];
                if (!bA) {
                    return false
                }
                var bC = bA.indexOf(bD);
                if (bC < 0) {
                    return false
                }
                bA.splice(bC, 1);
                if (bA.length > 0) {
                    return false
                }
                delete bs[bB];
                return true
            }
            while (bv.length > 0) {
                br = bv.shift();
                bw = aJ[br];
                if (bw.scopeId && bz(bw.scopeId, bw)) {
                    bv.push(bw.scopeId);
                    aJ[bw.scopeId].weight = bw.weight + 1
                }
                if (bw.base && bz(bw.base.classId, bw)) {
                    bv.push(bw.base.classId);
                    bw.base.weight = bw.weight + 1
                }
                if (bw.interfaces) {
                    var bu, bt;
                    for (bu = 0, bt = bw.interfaces.length; bu < bt; ++bu) {
                        if (!bw.interfaces[bu] || !bz(bw.interfaces[bu].classId, bw)) {
                            continue
                        }
                        bv.push(bw.interfaces[bu].classId);
                        bw.interfaces[bu].weight = bw.weight + 1
                    }
                }
            }
        }
        var bh = bi();
        bj(bh);
        a8(bh);
        var a0 = bh.toString();
        a0 = a0.replace(/\s*\n(?:[\t ]*\n)+/g, "\n\n");
        a0 = a0.replace(/__x([0-9A-F]{4})/g, function (br, bq) {
            return String.fromCharCode(parseInt(bq, 16))
        });
        return aj(a0, N)
    }
    function z(O, ad) {
        var X = (new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g)).exec(O);
        if (X && X.length === 2) {
            var N = [],
                Q = X.splice(1, 2)[0].replace(/\{([\s\S]*?)\}/g, function () {
                    return function (ag, ah) {
                        N.push(ah);
                        return "{" + (N.length - 1) + "}"
                    }
                }()).replace("\n", "").replace("\r", "").split(";");
            var W = function (ag) {
                return ag.replace(/^\s*["']?/, "").replace(/["']?\s*$/, "")
            };
            for (var aa = 0, Y = Q.length; aa < Y; aa++) {
                var U = Q[aa].split("=");
                if (U && U.length === 2) {
                    var af = W(U[0]),
                        V = W(U[1]),
                        ae = [];
                    if (af === "preload") {
                        ae = V.split(",");
                        for (var Z = 0, ab = ae.length; Z < ab; Z++) {
                            var ac = W(ae[Z]);
                            ad.imageCache.add(ac)
                        }
                    } else {
                        if (af === "font") {
                            ae = V.split(",");
                            for (var R = 0, T = ae.length; R < T; R++) {
                                var S = W(ae[R]),
                                    P = /^\{(\d*?)\}$/.exec(S);
                                H.preloading.add(P ? JSON.parse("{" + N[P[1]] + "}") : S)
                            }
                        } else {
                            if (af === "pauseOnBlur") {
                                ad.options.pauseOnBlur = V === "true"
                            } else {
                                if (af === "globalKeyEvents") {
                                    ad.options.globalKeyEvents = V === "true"
                                } else {
                                    if (af.substring(0, 6) === "param-") {
                                        ad.params[af.substring(6)] = V
                                    } else {
                                        ad.options[af] = V
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return O
    }
    F.compile = function (N) {
        var Q = new F.Sketch;
        var O = z(N, Q);
        var P = c(O);
        Q.sourceCode = P;
        return Q
    };
    var j = function () {
        var T = {}, Q = "undefined",
            R = "function",
            N = !1,
            S = !0,
            O = 512,
            P = "log";
        if (typeof tinylog !== Q && typeof tinylog[P] === R) {
            T[P] = tinylog[P]
        } else {
            if (typeof d !== Q && !d.fake) {
                (function () {
                    var ao = d,
                        am = "div",
                        ac = "style",
                        ag = "title",
                        ab = {
                            zIndex: 10000,
                            position: "fixed",
                            bottom: "0px",
                            width: "100%",
                            height: "15%",
                            fontFamily: "sans-serif",
                            color: "#ccc",
                            backgroundColor: "black"
                        }, ae = {
                            position: "relative",
                            fontFamily: "monospace",
                            overflow: "auto",
                            height: "100%",
                            paddingTop: "5px"
                        }, ai = {
                            height: "5px",
                            marginTop: "-5px",
                            cursor: "n-resize",
                            backgroundColor: "darkgrey"
                        }, an = {
                            position: "absolute",
                            top: "5px",
                            right: "20px",
                            color: "#111",
                            MozBorderRadius: "4px",
                            webkitBorderRadius: "4px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: "normal",
                            textAlign: "center",
                            padding: "3px 5px",
                            backgroundColor: "#333",
                            fontSize: "12px"
                        }, Y = {
                            minHeight: "16px"
                        }, af = {
                            fontSize: "12px",
                            margin: "0 8px 0 8px",
                            maxWidth: "100%",
                            whiteSpace: "pre-wrap",
                            overflow: "auto"
                        }, ad = ao.defaultView,
                        al = ao.documentElement,
                        U = al[ac],
                        W = function () {
                            var aq = arguments.length,
                                ap, at, ar;
                            while (aq--) {
                                at = arguments[aq--];
                                ap = arguments[aq][ac];
                                for (ar in at) {
                                    if (at.hasOwnProperty(ar)) {
                                        ap[ar] = at[ar]
                                    }
                                }
                            }
                        }, aj = function (ar, aq, ap) {
                            if (ar.addEventListener) {
                                ar.addEventListener(aq, ap, N)
                            } else {
                                if (ar.attachEvent) {
                                    ar.attachEvent("on" + aq, ap)
                                }
                            }
                            return [ar, aq, ap]
                        }, V = function (ar, aq, ap) {
                            if (ar.removeEventListener) {
                                ar.removeEventListener(aq, ap, N)
                            } else {
                                if (ar.detachEvent) {
                                    ar.detachEvent("on" + aq, ap)
                                }
                            }
                        }, aa = function (aq) {
                            var ap = aq.childNodes,
                                ar = ap.length;
                            while (ar--) {
                                aq.removeChild(ap.item(0))
                            }
                        }, ak = function (aq, ap) {
                            return aq.appendChild(ap)
                        }, ah = function (ap) {
                            return ao.createElement(ap)
                        }, Z = function (ap) {
                            return ao.createTextNode(ap)
                        }, X = T[P] = function (aE) {
                            var aw, ax = U.paddingBottom,
                                ar = ah(am),
                                aB = ar[ac],
                                aC = ak(ar, ah(am)),
                                au = ak(ar, ah(am)),
                                at = ak(ar, ah(am)),
                                aD = N,
                                av = N,
                                aq = N,
                                ay = 0,
                                ap = function () {
                                    U.paddingBottom = ar.clientHeight + "px"
                                }, aA = function (aF) {
                                    var aG = ad.innerHeight,
                                        aH = aC.clientHeight;
                                    if (aF < 0) {
                                        aF = 0
                                    } else {
                                        if (aF + aH > aG) {
                                            aF = aG - aH
                                        }
                                    }
                                    aB.height = aF / aG * 100 + "%";
                                    ap()
                                }, az = [aj(ao, "mousemove", function (aF) {
                                    if (aD) {
                                        aA(ad.innerHeight - aF.clientY);
                                        au.scrollTop = aq
                                    }
                                }), aj(ao, "mouseup", function () {
                                    if (aD) {
                                        aD = aq = N
                                    }
                                }), aj(aC, "dblclick", function (aF) {
                                    aF.preventDefault();
                                    if (av) {
                                        aA(av);
                                        av = N
                                    } else {
                                        av = ar.clientHeight;
                                        aB.height = "0px"
                                    }
                                }), aj(aC, "mousedown", function (aF) {
                                    aF.preventDefault();
                                    aD = S;
                                    aq = au.scrollTop
                                }), aj(aC, "contextmenu", function () {
                                    aD = N
                                }), aj(at, "click", function () {
                                    aw()
                                })];
                            aw = function () {
                                var aF = az.length;
                                while (aF--) {
                                    V.apply(T, az[aF])
                                }
                                al.removeChild(ar);
                                U.paddingBottom = ax;
                                aa(au);
                                aa(ar);
                                T[P] = X
                            };
                            W(ar, ab, au, ae, aC, ai, at, an);
                            at[ag] = "Close Log";
                            ak(at, Z("\u2716"));
                            aC[ag] = "Double-click to toggle log minimization";
                            al.insertBefore(ar, al.firstChild);
                            T[P] = function (aH) {
                                if (ay === O) {
                                    au.removeChild(au.firstChild)
                                } else {
                                    ay++
                                }
                                var aG = ak(au, ah(am)),
                                    aF = ak(aG, ah(am));
                                aG[ag] = (new Date).toLocaleTimeString();
                                W(aG, Y, aF, af);
                                ak(aF, Z(aH));
                                au.scrollTop = au.scrollHeight
                            };
                            T[P](aE);
                            ap()
                        }
                })()
            } else {
                if (typeof print === R) {
                    T[P] = print
                }
            }
        }
        return T
    }();
    F.logger = j;
    F.version = "1.4.1";
    F.lib = {};
    F.registerLibrary = function (N, O) {
        F.lib[N] = O;
        if (O.hasOwnProperty("init")) {
            O.init(g)
        }
    };
    F.instances = k;
    F.getInstanceById = function (N) {
        return k[J[N]]
    };
    F.Sketch = function (N) {
        this.attachFunction = N;
        this.options = {
            pauseOnBlur: false,
            globalKeyEvents: false
        };
        this.onLoad = G;
        this.onSetup = G;
        this.onPause = G;
        this.onLoop = G;
        this.onFrameStart = G;
        this.onFrameEnd = G;
        this.onExit = G;
        this.params = {};
        this.imageCache = {
            pending: 0,
            images: {},
            operaCache: {},
            add: function (P, O) {
                if (this.images[P]) {
                    return
                }
                if (!n) {
                    this.images[P] = null
                }
                if (!O) {
                    O = new Image;
                    O.onload = function (R) {
                        return function () {
                            R.pending--
                        }
                    }(this);
                    this.pending++;
                    O.src = P
                }
                this.images[P] = O;
                if (D.opera) {
                    var Q = d.createElement("div");
                    Q.appendChild(O);
                    Q.style.position = "absolute";
                    Q.style.opacity = 0;
                    Q.style.width = "1px";
                    Q.style.height = "1px";
                    if (!this.operaCache[P]) {
                        d.body.appendChild(Q);
                        this.operaCache[P] = Q
                    }
                }
            }
        };
        this.sourceCode = undefined;
        this.attach = function (P) {
            if (typeof this.attachFunction === "function") {
                this.attachFunction(P)
            } else {
                if (this.sourceCode) {
                    var O = (new Function("return (" + this.sourceCode + ");"))();
                    O(P);
                    this.attachFunction = O
                } else {
                    throw "Unable to attach sketch to the processing instance"
                }
            }
        };
        this.toString = function () {
            var O;
            var P = "((function(Sketch) {\n";
            P += "var sketch = new Sketch(\n" + this.sourceCode + ");\n";
            for (O in this.options) {
                if (this.options.hasOwnProperty(O)) {
                    var Q = this.options[O];
                    P += "sketch.options." + O + " = " + (typeof Q === "string" ? '"' + Q + '"' : "" + Q) + ";\n"
                }
            }
            for (O in this.imageCache) {
                if (this.options.hasOwnProperty(O)) {
                    P += 'sketch.imageCache.add("' + O + '");\n'
                }
            }
            P += "return sketch;\n})(Processing.Sketch))";
            return P
        }
    };
    var v = function (Q, N) {
        var O = [],
            U = [],
            V = N.length,
            S = 0;

        function T(W, Y) {
            var X = new XMLHttpRequest;
            X.onreadystatechange = function () {
                if (X.readyState === 4) {
                    var Z;
                    if (X.status !== 200 && X.status !== 0) {
                        Z = "Invalid XHR status " + X.status
                    } else {
                        if (X.responseText === "") {
                            if ("withCredentials" in new XMLHttpRequest && (new XMLHttpRequest).withCredentials === false && D.location.protocol === "file:") {
                                Z = "XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions."
                            } else {
                                Z = "File is empty."
                            }
                        }
                    }
                    Y(X.responseText, Z)
                }
            };
            X.open("GET", W, true);
            if (X.overrideMimeType) {
                X.overrideMimeType("application/json")
            }
            X.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
            X.send(null)
        }
        function P(X, W) {
            function Z(ac, aa) {
                O[X] = ac;
                ++S;
                if (aa) {
                    U.push(W + " ==> " + aa)
                }
                if (S === V) {
                    if (U.length === 0) {
                        try {
                            return new F(Q, O.join("\n"))
                        } catch (ab) {
                            throw "Processing.js: Unable to execute pjs sketch: " + ab
                        }
                    } else {
                        throw "Processing.js: Unable to load pjs sketch files: " + U.join("\n")
                    }
                }
            }
            if (W.charAt(0) === "#") {
                var Y = d.getElementById(W.substring(1));
                if (Y) {
                    Z(Y.text || Y.textContent)
                } else {
                    Z("", "Unable to load pjs sketch: element with id '" + W.substring(1) + "' was not found")
                }
                return
            }
            T(W, Z)
        }
        for (var R = 0; R < V; ++R) {
            P(R, N[R])
        }
    };
    var I = function () {
        d.removeEventListener("DOMContentLoaded", I, false);
        k = [];
        var O = d.getElementsByTagName("canvas"),
            U;
        for (var T = 0, P = O.length; T < P; T++) {
            var W = O[T].getAttribute("data-processing-sources");
            if (W === null) {
                W = O[T].getAttribute("data-src");
                if (W === null) {
                    W = O[T].getAttribute("datasrc")
                }
            }
            if (W) {
                U = W.split(/\s+/g);
                for (var S = 0; S < U.length;) {
                    if (U[S]) {
                        S++
                    } else {
                        U.splice(S, 1)
                    }
                }
                v(O[T], U)
            }
        }
        var ac, aa, N, Z, ab = d.getElementsByTagName("script"),
            Q = [];
        for (ac = ab.length - 1; ac >= 0; ac--) {
            Q.push(ab[ac])
        }
        for (ac = 0, aa = Q.length; ac < aa; ac++) {
            var Y = Q[ac];
            if (!Y.getAttribute) {
                continue
            }
            var X = Y.getAttribute("type");
            if (X && (X.toLowerCase() === "text/processing" || X.toLowerCase() === "application/processing")) {
                var V = Y.getAttribute("data-processing-target");
                O = t;
                if (V) {
                    O = d.getElementById(V)
                } else {
                    var R = Y.nextSibling;
                    while (R && R.nodeType !== 1) {
                        R = R.nextSibling
                    }
                    if (R && R.nodeName.toLowerCase() === "canvas") {
                        O = R
                    }
                }
                if (O) {
                    if (Y.getAttribute("src")) {
                        U = Y.getAttribute("src").split(/\s+/);
                        v(O, U);
                        continue
                    }
                    N = Y.textContent || Y.text;
                    Z = new F(O, N)
                }
            }
        }
    };
    F.reload = function () {
        if (k.length > 0) {
            for (var N = k.length - 1; N >= 0; N--) {
                if (k[N]) {
                    k[N].exit()
                }
            }
        }
        I()
    };
    F.loadSketchFromSources = v;
    F.disableInit = function () {
        if (n) {
            d.removeEventListener("DOMContentLoaded", I, false)
        }
    };
    if (n) {
        D.Processing = F;
        d.addEventListener("DOMContentLoaded", I, false)
    } else {
        this.Processing = F
    }
})(window, window.document, Math);