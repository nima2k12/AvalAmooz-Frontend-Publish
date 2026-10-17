(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_barcode-generator_barcode-generator_module_ts"],{

/***/ 66578:
/*!****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/barcode-generator/barcode-generator-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeGeneratorRoutingModule": () => (/* binding */ BarcodeGeneratorRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _barcode_generator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-generator.component */ 43883);




const routes = [{ path: '', component: _barcode_generator_component__WEBPACK_IMPORTED_MODULE_0__.BarcodeGeneratorComponent }];
let BarcodeGeneratorRoutingModule = class BarcodeGeneratorRoutingModule {
};
BarcodeGeneratorRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], BarcodeGeneratorRoutingModule);



/***/ }),

/***/ 43883:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/barcode-generator/barcode-generator.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeGeneratorComponent": () => (/* binding */ BarcodeGeneratorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _barcode_generator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-generator.component.html?ngResource */ 88730);
/* harmony import */ var _barcode_generator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-generator.component.scss?ngResource */ 85594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _vendor_qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/qrcode */ 73090);
/* harmony import */ var _vendor_qrcode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_qrcode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code128__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code128 */ 90596);








let BarcodeGeneratorComponent = class BarcodeGeneratorComponent {
    constructor(router, sanitizer) {
        this.sanitizer = sanitizer;
        this.codeType = 'barcode';
        this.inputText = '';
        this.errorMessage = '';
        this.previewUrl = null;
        this.generatedValue = '';
        this.generatedType = null;
        this.generatedSvg = '';
        this.previewObjectUrl = '';
        this.backUrl = router.url.startsWith('/SuperAdminPanel') ? '/SuperAdminPanel' : '/AdminPanel';
    }
    ngOnDestroy() {
        this.clearResult();
    }
    selectType(type) {
        if (this.codeType !== type) {
            this.codeType = type;
            this.clearResult();
        }
    }
    clearResult() {
        if (this.previewObjectUrl) {
            URL.revokeObjectURL(this.previewObjectUrl);
        }
        this.previewObjectUrl = '';
        this.previewUrl = null;
        this.generatedSvg = '';
        this.generatedValue = '';
        this.generatedType = null;
        this.errorMessage = '';
    }
    generate() {
        this.clearResult();
        const value = this.inputText;
        if (!value.trim()) {
            this.errorMessage = 'ابتدا متن موردنظر را وارد کنید.';
            return;
        }
        try {
            if (this.codeType === 'barcode') {
                if (!/^[\x20-\x7E]+$/.test(value)) {
                    this.errorMessage = 'بارکد Code 128 فقط حروف انگلیسی، عدد و نشانه‌های معمول را می‌پذیرد. برای متن فارسی از QR کد استفاده کنید.';
                    return;
                }
                this.generatedSvg = (0,_code128__WEBPACK_IMPORTED_MODULE_3__.createCode128Svg)(value);
            }
            else {
                (_vendor_qrcode__WEBPACK_IMPORTED_MODULE_2___default().stringToBytes) = (_vendor_qrcode__WEBPACK_IMPORTED_MODULE_2___default().stringToBytesFuncs["UTF-8"]);
                const qr = _vendor_qrcode__WEBPACK_IMPORTED_MODULE_2___default()(0, 'M');
                qr.addData(value, 'Byte');
                qr.make();
                this.generatedSvg = qr.createSvgTag({ cellSize: 8, margin: 32 });
            }
            this.previewObjectUrl = URL.createObjectURL(new Blob([this.generatedSvg], { type: 'image/svg+xml' }));
            this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(this.previewObjectUrl);
            this.generatedValue = value;
            this.generatedType = this.codeType;
        }
        catch (error) {
            this.clearResult();
            this.errorMessage = this.codeType === 'qr'
                ? 'متن برای QR کد بیش از حد بلند است. متن کوتاه‌تری وارد کنید.'
                : 'بارکد برای چاپ خوانا بیش از حد بلند است. متن کوتاه‌تری وارد کنید یا QR کد بسازید.';
        }
    }
    print() {
        if (!this.generatedSvg || !this.generatedType) {
            return;
        }
        const frame = document.createElement('iframe');
        frame.title = 'چاپ بارکد و QR کد';
        frame.setAttribute('aria-hidden', 'true');
        frame.style.cssText = 'position:fixed;left:0;bottom:0;width:1px;height:1px;border:0;opacity:0';
        const label = this.generatedType === 'qr' ? 'QR کد' : 'بارکد Code 128';
        const safeValue = this.escapeHtml(this.generatedValue);
        frame.srcdoc = `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><title>${label}</title>
      <style>@page{margin:12mm}body{font-family:Arial,sans-serif;color:#111;background:#fff;margin:0}
      main{text-align:center;padding:12mm 0}h1{font-size:16px;font-weight:600;margin:0 0 18mm}
      svg{display:block;max-width:100%;max-height:140mm;width:auto;height:auto;margin:0 auto}
      p{direction:auto;unicode-bidi:plaintext;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;margin:8mm auto 0;max-width:180mm}</style>
      </head><body><main><h1>${label}</h1>${this.generatedSvg}<p>${safeValue}</p></main></body></html>`;
        frame.onload = () => {
            const printWindow = frame.contentWindow;
            if (!printWindow) {
                frame.remove();
                return;
            }
            printWindow.addEventListener('afterprint', () => frame.remove(), { once: true });
            printWindow.focus();
            printWindow.print();
            window.setTimeout(() => frame.remove(), 60000);
        };
        document.body.appendChild(frame);
    }
    escapeHtml(value) {
        return value.replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[character]));
    }
};
BarcodeGeneratorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }
];
BarcodeGeneratorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-barcode-generator',
        template: _barcode_generator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_barcode_generator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BarcodeGeneratorComponent);



