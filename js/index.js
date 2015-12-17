var plots = [
  {
    channel: "nightly",
    version: "45",
    metric: "FX_TAB_SWITCH_TOTAL_E10S_MS",
    sanitize: true,
    trim: true,
  },
  {
    channel: "nightly",
    version: "45",
    metric: "FX_TAB_SWITCH_TOTAL_E10S_MS",
    sanitize: true,
    useSubmissionDate: true,
    evoVersions: 3,
  },
  {
    channel: "nightly",
    version: "45",
    metric: "FX_TAB_SWITCH_SPINNER_VISIBLE_MS",
    sanitize: true,
    trim: true,
  },
  {
    channel: "nightly",
    version: "45",
    metric: "FX_TAB_SWITCH_SPINNER_VISIBLE_MS",
    sanitize: true,
    useSubmissionDate: true,
    evoVersions: 3,
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SIMPLE_MEASURES_FIRSTPAINT",
    "useSubmissionDate": false,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SIMPLE_MEASURES_FIRSTPAINT",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SIMPLE_MEASURES_SHUTDOWNDURATION",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SIMPLE_MEASURES_SHUTDOWNDURATION",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_TAB_ANIM_ANY_FRAME_INTERVAL_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_TAB_ANIM_ANY_FRAME_INTERVAL_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_TAB_ANIM_OPEN_PREVIEW_FRAME_INTERVAL_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_TAB_ANIM_OPEN_PREVIEW_FRAME_INTERVAL_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_REFRESH_DRIVER_CHROME_FRAME_DELAY_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_REFRESH_DRIVER_CHROME_FRAME_DELAY_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "EVENTLOOP_UI_ACTIVITY_EXP_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "EVENTLOOP_UI_ACTIVITY_EXP_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SUBPROCESS_ABNORMAL_ABORT",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0,
    keyLimit: 3,
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SUBPROCESS_ABNORMAL_ABORT",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3",
    keyLimit: 3,
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_PAGE_LOAD_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_PAGE_LOAD_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SLOW_SCRIPT_NOTICE_COUNT",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "SLOW_SCRIPT_NOTICE_COUNT",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_NEW_WINDOW_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "FX_NEW_WINDOW_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MAX_PAUSE_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MAX_PAUSE_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MARK_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MARK_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SWEEP_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SWEEP_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MARK_ROOTS_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MARK_ROOTS_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MARK_GRAY_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_MARK_GRAY_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SLICE_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SLICE_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SCC_SWEEP_TOTAL_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SCC_SWEEP_TOTAL_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SCC_SWEEP_MAX_PAUSE_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "GC_SCC_SWEEP_MAX_PAUSE_MS",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_WORKER",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_WORKER",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_FULL",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_FULL",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_MAX_PAUSE",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_MAX_PAUSE",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_TIME_BETWEEN",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": 0
  },
  {
    "channel": "nightly",
    "version": "45",
    "metric": "CYCLE_COLLECTOR_TIME_BETWEEN",
    "useSubmissionDate": true,
    "sanitize": true,
    "trim": true,
    "compare": "e10sEnabled",
    "sensibleCompare": true,
    "evoVersions": "3"
  },
];
window.addEventListener('load', () => {
  var _versions = {};
  var channelEl = document.querySelector('#channel');
  var versionEl = document.querySelector('#version');
  var evoVersionsEl = document.querySelector('#evo-versions');
  var plotsEl = document.querySelector('.plots-container');

  Telemetry.init(() => {
    Telemetry.getVersions()
      .sort()
      .reverse()
      .map(versionString => {
        var [channel, version] = versionString.split('/');
        if (!_versions[channel]) {
          _versions[channel] = [version];
        } else {
          _versions[channel].push(version);
        }
      });

    Object.keys(_versions).forEach(channel =>
      createOption(channelEl, channel, channel, channel == 'nightly'));
    updateVersions();

    channelEl.addEventListener('change', updateVersions);
    versionEl.addEventListener('change', plot);
    evoVersionsEl.addEventListener('change', plot);
    plot();
  });

  function updateVersions() {
    removeAllChildren(versionEl);
    _versions[channelEl.selectedOptions[0].value].forEach(version =>
      createOption(versionEl, version));
    versionEl.dispatchEvent(new Event('change'));
  }

  function plot() {
    removeAllChildren(plotsEl);
    plots.forEach(plot => {
      plot.channel = channelEl.selectedOptions[0].value;
      plot.version = versionEl.selectedOptions[0].value;
      plot.evoVersions = plot.evoVersions ? evoVersionsEl.value : 0;
      TelemetryWrapper.go(plot, plotsEl)
    });
  }

  function createOption(parentEl, value, text = value, selected = false) {
    var option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    option.selected = selected;
    parentEl.appendChild(option);
  }

  function removeAllChildren(parentEl) {
    while (parentEl.firstChild) {
      parentEl.removeChild(parentEl.firstChild);
    }
  }

});
