<template>
  <div id="app">
    <b-overlay
      :show="overlay.show"
      :variant="overlay.variant"
      :opacity="overlay.opacity"
      :blur="overlay.blur"
      :rounded="overlay.sm"
    >
      <template #overlay>
        <div class="text-center">
          <i class="fad fa-spinner-third fa-spin" style="font-size: 30px"></i>
          <p style="margin-top: 10px; font-size: 18px">Loading...</p>
        </div>
      </template>

      <div class="container" style="min-height: 450px">
        <div class="weather">
          <div class="weather__top">
            <b-row>
              <b-col>
                <div class="input-search">
                  <b-input-group>
                    <b-input-group-text>
                      <i class="fas fa-search-location"></i>
                    </b-input-group-text>

                    <b-form-input
                      v-model="location"
                      @keyup.enter="fetchWeather()"
                    ></b-form-input>
                  </b-input-group>
                </div>
              </b-col>
            </b-row>
          </div>

          <div class="weather__body" v-if="weather.id">
            <div class="card">
              <div class="card-body">
                <b-row>
                  <b-col>
                    <h4 class="location-name">
                      {{ weather.name }}, {{ weather.sys.country }}
                    </h4>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <b-img
                      center
                      :src="`https://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@4x.png`"
                      alt="Weather icon"
                    ></b-img>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <div class="weather-temp">
                      <h4>{{ Math.round(weather.main.temp) }}&#176;C</h4>
                    </div>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <div class="weather-desc">
                      <h5>
                        {{ weather.weather[0].main }} -
                        {{ weather.weather[0]["description"] }}
                      </h5>
                    </div>
                  </b-col>
                </b-row>

                <b-row style="margin-top: 10px; margin-bottom: 10px">
                  <b-col cols="12" sm="12" md="12" lg="6">
                    <div class="weather-humidity">
                      <h5>Humidity: {{ weather.main.humidity }}</h5>
                    </div>
                  </b-col>

                  <b-col cols="12" sm="12" md="12" lg="6">
                    <div class="weather-temp-maxmin">
                      <h5>
                        Temp max: {{ Math.round(weather.main.temp_max) }} - Temp
                        min: {{ Math.round(weather.main.temp_min) }}
                      </h5>
                    </div>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <div class="weather-date">
                      <h5>{{ this.dateTimeNow() }}</h5>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>

          <div class="weather__error" v-else>
            <div class="card">
              <div class="card-body">
                <h4>City not found</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import CONST_API from "./const/api";

export default {
  name: "App",
  data() {
    return {
      location: "",
      weather: {},
      overlay: {
        show: false,
        variant: "light",
        opacity: 1,
        blur: "1rem",
        rounded: "sm",
      },
    };
  },
  methods: {
    fetchWeather() {
      this.overlay.show = true;
      fetch(
        `${CONST_API.url_base}weather?q=${this.location}&units=metric&APPID=${CONST_API.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.setResults(res);
        });

      this.overlay.show = false;
    },
    setResults(results) {
      this.weather = results;
    },
    dateTimeNow() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>
