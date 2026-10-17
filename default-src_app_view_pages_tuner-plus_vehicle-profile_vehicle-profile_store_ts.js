"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"],{

/***/ 78994:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/vehicle-profile/vehicle-profile.store.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleProfileStore": () => (/* binding */ VehicleProfileStore)
/* harmony export */ });
/** Browser-only project storage. Unknown specifications are deliberately left empty. */
class VehicleProfileStore {
    static list() { return this.read().profiles; }
    static active() {
        const state = this.read();
        return state.profiles.find(profile => profile.id === state.activeId) || null;
    }
    static save(profile) {
        const state = this.read();
        const index = state.profiles.findIndex(item => item.id === profile.id);
        const clean = { ...profile, updatedAt: new Date().toISOString() };
        if (index < 0) {
            state.profiles.unshift(clean);
        }
        else {
            state.profiles[index] = clean;
        }
        state.activeId = clean.id;
        this.write(state);
    }
    static select(id) {
        const state = this.read();
        if (!state.profiles.some(profile => profile.id === id)) {
            return;
        }
        state.activeId = id;
        this.write(state);
    }
    static remove(id) {
        const state = this.read();
        state.profiles = state.profiles.filter(profile => profile.id !== id);
        if (state.activeId === id) {
            state.activeId = state.profiles[0]?.id || '';
        }
        this.write(state);
    }
    static createId() {
        return `vehicle-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    }
    static exportJson() {
        return JSON.stringify({ version: 2, exportedAt: new Date().toISOString(),
            profiles: this.list() }, null, 2);
    }
    static importJson(text) {
        if (text.length > 1000000) {
            throw new Error('File too large');
        }
        const file = JSON.parse(text);
        if (file?.version !== 2 || !Array.isArray(file.profiles) || file.profiles.length > 200) {
            throw new Error('Invalid profile file');
        }
        const state = this.read();
        const imported = [];
        for (const candidate of file.profiles) {
            if (!candidate || typeof candidate.name !== 'string' || !candidate.name.trim() ||
                !candidate.values || typeof candidate.values !== 'object' || Array.isArray(candidate.values)) {
                throw new Error('Invalid profile');
            }
            const values = {};
            Object.keys(candidate.values).slice(0, 150).forEach(key => {
                if (!/^[A-Za-z][A-Za-z0-9]{0,59}$/.test(key)) {
                    return;
                }
                const value = candidate.values[key];
                if (typeof value === 'number' && Number.isFinite(value) ||
                    typeof value === 'string' && value.length <= 300 || value === null) {
                    values[key] = value;
                }
            });
            imported.push({ id: this.createId(), name: candidate.name.trim().slice(0, 100),
                make: String(candidate.make || '').slice(0, 100), model: String(candidate.model || '').slice(0, 100),
                trim: String(candidate.trim || '').slice(0, 100), year: String(candidate.year || '').slice(0, 30),
                values, source: typeof candidate.source === 'string' && /^https:\/\//.test(candidate.source) ?
                    candidate.source.slice(0, 500) : '', updatedAt: new Date().toISOString() });
        }
        state.profiles.unshift(...imported);
        if (imported.length) {
            state.activeId = imported[0].id;
        }
        this.write(state);
        return imported.length;
    }
    /** Only explicit, finite values replace a tool's own defaults. */
    static toolValues(profile, slug) {
        const v = profile.values || {};
        const out = {};
        const use = (target, source = target) => {
            const raw = v[source];
            if (raw !== null && raw !== '' && raw !== undefined && Number.isFinite(Number(raw))) {
                out[target] = Number(raw);
            }
        };
        const tireDiameter = () => {
            const width = Number(v.tireWidth), aspect = Number(v.tireAspect), rim = Number(v.rimSize);
            return width > 0 && aspect > 0 && rim > 0 ? rim * 25.4 + 2 * width * aspect / 100 : null;
        };
        switch (slug) {
            case 'cam-selector':
                use('displacement');
                use('rpm', 'powerRpm');
                use('boost', 'boostTarget');
                use('compression');
                use('street', 'streetPriority');
                break;
            case 'launch-traction':
                use('mass', 'runningMass');
                use('wheelPower');
                use('mu', 'tractionMu');
                use('driveWeight');
                use('firstTotal');
                if (out.firstTotal === undefined && Number(v.firstGear) > 0 && Number(v.finalDrive) > 0) {
                    out.firstTotal = Number(v.firstGear) * Number(v.finalDrive);
                }
                use('tireRadius');
                break;
            case 'wheel-final-drive':
                use('width', 'tireWidth');
                use('aspect', 'tireAspect');
                use('rim', 'rimSize');
                use('gear', 'selectedGear');
                use('finalDrive');
                use('rpm', 'redline');
                break;
            case 'fuel-system':
                use('injectorFlow');
                use('injectors');
                use('duty', 'injectorDuty');
                use('bsfc');
                use('pump', 'pumpFlow');
                use('fuelDensity');
                break;
            case 'fuel-blend':
                use('tank', 'fuelTank');
                use('ethanol', 'e85Litres');
                use('baseOctane');
                use('eContent');
                break;
            case 'intercooler':
                use('power', 'targetPower');
                use('boost', 'boostTarget');
                use('ambient');
                use('efficiency', 'intercoolerEfficiency');
                use('pressureDrop', 'intercoolerDrop');
                break;
            case 'boost-control':
                use('spring', 'wastegateSpring');
                use('target', 'boostTarget');
                use('gain', 'boostGain');
                use('backpressure');
                break;
            case 'egt-backpressure':
                use('boost', 'boostTarget');
                use('afr', 'fullLoadAfr');
                use('timing');
                use('emap');
                use('map');
                break;
            case 'datalog':
                use('targetAfr');
                use('smoothing');
                break;
            case 'turbo-match':
                if (Number(v.displacement) > 0) {
                    out.displacementLiters = Number(v.displacement) / 1000;
                }
                use('rpmStart');
                use('rpmEnd', 'redline');
                use('volumetricEfficiencyPct', 'volumetricEfficiency');
                if (v.boostTarget !== null && v.boostTarget !== '' && v.boostTarget !== undefined) {
                    out.boostPsi = Number(v.boostTarget) * 14.5038;
                }
                use('ambientPressurePsi', 'ambientPressure');
                use('inletAirTempC', 'ambient');
                use('compressorSurgeLbMin', 'compressorSurge');
                use('compressorMaxFlowLbMin', 'compressorMaxFlow');
                use('compressorMaxPressureRatio', 'compressorMaxPr');
                break;
            case 'drag-performance':
                use('vehicleWeightKg', 'runningMass');
                use('horsepower', 'wheelPower');
                use('drivetrainLossPct', 'drivetrainLoss');
                use('tractionCoefficient', 'tractionMu');
                use('frontalAreaCdA');
                use('rollingResistanceCoefficient', 'rollingResistance');
                use('shiftTimeMs', 'shiftTime');
                use('shiftCount');
                break;
            case 'gear-shift-optimizer':
                use('finalDriveRatio', 'finalDrive');
                use('tireDiameterMm', 'tireDiameter');
                if (out.tireDiameterMm === undefined && tireDiameter()) {
                    out.tireDiameterMm = tireDiameter();
                }
                use('drivetrainEfficiencyPct', 'drivetrainEfficiency');
                use('rpmStart');
                use('torquePeakRpm');
                use('peakTorqueNm', 'peakTorque');
                use('powerPeakRpm', 'powerRpm');
                use('peakPowerHp', 'peakPower');
                use('redlineRpm', 'redline');
                for (let i = 1; i <= 6; i++) {
                    const gearName = ['firstGear', 'secondGear', 'thirdGear', 'fourthGear', 'fifthGear', 'sixthGear'][i - 1];
                    use(`gear${i}`, gearName);
                }
                break;
            case 'dynamic-compression':
                use('boreMm', 'bore');
                use('strokeMm', 'stroke');
                use('rodLengthMm', 'rodLength');
                use('staticCompressionRatio', 'compression');
                use('intakeValveClosingAbdc', 'intakeValveClosing');
                break;
            case 'compression-quench':
                use('boreMm', 'bore');
                use('strokeMm', 'stroke');
                use('cylinders');
                use('chamberVolumeCc', 'chamberVolume');
                use('pistonVolumeCc', 'pistonVolume');
                use('gasketBoreMm', 'gasketBore');
                use('gasketThicknessMm', 'gasketThickness');
                use('deckClearanceMm', 'deckClearance');
                break;
            case 'electrical-calibration':
                use('nominalVoltage');
                use('dwellAtNominalVoltageMs', 'coilDwell');
                use('minimumDwellMs', 'minimumDwell');
                use('maximumDwellMs', 'maximumDwell');
                use('injectorDeadTimeAtNominalVoltageMs', 'injectorDeadTime');
                use('injectorVoltageSensitivityMsPerV', 'injectorVoltageSensitivity');
                use('baseFuelPressureBar', 'baseFuelPressure');
                use('targetFuelPressureBar', 'targetFuelPressure');
                break;
        }
        return out;
    }
    static read() {
        try {
            const raw = localStorage.getItem(this.key);
            if (raw) {
                const state = JSON.parse(raw);
                if (Array.isArray(state?.profiles)) {
                    return { activeId: typeof state.activeId === 'string' ? state.activeId : '',
                        profiles: state.profiles.filter(item => item && typeof item.id === 'string' &&
                            item.values && typeof item.values === 'object' && !Array.isArray(item.values)) };
                }
            }
            const legacy = localStorage.getItem(this.legacyKey);
            if (legacy) {
                const values = JSON.parse(legacy);
                if (values && typeof values === 'object') {
                    const id = 'legacy-vehicle';
                    const migrated = { ...values };
                    if (Number(values.weight) > 0 && migrated.runningMass === undefined) {
                        migrated.runningMass = Number(values.weight);
                    }
                    return { activeId: id, profiles: [{ id, name: 'پروفایل قبلی من', make: '', model: '', trim: '',
                                year: '', values: migrated, updatedAt: new Date().toISOString() }] };
                }
            }
        }
        catch { /* Storage may be unavailable in private browsing. */ }
        return { activeId: '', profiles: [] };
    }
    static write(state) {
        localStorage.setItem(this.key, JSON.stringify(state));
    }
}
VehicleProfileStore.key = 'tunerPlusVehicleProfilesV2';
VehicleProfileStore.legacyKey = 'tunerPlusVehicleProfile';


/***/ })

}]);
//# sourceMappingURL=default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts.js.map