class LogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error) {
    this.logType = logType;
    this.logIndex = logIndex;
    this.timestamp = timestamp;
    this.secondsSincePowerUp = secondsSincePowerUp;
    this.error = error;
  }
}
exports.LogRecord = LogRecord;
var LogRecordType;
(function(LogRecordType) {
  LogRecordType[LogRecordType["HISTORY"] = 3] = "HISTORY";
  LogRecordType[LogRecordType["PUMP_ALARM"] = 5] = "PUMP_ALARM";
})(LogRecordType = exports.LogRecordType || (exports.LogRecordType = {}));
var LogRecordError;
(function(LogRecordError) {
  LogRecordError[LogRecordError["NO_ERR"] = 0] = "NO_ERR";
  LogRecordError[LogRecordError["GET_EEPROM_ERR"] = 3] = "GET_EEPROM_ERR";
  LogRecordError[LogRecordError["CRC_ERR"] = 4] = "CRC_ERR";
  LogRecordError[LogRecordError["LOG_INDEX_ERR"] = 6] = "LOG_INDEX_ERR";
  LogRecordError[LogRecordError["REC_SIZE_ERR"] = 8] = "REC_SIZE_ERR";
})(LogRecordError = exports.LogRecordError || (exports.LogRecordError = {}));
class HistoryLogRecord extends LogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error);
    this.historyLogRecordType = historyLogRecordType;
    this.flags = flags;
  }
}
exports.HistoryLogRecord = HistoryLogRecord;
var HistoryLogRecordType;
(function(HistoryLogRecordType) {
  HistoryLogRecordType[HistoryLogRecordType["END_MARKER"] = 0] = "END_MARKER";
  HistoryLogRecordType[HistoryLogRecordType["DEACTIVATE"] = 1] = "DEACTIVATE";
  HistoryLogRecordType[HistoryLogRecordType["TIME_CHANGE"] = 2] = "TIME_CHANGE";
  HistoryLogRecordType[HistoryLogRecordType["BOLUS"] = 4] = "BOLUS";
  HistoryLogRecordType[HistoryLogRecordType["BASAL_RATE"] = 8] = "BASAL_RATE";
  HistoryLogRecordType[HistoryLogRecordType["SUSPEND"] = 16] = "SUSPEND";
  HistoryLogRecordType[HistoryLogRecordType["DATE_CHANGE"] = 32] = "DATE_CHANGE";
  HistoryLogRecordType[HistoryLogRecordType["SUGGESTED_CALC"] = 64] = "SUGGESTED_CALC";
  HistoryLogRecordType[HistoryLogRecordType["REMOTE_HAZARD_ALARM"] = 128] = "REMOTE_HAZARD_ALARM";
  HistoryLogRecordType[HistoryLogRecordType["ALARM"] = 1024] = "ALARM";
  HistoryLogRecordType[HistoryLogRecordType["BLOOD_GLUCOSE"] = 2048] = "BLOOD_GLUCOSE";
  HistoryLogRecordType[HistoryLogRecordType["CARB"] = 4096] = "CARB";
  HistoryLogRecordType[HistoryLogRecordType["TERMINATE_BOLUS"] = 8192] = "TERMINATE_BOLUS";
  HistoryLogRecordType[HistoryLogRecordType["TERMINATE_BASAL"] = 16384] = "TERMINATE_BASAL";
  HistoryLogRecordType[HistoryLogRecordType["ACTIVATE"] = 32768] = "ACTIVATE";
  HistoryLogRecordType[HistoryLogRecordType["RESUME"] = 65536] = "RESUME";
  HistoryLogRecordType[HistoryLogRecordType["DOWNLOAD"] = 131072] = "DOWNLOAD";
  HistoryLogRecordType[HistoryLogRecordType["OCCLUSION"] = 262144] = "OCCLUSION";
})(HistoryLogRecordType = exports.HistoryLogRecordType || (exports.HistoryLogRecordType = {}));
(function(HistoryLogRecordType) {
  function values() {
    return [
      HistoryLogRecordType.END_MARKER,
      HistoryLogRecordType.DEACTIVATE,
      HistoryLogRecordType.TIME_CHANGE,
      HistoryLogRecordType.BOLUS,
      HistoryLogRecordType.BASAL_RATE,
      HistoryLogRecordType.SUSPEND,
      HistoryLogRecordType.DATE_CHANGE,
      HistoryLogRecordType.SUGGESTED_CALC,
      HistoryLogRecordType.REMOTE_HAZARD_ALARM,
      HistoryLogRecordType.ALARM,
      HistoryLogRecordType.BLOOD_GLUCOSE,
      HistoryLogRecordType.CARB,
      HistoryLogRecordType.TERMINATE_BOLUS,
      HistoryLogRecordType.TERMINATE_BASAL,
      HistoryLogRecordType.ACTIVATE,
      HistoryLogRecordType.RESUME,
      HistoryLogRecordType.DOWNLOAD,
      HistoryLogRecordType.OCCLUSION
    ];
  }
  HistoryLogRecordType.values = values;
})(HistoryLogRecordType = exports.HistoryLogRecordType || (exports.HistoryLogRecordType = {}));
var HistoryLogRecordFlag;
(function(HistoryLogRecordFlag) {
  HistoryLogRecordFlag[HistoryLogRecordFlag["CARRY_OVER"] = 1] = "CARRY_OVER";
  HistoryLogRecordFlag[HistoryLogRecordFlag["NEW_DAY"] = 2] = "NEW_DAY";
  HistoryLogRecordFlag[HistoryLogRecordFlag["IN_PROGRESS"] = 4] = "IN_PROGRESS";
  HistoryLogRecordFlag[HistoryLogRecordFlag["END_DAY"] = 8] = "END_DAY";
  HistoryLogRecordFlag[HistoryLogRecordFlag["UNCONFIRMED"] = 16] = "UNCONFIRMED";
  HistoryLogRecordFlag[HistoryLogRecordFlag["REVERSE_CORR"] = 256] = "REVERSE_CORR";
  HistoryLogRecordFlag[HistoryLogRecordFlag["MAX_BOLUS"] = 512] = "MAX_BOLUS";
  HistoryLogRecordFlag[HistoryLogRecordFlag["ERROR"] = 2147483648] = "ERROR";
})(HistoryLogRecordFlag = exports.HistoryLogRecordFlag || (exports.HistoryLogRecordFlag = {}));
(function(HistoryLogRecordFlag) {
  function values() {
    return [
      HistoryLogRecordFlag.CARRY_OVER,
      HistoryLogRecordFlag.NEW_DAY,
      HistoryLogRecordFlag.IN_PROGRESS,
      HistoryLogRecordFlag.END_DAY,
      HistoryLogRecordFlag.UNCONFIRMED,
      HistoryLogRecordFlag.REVERSE_CORR,
      HistoryLogRecordFlag.MAX_BOLUS,
      HistoryLogRecordFlag.ERROR
    ];
  }
  HistoryLogRecordFlag.values = values;
})(HistoryLogRecordFlag = exports.HistoryLogRecordFlag || (exports.HistoryLogRecordFlag = {}));
class DateChangeLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, newDate) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.newDate = newDate;
  }
}
exports.DateChangeLogRecord = DateChangeLogRecord;
class TimeChangeLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, newTime) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.newTime = newTime;
  }
}
exports.TimeChangeLogRecord = TimeChangeLogRecord;
class BasalLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, basalRatePerHour, durationInMinutes, percent) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.basalRatePerHour = basalRatePerHour;
    this.durationInMinutes = durationInMinutes;
    this.percent = percent;
  }
}
exports.BasalLogRecord = BasalLogRecord;
class BolusLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, units, extendedDurationMinutes, calculationRecordOffset, immediateDurationSeconds) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.units = units;
    this.extendedDurationMinutes = extendedDurationMinutes;
    this.calculationRecordOffset = calculationRecordOffset;
    this.immediateDurationSeconds = immediateDurationSeconds;
    this.extended = (extendedDurationMinutes != 0);
  }
}
exports.BolusLogRecord = BolusLogRecord;
class SuggestedCalculationLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, correctionDelivered, carbBolusDelivered, correctionProgrammed, carbBolusProgrammed, correctionSuggested, carbBolusSuggested, correctionJob, mealJob, correctionFactorUsed, currentBG, targetBG, correctionThresholdBG, carbGrams, icRatioUsed) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.correctionDelivered = correctionDelivered;
    this.carbBolusDelivered = carbBolusDelivered;
    this.correctionProgrammed = correctionProgrammed;
    this.carbBolusProgrammed = carbBolusProgrammed;
    this.correctionSuggested = correctionSuggested;
    this.carbBolusSuggested = carbBolusSuggested;
    this.correctionJob = correctionJob;
    this.mealJob = mealJob;
    this.correctionFactorUsed = correctionFactorUsed;
    this.currentBG = currentBG;
    this.targetBG = targetBG;
    this.correctionThresholdBG = correctionThresholdBG;
    this.carbGrams = carbGrams;
    this.icRatioUsed = icRatioUsed;
  }
}
exports.SuggestedCalculationLogRecord = SuggestedCalculationLogRecord;
class AlarmLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, alarmTime, alarmType, fileNumber, lineNumber, alarmErrorCode) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.alarmTime = alarmTime;
    this.alarmType = alarmType;
    this.fileNumber = fileNumber;
    this.lineNumber = lineNumber;
    this.alarmErrorCode = alarmErrorCode;
  }
}
exports.AlarmLogRecord = AlarmLogRecord;
class RemoteHazardAlarmLogRecord extends AlarmLogRecord {}
exports.RemoteHazardAlarmLogRecord = RemoteHazardAlarmLogRecord;
var BloodGlucoseFlag;
(function(BloodGlucoseFlag) {
  BloodGlucoseFlag[BloodGlucoseFlag["MANUAL_FLAG"] = 1] = "MANUAL_FLAG";
  BloodGlucoseFlag[BloodGlucoseFlag["TEMPERATURE_FLAG"] = 2] = "TEMPERATURE_FLAG";
  BloodGlucoseFlag[BloodGlucoseFlag["BELOW_TARGET_FLAG"] = 4] = "BELOW_TARGET_FLAG";
  BloodGlucoseFlag[BloodGlucoseFlag["ABOVE_TARGET_FLAG"] = 8] = "ABOVE_TARGET_FLAG";
  BloodGlucoseFlag[BloodGlucoseFlag["RANGE_ERROR_LOW_FLAG"] = 16] = "RANGE_ERROR_LOW_FLAG";
  BloodGlucoseFlag[BloodGlucoseFlag["RANGE_ERROR_HIGH_FLAG"] = 32] = "RANGE_ERROR_HIGH_FLAG";
  BloodGlucoseFlag[BloodGlucoseFlag["OTHER_ERROR_FLAG"] = 64] = "OTHER_ERROR_FLAG";
})(BloodGlucoseFlag = exports.BloodGlucoseFlag || (exports.BloodGlucoseFlag = {}));
(function(BloodGlucoseFlag) {
  function values() {
    return [
      BloodGlucoseFlag.MANUAL_FLAG,
      BloodGlucoseFlag.TEMPERATURE_FLAG,
      BloodGlucoseFlag.BELOW_TARGET_FLAG,
      BloodGlucoseFlag.ABOVE_TARGET_FLAG,
      BloodGlucoseFlag.RANGE_ERROR_LOW_FLAG,
      BloodGlucoseFlag.RANGE_ERROR_HIGH_FLAG,
      BloodGlucoseFlag.OTHER_ERROR_FLAG
    ];
  }
  BloodGlucoseFlag.values = values;

  function fromBitSet(bits) {
    return new Set(values().filter(bgFlag => (bgFlag & bits) !== 0));
  }
  BloodGlucoseFlag.fromBitSet = fromBitSet;
})(BloodGlucoseFlag = exports.BloodGlucoseFlag || (exports.BloodGlucoseFlag = {}));
class BloodGlucoseLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, errorCode, bgReading, userTag1, userTag2, bgFlags) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.errorCode = errorCode;
    this.bgReading = bgReading;
    this.userTag1 = userTag1;
    this.userTag2 = userTag2;
    this.bgFlags = bgFlags;
  }
}
exports.BloodGlucoseLogRecord = BloodGlucoseLogRecord;
class CarbLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, carbs, wasPreset, presetType) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.carbs = carbs;
    this.wasPreset = wasPreset;
    this.presetType = presetType;
  }
}
exports.CarbLogRecord = CarbLogRecord;
class TerminateBolusLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, insulinLeft, timeLeftMinutes) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.insulinLeft = insulinLeft;
    this.timeLeftMinutes = timeLeftMinutes;
  }
}
exports.TerminateBolusLogRecord = TerminateBolusLogRecord;
class TerminateBasalLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, timeLeftMinutes) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.timeLeftMinutes = timeLeftMinutes;
  }
}
exports.TerminateBasalLogRecord = TerminateBasalLogRecord;
class ActivateLogRecord extends HistoryLogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags, lotNumber, serialNumber, podVersion, interlockVersion) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error, historyLogRecordType, flags);
    this.lotNumber = lotNumber;
    this.serialNumber = serialNumber;
    this.podVersion = podVersion;
    this.interlockVersion = interlockVersion;
  }
}
exports.ActivateLogRecord = ActivateLogRecord;
class PumpAlarmDetails extends LogRecord {
  constructor(logType, logIndex, timestamp, secondsSincePowerUp, error, alarmTimestamp, alarmType, alarmErrorCode, lotNumber, sequenceNumber, processorVersion, interlockVersion) {
    super(logType, logIndex, timestamp, secondsSincePowerUp, error);
    this.alarmTimestamp = alarmTimestamp;
    this.alarmType = alarmType;
    this.alarmErrorCode = alarmErrorCode;
    this.lotNumber = lotNumber;
    this.sequenceNumber = sequenceNumber;
    this.processorVersion = processorVersion;
    this.interlockVersion = interlockVersion;
  }
}
exports.PumpAlarmDetails = PumpAlarmDetails;
class AlarmType {
  constructor(id, explanation, stopsDelivery) {
    this.id = id;
    this.explanation = explanation;
    this.stopsDelivery = stopsDelivery;
  }
  static forID(id) {
    return this.values().find(alarmType => alarmType.id == id);
  }
  static values() {
    return [
      AlarmType.PDM_ERROR0,
      AlarmType.PDM_ERROR1,
      AlarmType.PDM_ERROR2,
      AlarmType.PDM_ERROR3,
      AlarmType.PDM_ERROR4,
      AlarmType.PDM_ERROR5,
      AlarmType.PDM_ERROR6,
      AlarmType.PDM_ERROR7,
      AlarmType.PDM_ERROR8,
      AlarmType.PDM_ERROR9,
      AlarmType.SYSTEM_ERROR10,
      AlarmType.UNKNOWN11,
      AlarmType.SYSTEM_ERROR12,
      AlarmType.HAZ_REMOTE,
      AlarmType.HAZ_PUMP_VOL,
      AlarmType.HAZ_PUMP_AUTO_OFF,
      AlarmType.HAZ_PUMP_EXPIRED,
      AlarmType.HAZ_PUMP_OCCL,
      AlarmType.HAZ_PUMP_ACTIVATE,
      AlarmType.UNKNOWN19,
      AlarmType.UNKNOWN20,
      AlarmType.ADV_KEY,
      AlarmType.UNKNOWN22,
      AlarmType.ADV_PUMP_VOL,
      AlarmType.ADV_PUMP_AUTO_OFF,
      AlarmType.ADV_PUMP_SUSPEND,
      AlarmType.ADV_PUMP_EXP1,
      AlarmType.ADV_PUMP_EXP2,
      AlarmType.SYSTEM_ERROR28,
      AlarmType.EXP_WARNING,
      AlarmType.HAZ_PDM_AUTO_OFF
    ];
  }
}
AlarmType.PDM_ERROR0 = new AlarmType(0, "PDM error", null);
AlarmType.PDM_ERROR1 = new AlarmType(1, "PDM error", null);
AlarmType.PDM_ERROR2 = new AlarmType(2, "PDM error", null);
AlarmType.PDM_ERROR3 = new AlarmType(3, "PDM error", null);
AlarmType.PDM_ERROR4 = new AlarmType(4, "PDM error", null);
AlarmType.PDM_ERROR5 = new AlarmType(5, "PDM error", null);
AlarmType.PDM_ERROR6 = new AlarmType(6, "PDM error", null);
AlarmType.PDM_ERROR7 = new AlarmType(7, "PDM error", null);
AlarmType.PDM_ERROR8 = new AlarmType(8, "PDM error", null);
AlarmType.PDM_ERROR9 = new AlarmType(9, "PDM error", null);
AlarmType.SYSTEM_ERROR10 = new AlarmType(10, "system error", false);
AlarmType.UNKNOWN11 = new AlarmType(11, "Unknown alarm type", null);
AlarmType.SYSTEM_ERROR12 = new AlarmType(12, "system error", null);
AlarmType.HAZ_REMOTE = new AlarmType(13, "clock reset alarm", false);
AlarmType.HAZ_PUMP_VOL = new AlarmType(14, "empty reservoir", true);
AlarmType.HAZ_PUMP_AUTO_OFF = new AlarmType(15, "auto-off", true);
AlarmType.HAZ_PUMP_EXPIRED = new AlarmType(16, "pod expired", true);
AlarmType.HAZ_PUMP_OCCL = new AlarmType(17, "pump site occluded", true);
AlarmType.HAZ_PUMP_ACTIVATE = new AlarmType(18, "pod is a lump of coal", false);
AlarmType.UNKNOWN19 = new AlarmType(19, "Unknown alarm type", null);
AlarmType.UNKNOWN20 = new AlarmType(20, "Unknown alarm type", null);
AlarmType.ADV_KEY = new AlarmType(21, "PDM stuck key detected", false);
AlarmType.UNKNOWN22 = new AlarmType(22, "Unknown alarm type", null);
AlarmType.ADV_PUMP_VOL = new AlarmType(23, "low reservoir", false);
AlarmType.ADV_PUMP_AUTO_OFF = new AlarmType(24, "15 minutes to auto-off warning", false);
AlarmType.ADV_PUMP_SUSPEND = new AlarmType(25, "suspend done", false);
AlarmType.ADV_PUMP_EXP1 = new AlarmType(26, "pod expiration advisory", false);
AlarmType.ADV_PUMP_EXP2 = new AlarmType(27, "pod expiration alert", false);
AlarmType.SYSTEM_ERROR28 = new AlarmType(28, "system error", null);
AlarmType.EXP_WARNING = new AlarmType(37, "pod expiration advisory", false);
AlarmType.HAZ_PDM_AUTO_OFF = new AlarmType(39, "auto-off", true);
exports.AlarmType = AlarmType;
//# sourceMappingURL=LogRecord.js.map
