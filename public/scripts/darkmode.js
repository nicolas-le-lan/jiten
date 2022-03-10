(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (!lightSwitch) {
    return;
  }

  function darkMode() {
    document.querySelectorAll(".bg-light").forEach((element) => {
      element.className = element.className.replace(/-light/g, "-dark");
    });

    document.body.classList.add("bg-dark");

    if (document.body.classList.contains("text-dark")) {
      document.body.classList.replace("text-dark", "text-light");
    } else {
      document.body.classList.add("text-light");
    }

    document.querySelectorAll('li').forEach(function (item) {
      if (item.classList.contains("text-dark")) {
        item.classList.replace("text-dark", "text-light");
      } else {
        item.classList.add("text-light");
      }
    })

    document.querySelectorAll('input').forEach(function (item) {
      if (item.classList.contains("text-dark")) {
        item.classList.replace("text-dark", "text-light");
      } else {
        item.classList.add("text-light");
      }
    })

    document.querySelectorAll('aside').forEach(function (item) {
      if (item.classList.contains("text-dark")) {
        item.classList.replace("text-dark", "text-light");
      } else {
        item.classList.add("text-light");
      }
    })

    document.querySelectorAll('textarea').forEach(function (item) {
      if (item.classList.contains("text-dark")) {
        item.classList.replace("text-dark", "text-light");
      } else {
        item.classList.add("text-light");
      }
    })

    document.querySelectorAll("[id^='last_research']").forEach(function (item) {
      if (item.classList.contains("text-dark")) {
        item.classList.replace("text-dark", "text-light");
      } else {
        item.classList.add("text-light");
      }
    })

    if (!lightSwitch.checked) {
      lightSwitch.checked = true;
    }
    localStorage.setItem("lightSwitch", "dark");
  }

  function lightMode() {
    document.querySelectorAll(".bg-dark").forEach((element) => {
      element.className = element.className.replace(/-dark/g, "-light");
    });

    document.body.classList.add("bg-light");

    if (document.body.classList.contains("text-light")) {
      document.body.classList.replace("text-light", "text-dark");
    } else {
      document.body.classList.add("text-dark");
    }

    document.querySelectorAll('li').forEach(function (item) {
      if (item.classList.contains("text-light")) {
        item.classList.replace("text-light", "text-dark");
      } else {
        item.classList.add("text-dark");
      }
    })

    document.querySelectorAll('input').forEach(function (item) {
      if (item.classList.contains("text-light")) {
        item.classList.replace("text-light", "text-dark");
      } else {
        item.classList.add("text-dark");
      }
    })

    document.querySelectorAll('aside').forEach(function (item) {
      if (item.classList.contains("text-light")) {
        item.classList.replace("text-light", "text-dark");
      } else {
        item.classList.add("text-dark");
      }
    })

    document.querySelectorAll('textarea').forEach(function (item) {
      if (item.classList.contains("text-light")) {
        item.classList.replace("text-light", "text-dark");
      } else {
        item.classList.add("text-dark");
      }
    })

    document.querySelectorAll("[id^='last_research']").forEach(function (item) {
      if (item.classList.contains("text-light")) {
        item.classList.replace("text-light", "text-dark");
      } else {
        item.classList.add("text-dark");
      }
    })

    if (lightSwitch.checked) {
      lightSwitch.checked = false;
    }
    localStorage.setItem("lightSwitch", "light");
  }

  function onToggleMode() {
    if (lightSwitch.checked) {
      darkMode();
    } else {
      lightMode();
    }
  }

  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    }
    return "light";
  }

  function setup() {
    var settings = localStorage.getItem("lightSwitch");
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == "dark") {
      lightSwitch.checked = true;
    }

    lightSwitch.addEventListener("change", onToggleMode);
    onToggleMode();
  }

  setup();

})();