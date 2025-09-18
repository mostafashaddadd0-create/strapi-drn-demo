// ./config/plugins.js
module.exports = ({ env }) => ({
  'cloud-cronjob-runner': {
    enabled: env.bool('CLOUD_CRONJOB_RUNNER_ENABLED', false),
    config: {
      apiUrl: env('API_URL', 'https://deserving-car-637751544e.strapiapp.com/admin'),              // URL بتاع السيرفر أو API
      apiToken: env('API_TOKEN', 'ca3c5d5a2b67a906fe036eee2dc8422eece9c648f9205b3694b86b98bacba359ede9a402a572c9834d9bc8b431d9cda410881dae5b6951a564437f3fd9937d9cd8aa5e6ba6505653c91e3b20ad912b5efdbe5ae278edd1d47edde01055f2b3bd249dff64ab3d7b451bec555fbaf8cc820929839fc22b3d070698a841984842b6'),          // التوكن
      firstRunWindow: env.int('FIRST_RUN_WINDOW', 0), // دقايق
    },
  },
});