/***/ }),

/***/ 28320:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/barcode-generator/barcode-generator.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeGeneratorModule": () => (/* binding */ BarcodeGeneratorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _barcode_generator_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-generator-routing.module */ 66578);
/* harmony import */ var _barcode_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barcode-generator.component */ 43883);








let BarcodeGeneratorModule = class BarcodeGeneratorModule {
};
BarcodeGeneratorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_barcode_generator_component__WEBPACK_IMPORTED_MODULE_2__.BarcodeGeneratorComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _barcode_generator_routing_module__WEBPACK_IMPORTED_MODULE_1__.BarcodeGeneratorRoutingModule
        ]
    })
], BarcodeGeneratorModule);



/***/ }),

/***/ 90596:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/barcode-generator/code128.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCode128Svg": () => (/* binding */ createCode128Svg)
/* harmony export */ });
// Code 128 symbol patterns from JsBarcode (MIT), see vendor/JsBarcode-LICENSE.txt.
const patterns = [
    11011001100, 11001101100, 11001100110, 10010011000, 10010001100,
    10001001100, 10011001000, 10011000100, 10001100100, 11001001000,
    11001000100, 11000100100, 10110011100, 10011011100, 10011001110,
    10111001100, 10011101100, 10011100110, 11001110010, 11001011100,
    11001001110, 11011100100, 11001110100, 11101101110, 11101001100,
    11100101100, 11100100110, 11101100100, 11100110100, 11100110010,
    11011011000, 11011000110, 11000110110, 10100011000, 10001011000,
    10001000110, 10110001000, 10001101000, 10001100010, 11010001000,
    11000101000, 11000100010, 10110111000, 10110001110, 10001101110,
    10111011000, 10111000110, 10001110110, 11101110110, 11010001110,
    11000101110, 11011101000, 11011100010, 11011101110, 11101011000,
    11101000110, 11100010110, 11101101000, 11101100010, 11100011010,
    11101111010, 11001000010, 11110001010, 10100110000, 10100001100,
    10010110000, 10010000110, 10000101100, 10000100110, 10110010000,
    10110000100, 10011010000, 10011000010, 10000110100, 10000110010,
    11000010010, 11001010000, 11110111010, 11000010100, 10001111010,
    10100111100, 10010111100, 10010011110, 10111100100, 10011110100,
    10011110010, 11110100100, 11110010100, 11110010010, 11011011110,
    11011110110, 11110110110, 10101111000, 10100011110, 10001011110,
    10111101000, 10111100010, 11110101000, 11110100010, 10111011110,
    10111101110, 11101011110, 11110101110, 11010000100, 11010010000,
    11010011100, 1100011101011
];
function createCode128Svg(value) {
    const numeric = /^\d+$/.test(value) && value.length % 2 === 0;
    const codes = [numeric ? 105 : 104]; // Start C or Start B.
    if (numeric) {
        for (let i = 0; i < value.length; i += 2) {
            codes.push(Number(value.slice(i, i + 2)));
        }
    }
    else {
        for (const character of value) {
            codes.push(character.charCodeAt(0) - 32);
        }
    }
    let checksum = codes[0];
    for (let i = 1; i < codes.length; i++) {
        checksum += codes[i] * i;
    }
    codes.push(checksum % 103, 106);
    const modules = codes.map(code => patterns[code].toString()).join('');
    if (modules.length > 650) {
        throw new Error('Barcode is too wide for a readable print');
    }
    const moduleWidth = 2;
    const quietZone = 10;
    const width = (modules.length + quietZone * 2) * moduleWidth;
    let bars = '';
    for (let i = 0; i < modules.length;) {
        if (modules[i] === '0') {
            i++;
            continue;
        }
        const start = i;
        while (i < modules.length && modules[i] === '1') {
            i++;
        }
        const x = (start + quietZone) * moduleWidth;
        bars += `M${x} 10h${(i - start) * moduleWidth}v90h-${(i - start) * moduleWidth}z`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="110" viewBox="0 0 ${width} 110" role="img" aria-label="Code 128 barcode"><rect width="${width}" height="110" fill="#fff"/><path d="${bars}" fill="#000"/></svg>`;
}


/***/ }),

/***/ 73090:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/barcode-generator/vendor/qrcode.js ***!
  \*********************************************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
var qrcode = function () {
  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function (typeNumber, errorCorrectionLevel) {
    var PAD0 = 0xEC;
    var PAD1 = 0x11;
    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];
    var _this = {};

    var makeImpl = function (test, maskPattern) {
      _moduleCount = _typeNumber * 4 + 17;

      _modules = function (moduleCount) {
        var modules = new Array(moduleCount);

        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);

          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }

        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function (row, col) {
      for (var r = -1; r <= 7; r += 1) {
        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {
          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function () {
      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {
        makeImpl(true, i);
        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function () {
      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }

        _modules[r][6] = r % 2 == 0;
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }

        _modules[6][c] = c % 2 == 0;
      }
    };

    var setupPositionAdjustPattern = function () {
      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {
        for (var j = 0; j < pos.length; j += 1) {
          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {
            for (var c = -2; c <= 2; c += 1) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function (test) {
      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = !test && (bits >> i & 1) == 1;
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = !test && (bits >> i & 1) == 1;
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function (test, maskPattern) {
      var data = _errorCorrectionLevel << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data); // vertical

      for (var i = 0; i < 15; i += 1) {
        var mod = !test && (bits >> i & 1) == 1;

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      } // horizontal


      for (var i = 0; i < 15; i += 1) {
        var mod = !test && (bits >> i & 1) == 1;

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      } // fixed module


      _modules[_moduleCount - 8][8] = !test;
    };

    var mapData = function (data, maskPattern) {
      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col -= 1;

        while (true) {
          for (var c = 0; c < 2; c += 1) {
            if (_modules[row][col - c] == null) {
              var dark = false;

              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function (buffer, rsBlocks) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }

        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);

        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;

      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function (typeNumber, errorCorrectionLevel, dataList) {
      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);
      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
        data.write(buffer);
      } // calc num max data.


      var totalDataCount = 0;

      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. (' + buffer.getLengthInBits() + '>' + totalDataCount * 8 + ')';
      } // end code


      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      } // padding


      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      } // padding


      while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }

        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }

        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function (data, mode) {
      mode = mode || 'Byte';
      var newData = null;

      switch (mode) {
        case 'Numeric':
          newData = qrNumber(data);
          break;

        case 'Alphanumeric':
          newData = qrAlphaNum(data);
          break;

        case 'Byte':
          newData = qr8BitByte(data);
          break;

        case 'Kanji':
          newData = qrKanji(data);
          break;

        default:
          throw 'mode:' + mode;
      }

      _dataList.push(newData);

      _dataCache = null;
    };

    _this.isDark = function (row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }

      return _modules[row][col];
    };

    _this.getModuleCount = function () {
      return _moduleCount;
    };

    _this.make = function () {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
            data.write(buffer);
          }

          var totalDataCount = 0;

          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern());
    };

    _this.createTableTag = function (cellSize, margin) {
      cellSize = cellSize || 2;
      margin = typeof margin == 'undefined' ? cellSize * 4 : margin;
      var qrHtml = '';
      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {
        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c) ? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';
      return qrHtml;
    };

    _this.createSvgTag = function (cellSize, margin, alt, title) {
      var opts = {};

      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0]; // overwrite cellSize and margin.

        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = typeof margin == 'undefined' ? cellSize * 4 : margin; // Compose alt property surrogate

      alt = typeof alt === 'string' ? {
        text: alt
      } : alt || {};
      alt.text = alt.text || null;
      alt.id = alt.text ? alt.id || 'qrcode-description' : null; // Compose title property surrogate

      title = typeof title === 'string' ? {
        text: title
      } : title || {};
      title.text = title.text || null;
      title.id = title.text ? title.id || 'qrcode-title' : null;
      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c,
          mc,
          r,
          mr,
          qrSvg = '',
          rect;
      rect = 'l' + cellSize + ',0 0,' + cellSize + ' -' + cellSize + ',0 0,-' + cellSize + 'z ';
      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += title.text || alt.text ? ' role="img" aria-labelledby="' + escapeXml([title.id, alt.id].join(' ').trim()) + '"' : '';
      qrSvg += '>';
      qrSvg += title.text ? '<title id="' + escapeXml(title.id) + '">' + escapeXml(title.text) + '</title>' : '';
      qrSvg += alt.text ? '<description id="' + escapeXml(alt.id) + '">' + escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;

        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c)) {
            mc = c * cellSize + margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';
      return qrSvg;
    };

    _this.createDataURL = function (cellSize, margin) {
      cellSize = cellSize || 2;
      margin = typeof margin == 'undefined' ? cellSize * 4 : margin;
      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;
      return createDataURL(size, size, function (x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor((x - min) / cellSize);
          var r = Math.floor((y - min) / cellSize);
          return _this.isDark(r, c) ? 0 : 1;
        } else {
          return 1;
        }
      });
    };

    _this.createImgTag = function (cellSize, margin, alt) {
      cellSize = cellSize || 2;
      margin = typeof margin == 'undefined' ? cellSize * 4 : margin;
      var size = _this.getModuleCount() * cellSize + margin * 2;
      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';

      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }

      img += '/>';
      return img;
    };

    var escapeXml = function (s) {
      var escaped = '';

      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);

        switch (c) {
          case '<':
            escaped += '&lt;';
            break;

          case '>':
            escaped += '&gt;';
            break;

          case '&':
            escaped += '&amp;';
            break;

          case '"':
            escaped += '&quot;';
            break;

          default:
            escaped += c;
            break;
        }
      }

      return escaped;
    };

    var _createHalfASCII = function (margin) {
      var cellSize = 1;
      margin = typeof margin == 'undefined' ? cellSize * 2 : margin;
      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;
      var y, x, r1, r2, p;
      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };
      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };
      var ascii = '';

      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);

        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y + 1 && y + 1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          } else {
            p += '█';
          } // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.


          ascii += margin < 1 && y + 1 >= max ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size + 1).join('▀');
      }

      return ascii.substring(0, ascii.length - 1);
    };

    _this.createASCII = function (cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = typeof margin == 'undefined' ? cellSize * 2 : margin;
      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;
      var y, x, r, p;
      var white = Array(cellSize + 1).join('██');
      var black = Array(cellSize + 1).join('  ');
      var ascii = '';
      var line = '';

      for (y = 0; y < size; y += 1) {
        r = Math.floor((y - min) / cellSize);
        line = '';

        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          } // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.


          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length - 1);
    };

    _this.renderTo2dContext = function (context, cellSize) {
      cellSize = cellSize || 2;

      var length = _this.getModuleCount();

      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
        }
      }
    };

    return _this;
  }; //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------


  qrcode.stringToBytesFuncs = {
    'default': function (s) {
      var bytes = [];

      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }

      return bytes;
    }
  };
  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default']; //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */

  qrcode.createStringToBytes = function (unicodeData, numChars) {
    // create conversion map.
    var unicodeMap = function () {
      var bin = base64DecodeInputStream(unicodeData);

      var read = function () {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};

      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode(b0 << 8 | b1);
        var v = b2 << 8 | b3;
        unicodeMap[k] = v;
        count += 1;
      }

      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);
    return function (s) {
      var bytes = [];

      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);

        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];

          if (typeof b == 'number') {
            if ((b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }

      return bytes;
    };
  }; //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------


  var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
  }; //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  }; //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  }; //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function () {
    var PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var _this = {};

    var getBCHDigit = function (data) {
      var digit = 0;

      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }

      return digit;
    };

    _this.getBCHTypeInfo = function (data) {
      var d = data << 10;

      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);
      }

      return (data << 10 | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function (data) {
      var d = data << 12;

      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);
      }

      return data << 12 | d;
    };

    _this.getPatternPosition = function (typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function (maskPattern) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return function (i, j) {
            return (i + j) % 2 == 0;
          };

        case QRMaskPattern.PATTERN001:
          return function (i, j) {
            return i % 2 == 0;
          };

        case QRMaskPattern.PATTERN010:
          return function (i, j) {
            return j % 3 == 0;
          };

        case QRMaskPattern.PATTERN011:
          return function (i, j) {
            return (i + j) % 3 == 0;
          };

        case QRMaskPattern.PATTERN100:
          return function (i, j) {
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
          };

        case QRMaskPattern.PATTERN101:
          return function (i, j) {
            return i * j % 2 + i * j % 3 == 0;
          };

        case QRMaskPattern.PATTERN110:
          return function (i, j) {
            return (i * j % 2 + i * j % 3) % 2 == 0;
          };

        case QRMaskPattern.PATTERN111:
          return function (i, j) {
            return (i * j % 3 + (i + j) % 2) % 2 == 0;
          };

        default:
          throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function (errorCorrectLength) {
      var a = qrPolynomial([1], 0);

      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));
      }

      return a;
    };

    _this.getLengthInBits = function (mode, type) {
      if (1 <= type && type < 10) {
        // 1 - 9
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;

          case QRMode.MODE_ALPHA_NUM:
            return 9;

          case QRMode.MODE_8BIT_BYTE:
            return 8;

          case QRMode.MODE_KANJI:
            return 8;

          default:
            throw 'mode:' + mode;
        }
      } else if (type < 27) {
        // 10 - 26
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;

          case QRMode.MODE_ALPHA_NUM:
            return 11;

          case QRMode.MODE_8BIT_BYTE:
            return 16;

          case QRMode.MODE_KANJI:
            return 10;

          default:
            throw 'mode:' + mode;
        }
      } else if (type < 41) {
        // 27 - 40
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;

          case QRMode.MODE_ALPHA_NUM:
            return 13;

          case QRMode.MODE_8BIT_BYTE:
            return 16;

          case QRMode.MODE_KANJI:
            return 12;

          default:
            throw 'mode:' + mode;
        }
      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function (qrcode) {
      var moduleCount = qrcode.getModuleCount();
      var lostPoint = 0; // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {
          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c)) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      }

      ; // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col)) count += 1;
          if (qrcode.isDark(row + 1, col)) count += 1;
          if (qrcode.isDark(row, col + 1)) count += 1;
          if (qrcode.isDark(row + 1, col + 1)) count += 1;

          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      } // LEVEL3


      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col) && !qrcode.isDark(row, col + 1) && qrcode.isDark(row, col + 2) && qrcode.isDark(row, col + 3) && qrcode.isDark(row, col + 4) && !qrcode.isDark(row, col + 5) && qrcode.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col) && !qrcode.isDark(row + 1, col) && qrcode.isDark(row + 2, col) && qrcode.isDark(row + 3, col) && qrcode.isDark(row + 4, col) && !qrcode.isDark(row + 5, col) && qrcode.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      } // LEVEL4


      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col)) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    };

    return _this;
  }(); //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------


  var QRMath = function () {
    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256); // initialize tables

    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }

    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4] ^ EXP_TABLE[i - 5] ^ EXP_TABLE[i - 6] ^ EXP_TABLE[i - 8];
    }

    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i]] = i;
    }

    var _this = {};

    _this.glog = function (n) {
      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function (n) {
      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }(); //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------


  function qrPolynomial(num, shift) {
    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function () {
      var offset = 0;

      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }

      var _num = new Array(num.length - offset + shift);

      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }

      return _num;
    }();

    var _this = {};

    _this.getAt = function (index) {
      return _num[index];
    };

    _this.getLength = function () {
      return _num.length;
    };

    _this.multiply = function (e) {
      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j)));
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function (e) {
      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));
      var num = new Array(_this.getLength());

      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);
      } // recursive call


      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  }

  ; //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function () {
    var RS_BLOCK_TABLE = [// L
    // M
    // Q
    // H
    // 1
    [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], // 2
    [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], // 3
    [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], // 4
    [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], // 5
    [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], // 6
    [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], // 7
    [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], // 8
    [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], // 9
    [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], // 10
    [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], // 11
    [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], // 12
    [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], // 13
    [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], // 14
    [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], // 15
    [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], // 16
    [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], // 17
    [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], // 18
    [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], // 19
    [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], // 20
    [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], // 21
    [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], // 22
    [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], // 23
    [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], // 24
    [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], // 25
    [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], // 26
    [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], // 27
    [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], // 28
    [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], // 29
    [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], // 30
    [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], // 31
    [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], // 32
    [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], // 33
    [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], // 34
    [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], // 35
    [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], // 36
    [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], // 37
    [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], // 38
    [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], // 39
    [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], // 40
    [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

    var qrRSBlock = function (totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function (typeNumber, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case QRErrorCorrectionLevel.L:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

        case QRErrorCorrectionLevel.M:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

        case QRErrorCorrectionLevel.Q:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

        case QRErrorCorrectionLevel.H:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

        default:
          return undefined;
      }
    };

    _this.getRSBlocks = function (typeNumber, errorCorrectionLevel) {
      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber + '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;
      var list = [];

      for (var i = 0; i < length; i += 1) {
        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount));
        }
      }

      return list;
    };

    return _this;
  }(); //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------


  var qrBitBuffer = function () {
    var _buffer = [];
    var _length = 0;
    var _this = {};

    _this.getBuffer = function () {
      return _buffer;
    };

    _this.getAt = function (index) {
      var bufIndex = Math.floor(index / 8);
      return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    };

    _this.put = function (num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit((num >>> length - i - 1 & 1) == 1);
      }
    };

    _this.getLengthInBits = function () {
      return _length;
    };

    _this.putBit = function (bit) {
      var bufIndex = Math.floor(_length / 8);

      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= 0x80 >>> _length % 8;
      }

      _length += 1;
    };

    return _this;
  }; //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------


  var qrNumber = function (data) {
    var _mode = QRMode.MODE_NUMBER;
    var _data = data;
    var _this = {};

    _this.getMode = function () {
      return _mode;
    };

    _this.getLength = function (buffer) {
      return _data.length;
    };

    _this.write = function (buffer) {
      var data = _data;
      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3)), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1)), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2)), 7);
        }
      }
    };

    var strToNum = function (s) {
      var num = 0;

      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i));
      }

      return num;
    };

    var chatToNum = function (c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }

      throw 'illegal char :' + c;
    };

    return _this;
  }; //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------


  var qrAlphaNum = function (data) {
    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;
    var _this = {};

    _this.getMode = function () {
      return _mode;
    };

    _this.getLength = function (buffer) {
      return _data.length;
    };

    _this.write = function (buffer) {
      var s = _data;
      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(getCode(s.charAt(i)) * 45 + getCode(s.charAt(i + 1)), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i)), 6);
      }
    };

    var getCode = function (c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
          case ' ':
            return 36;

          case '$':
            return 37;

          case '%':
            return 38;

          case '*':
            return 39;

          case '+':
            return 40;

          case '-':
            return 41;

          case '.':
            return 42;

          case '/':
            return 43;

          case ':':
            return 44;

          default:
            throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  }; //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------


  var qr8BitByte = function (data) {
    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;

    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function () {
      return _mode;
    };

    _this.getLength = function (buffer) {
      return _bytes.length;
    };

    _this.write = function (buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  }; //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------


  var qrKanji = function (data) {
    var _mode = QRMode.MODE_KANJI;
    var _data = data;
    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];

    if (!stringToBytes) {
      throw 'sjis not supported.';
    }

    !function (c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);

      if (test.length != 2 || (test[0] << 8 | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function () {
      return _mode;
    };

    _this.getLength = function (buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function (buffer) {
      var data = _bytes;
      var i = 0;

      while (i + 1 < data.length) {
        var c = (0xff & data[i]) << 8 | 0xff & data[i + 1];

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = (c >>> 8 & 0xff) * 0xC0 + (c & 0xff);
        buffer.put(c, 13);
        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  }; //=====================================================================
  // GIF Support etc.
  //
  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------


  var byteArrayOutputStream = function () {
    var _bytes = [];
    var _this = {};

    _this.writeByte = function (b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function (i) {
      _this.writeByte(i);

      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function (b, off, len) {
      off = off || 0;
      len = len || b.length;

      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function (s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i));
      }
    };

    _this.toByteArray = function () {
      return _bytes;
    };

    _this.toString = function () {
      var s = '';
      s += '[';

      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }

        s += _bytes[i];
      }

      s += ']';
      return s;
    };

    return _this;
  }; //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------


  var base64EncodeOutputStream = function () {
    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';
    var _this = {};

    var writeEncoded = function (b) {
      _base64 += String.fromCharCode(encode(b & 0x3f));
    };

    var encode = function (n) {
      if (n < 0) {// error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }

      throw 'n:' + n;
    };

    _this.writeByte = function (n) {
      _buffer = _buffer << 8 | n & 0xff;
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> _buflen - 6);
        _buflen -= 6;
      }
    };

    _this.flush = function () {
      if (_buflen > 0) {
        writeEncoded(_buffer << 6 - _buflen);
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;

        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function () {
      return _base64;
    };

    return _this;
  }; //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------


  var base64DecodeInputStream = function (str) {
    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;
    var _this = {};

    _this.read = function () {
      while (_buflen < 8) {
        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }

          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);

        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/)) {
          // ignore if whitespace.
          continue;
        }

        _buffer = _buffer << 6 | decode(c.charCodeAt(0));
        _buflen += 6;
      }

      var n = _buffer >>> _buflen - 8 & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function (c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  }; //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------


  var gifImage = function (width, height) {
    var _width = width;
    var _height = height;

    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function (x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function (out) {
      //---------------------------------
      // GIF Signature
      out.writeString('GIF87a'); //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0x80); // 2bit

      out.writeByte(0);
      out.writeByte(0); //---------------------------------
      // Global Color Map
      // black

      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00); // white

      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff); //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0); //---------------------------------
      // Local Color Map
      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);
      out.writeByte(lzwMinCodeSize);
      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00); //---------------------------------
      // GIF Terminator

      out.writeString(';');
    };

    var bitOutputStream = function (out) {
      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;
      var _this = {};

      _this.write = function (data, length) {
        if (data >>> length != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & (data << _bitLength | _bitBuffer));

          length -= 8 - _bitLength;
          data >>>= 8 - _bitLength;
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = data << _bitLength | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function () {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function (lzwMinCodeSize) {
      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1; // Setup LZWTable

      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i));
      }

      table.add(String.fromCharCode(clearCode));
      table.add(String.fromCharCode(endCode));
      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut); // clear code

      bitOut.write(clearCode, bitLength);
      var dataIndex = 0;
      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {
        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c)) {
          s = s + c;
        } else {
          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {
            if (table.size() == 1 << bitLength) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength); // end code

      bitOut.write(endCode, bitLength);
      bitOut.flush();
      return byteOut.toByteArray();
    };

    var lzwTable = function () {
      var _map = {};
      var _size = 0;
      var _this = {};

      _this.add = function (key) {
        if (_this.contains(key)) {
          throw 'dup key:' + key;
        }

        _map[key] = _size;
        _size += 1;
      };

      _this.size = function () {
        return _size;
      };

      _this.indexOf = function (key) {
        return _map[key];
      };

      _this.contains = function (key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function (width, height, getPixel) {
    var gif = gifImage(width, height);

    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y));
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);
    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();

    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }

    base64.flush();
    return 'data:image/gif;base64,' + base64;
  }; //---------------------------------------------------------------------
  // returns qrcode function.


  return qrcode;
}(); // multibyte support


!function () {
  qrcode.stringToBytesFuncs['UTF-8'] = function (s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];

      for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);else if (charcode < 0x800) {
          utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        } // surrogate pair
        else {
          i++; // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves

          charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
          utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        }
      }

      return utf8;
    }

    return toUTF8Array(s);
  };
}();

(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function () {
  return qrcode;
});

/***/ }),

/***/ 85594:
/*!************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/barcode-generator/barcode-generator.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: block;\n}\n\n.generator-page {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 28px 20px 56px;\n  color: var(--ion-text-color);\n}\n\n.page-intro {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.page-intro > ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 32px;\n  padding: 14px;\n  border-radius: 16px;\n  background: var(--ion-item-background);\n}\n\n.page-intro h1 {\n  font-size: 24px;\n  margin: 0 0 5px;\n}\n\n.page-intro p {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 20px;\n}\n\n.panel {\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--ion-color-step-200);\n  border-radius: 18px;\n  background: var(--ion-item-background);\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);\n}\n\n.panel h2 {\n  font-size: 18px;\n  margin: 0 0 20px;\n}\n\n.type-selector {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 22px;\n}\n\n.type-selector button {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 13px 10px;\n  border: 1px solid var(--ion-color-step-250);\n  border-radius: 12px;\n  color: var(--ion-text-color);\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n}\n\n.type-selector button.active {\n  border-color: var(--ion-color-primary);\n  color: var(--ion-color-primary);\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  font-weight: 700;\n}\n\n.type-selector ion-icon {\n  font-size: 21px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 9px;\n  font-weight: 700;\n}\n\ntextarea {\n  width: 100%;\n  min-height: 130px;\n  padding: 13px;\n  resize: vertical;\n  border: 1px solid var(--ion-color-step-250);\n  border-radius: 12px;\n  outline: none;\n  color: var(--ion-text-color);\n  background: var(--ion-background-color);\n  font: inherit;\n}\n\ntextarea:focus {\n  border-color: var(--ion-color-primary);\n}\n\n.hint {\n  min-height: 44px;\n  margin: 10px 0 18px;\n  font-size: 13px;\n  line-height: 1.7;\n  opacity: 0.7;\n}\n\n.error {\n  color: var(--ion-color-danger);\n  line-height: 1.7;\n}\n\n.preview-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n\n.preview-heading span {\n  color: var(--ion-color-primary);\n  font-size: 13px;\n}\n\n.preview-paper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  margin-bottom: 20px;\n  padding: 24px;\n  border: 1px solid #e4e4e4;\n  border-radius: 12px;\n  background: #fff;\n  color: #171717;\n}\n\n.preview-paper img {\n  display: block;\n  max-width: 100%;\n  max-height: 240px;\n  object-fit: contain;\n}\n\n.preview-paper p {\n  max-width: 100%;\n  margin: 14px 0 0;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n  text-align: center;\n}\n\n.preview-paper.empty {\n  border-style: dashed;\n  color: #666;\n}\n\n.preview-paper.empty ion-icon {\n  font-size: 42px;\n}\n\n@media (max-width: 760px) {\n  .generator-page {\n    padding: 20px 12px 36px;\n  }\n\n  .workspace {\n    grid-template-columns: 1fr;\n  }\n\n  .panel {\n    padding: 18px;\n  }\n\n  .page-intro h1 {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcmNvZGUtZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUVFO0VBQUssZUFBQTtFQUFpQixlQUFBO0FBRXhCOztBQURFO0VBQUksU0FBQTtFQUFXLFlBQUE7QUFLakI7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxTQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0FBS0Y7O0FBSEU7RUFBSyxlQUFBO0VBQWlCLGdCQUFBO0FBT3hCOztBQUpBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQU9KOztBQUpFO0VBQ0Usc0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFIRTtFQUFXLGVBQUE7QUFNYjs7QUFIQTtFQUFRLGNBQUE7RUFBZ0Isa0JBQUE7RUFBb0IsZ0JBQUE7QUFTNUM7O0FBUEE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0FBVUY7O0FBUkU7RUFBVSxzQ0FBQTtBQVdaOztBQVJBO0VBQVEsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixZQUFBO0FBZ0JsRjs7QUFmQTtFQUFTLDhCQUFBO0VBQWdDLGdCQUFBO0FBb0J6Qzs7QUFsQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFxQkY7O0FBbkJFO0VBQU8sK0JBQUE7RUFBaUMsZUFBQTtBQXVCMUM7O0FBcEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXVCRjs7QUFyQkU7RUFBTSxjQUFBO0VBQWdCLGVBQUE7RUFBaUIsaUJBQUE7RUFBbUIsbUJBQUE7QUEyQjVEOztBQTFCRTtFQUFJLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsdUJBQUE7RUFBeUIscUJBQUE7RUFBdUIsa0JBQUE7QUFpQ3pGOztBQS9CRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQWlDSjs7QUEvQkk7RUFBVyxlQUFBO0FBa0NmOztBQTlCQTtFQUNFO0lBQWtCLHVCQUFBO0VBa0NsQjs7RUFqQ0E7SUFBYSwwQkFBQTtFQXFDYjs7RUFwQ0E7SUFBUyxhQUFBO0VBd0NUOztFQXZDQTtJQUFpQixlQUFBO0VBMkNqQjtBQUNGIiwiZmlsZSI6ImJhcmNvZGUtZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdlbmVyYXRvci1wYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyOHB4IDIwcHggNTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLnBhZ2UtaW50cm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG5cbiAgPiBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICB9XG5cbiAgaDEgeyBmb250LXNpemU6IDI0cHg7IG1hcmdpbjogMCAwIDVweDsgfVxuICBwIHsgbWFyZ2luOiAwOyBvcGFjaXR5OiAuNzsgfVxufVxuXG4ud29ya3NwYWNlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ucGFuZWwge1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoMCwgMCwgMCwgLjA2KTtcblxuICBoMiB7IGZvbnQtc2l6ZTogMThweDsgbWFyZ2luOiAwIDAgMjBweDsgfVxufVxuXG4udHlwZS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMTNweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG5cbiAgYnV0dG9uLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIC4xMCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAyMXB4OyB9XG59XG5cbmxhYmVsIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDlweDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgcGFkZGluZzogMTNweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBmb250OiBpbmhlcml0O1xuXG4gICY6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfVxufVxuXG4uaGludCB7IG1pbi1oZWlnaHQ6IDQ0cHg7IG1hcmdpbjogMTBweCAwIDE4cHg7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDEuNzsgb3BhY2l0eTogLjc7IH1cbi5lcnJvciB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgbGluZS1oZWlnaHQ6IDEuNzsgfVxuXG4ucHJldmlldy1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogMTBweDtcblxuICBzcGFuIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyB9XG59XG5cbi5wcmV2aWV3LXBhcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzE3MTcxNztcblxuICBpbWcgeyBkaXNwbGF5OiBibG9jazsgbWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiAyNDBweDsgb2JqZWN0LWZpdDogY29udGFpbjsgfVxuICBwIHsgbWF4LXdpZHRoOiAxMDAlOyBtYXJnaW46IDE0cHggMCAwOyBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTsgd2hpdGUtc3BhY2U6IHByZS13cmFwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuICAmLmVtcHR5IHtcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICBjb2xvcjogIzY2NjtcblxuICAgIGlvbi1pY29uIHsgZm9udC1zaXplOiA0MnB4OyB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5nZW5lcmF0b3ItcGFnZSB7IHBhZGRpbmc6IDIwcHggMTJweCAzNnB4OyB9XG4gIC53b3Jrc3BhY2UgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAucGFuZWwgeyBwYWRkaW5nOiAxOHB4OyB9XG4gIC5wYWdlLWludHJvIGgxIHsgZm9udC1zaXplOiAyMHB4OyB9XG59XG4iXX0= */";

/***/ }),

/***/ 88730:
/*!************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/barcode-generator/barcode-generator.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" [defaultHref]=\"backUrl\"></ion-back-button></ion-buttons>\n<span page-title>تولید بارکد و QR کد</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <main class=\"generator-page\" dir=\"rtl\">\r\n    <div class=\"page-intro\">\r\n      <ion-icon name=\"barcode-outline\" aria-hidden=\"true\"></ion-icon>\r\n      <div>\r\n        <h1>تولید کد برای چاپ</h1>\r\n        <p>متن یا لینک را وارد کنید، نوع کد را انتخاب کنید و پیش‌نمایش را چاپ کنید.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"workspace\">\r\n      <section class=\"panel controls\" aria-labelledby=\"code-settings-title\">\r\n        <h2 id=\"code-settings-title\">تنظیمات کد</h2>\r\n        <div class=\"type-selector\" role=\"group\" aria-label=\"نوع کد\">\r\n          <button type=\"button\" [class.active]=\"codeType === 'barcode'\" [attr.aria-pressed]=\"codeType === 'barcode'\" (click)=\"selectType('barcode')\">\r\n            <ion-icon name=\"barcode-outline\" aria-hidden=\"true\"></ion-icon> بارکد\r\n          </button>\r\n          <button type=\"button\" [class.active]=\"codeType === 'qr'\" [attr.aria-pressed]=\"codeType === 'qr'\" (click)=\"selectType('qr')\">\r\n            <ion-icon name=\"qr-code-outline\" aria-hidden=\"true\"></ion-icon> QR کد\r\n          </button>\r\n        </div>\r\n\r\n        <label for=\"code-text\">متن یا لینک</label>\r\n        <textarea id=\"code-text\" [(ngModel)]=\"inputText\" (ngModelChange)=\"clearResult()\" rows=\"5\"\r\n          placeholder=\"متن موردنظر را اینجا بنویسید\" spellcheck=\"false\"></textarea>\r\n        <p class=\"hint\" *ngIf=\"codeType === 'barcode'\">بارکد Code 128 برای حروف انگلیسی، عدد و نشانه‌ها مناسب است. متن فارسی را با QR کد بسازید.</p>\r\n        <p class=\"hint\" *ngIf=\"codeType === 'qr'\">QR کد از متن فارسی، انگلیسی و لینک پشتیبانی می‌کند.</p>\r\n        <p class=\"error\" role=\"alert\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\r\n\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"generate()\">\r\n          <ion-icon slot=\"start\" name=\"sparkles-outline\"></ion-icon>\r\n          تولید کد\r\n        </ion-button>\r\n      </section>\r\n\r\n      <section class=\"panel preview\" aria-labelledby=\"preview-title\">\r\n        <div class=\"preview-heading\">\r\n          <h2 id=\"preview-title\">پیش‌نمایش چاپ</h2>\r\n          <span *ngIf=\"generatedType\">{{ generatedType === 'qr' ? 'QR کد' : 'Code 128' }}</span>\r\n        </div>\r\n        <div class=\"preview-paper\" [class.empty]=\"!previewUrl\">\r\n          <ng-container *ngIf=\"previewUrl; else emptyPreview\">\r\n            <img [src]=\"previewUrl\" [alt]=\"generatedType === 'qr' ? 'QR کد تولیدشده' : 'بارکد تولیدشده'\" />\r\n            <p [attr.dir]=\"generatedType === 'qr' ? 'auto' : 'ltr'\">{{ generatedValue }}</p>\r\n          </ng-container>\r\n          <ng-template #emptyPreview>\r\n            <ion-icon name=\"scan-outline\" aria-hidden=\"true\"></ion-icon>\r\n            <p>کد تولیدشده اینجا نمایش داده می‌شود.</p>\r\n          </ng-template>\r\n        </div>\r\n        <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" [disabled]=\"!previewUrl\" (click)=\"print()\">\r\n          <ion-icon slot=\"start\" name=\"print-outline\"></ion-icon>\r\n          چاپ کد\r\n        </ion-button>\r\n      </section>\r\n    </div>\r\n  </main>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_barcode-generator_barcode-generator_module_ts.js.map