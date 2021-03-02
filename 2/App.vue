<template>
  <form id="form-1" @submit.prevent="submitHandler">
    <fieldset style="width: 500px; margin: 50px auto">
      <div class="city">
        <select name="city" id="city" v-model="city" @change="changeCity">
          <option :value="key" v-for="(city, key, i) in objCity" :key="i">
            {{ city }}
          </option>
        </select>
      </div>
      <div class="guilds">
        <select name="guilds" id="guilds" v-model="guild" @change="changeGuild">
          <option disabled value="">Выберите цех</option>
          <option :value="key" v-for="(guild, key, i) in objGuilds" :key="i">
            {{ guild }}
          </option>
        </select>
      </div>
      <div class="employee">
        <select name="employee" id="employee" v-model="employee">
          <option disabled value="">Выберите сотрудника</option>
          <option
            :value="key"
            v-for="(employee, key, i) in objEmployees"
            :key="i"
          >
            {{ employee }}
          </option>
        </select>
      </div>
      <div class="brigade">
        <select name="brigade" id="brigade" v-model="brigade">
          <option value="day">С 8:00 до 20:00</option>
          <option value="night">С 20:00 до 8:00</option>
        </select>
      </div>
      <div class="shift">
        <select name="shift" id="shift" v-model="shift">
          <option value="first">Первая смена</option>
          <option value="second">Вторая смена</option>
        </select>
      </div>
      <div class="submit">
        <input type="submit" id="submit" value="Отправить" />
      </div>
    </fieldset>
  </form>
</template>
<script>
import data from "./data.json";
export default {
  data: () => ({
    objCity: {},
    objGuilds: {},
    objEmployees: {},
    city: "SP",
    guild: "",
    employee: "",
    brigade: "day",
    shift: "first",
  }),
  created() {
    this.objCity = data.city;
    this.objGuilds = data.guilds[this.city];
  },
  updated() {},
  methods: {
    submitHandler() {
      const result = {
        city: this.city,
        guild: this.guild,
        employee: this.employee,
        brigade: this.brigade,
        shift: this.shift,
      };
      document.cookie = `result=${JSON.stringify(result)}`;
      console.log(document.cookie);
    },
    changeCity() {
      this.guild = "";
      this.objGuilds = data.guilds[this.city];
      this.employee = "";
      this.objEmployees = data.employees[this.guild];
    },
    changeGuild() {
      this.employee = "";
      this.objEmployees = data.employees[this.guild];
    },
  },
};
</script>
