app.factory('mainPageFactory', function ($http, CONST) {
  return {
    textToSpeech: function (user) {
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': undefined
        },
        url: 'https://stream.watsonplatform.net/speech-to-text/api',
        data: user
      });
    },
/*
    getExamsByImage: function (image) {
      var fd = new FormData();
      fd.append('file', image[0]);
      console.log(fd);
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': undefined
        },
        url: CONST.BASE_API_URL + 'getByImage',
        data:fd,
      });
    },*/
    getExamsByImage: function (image) {
      image = 'http://meuprontuario.net/wp-content/uploads/2015/09/Guia-1.png'
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': undefined
        },
        url: CONST.BASE_API_URL + 'getByImage',
        data: image
      });
    },

    betIcs: function (data) {
      
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': undefined
        },
        url: CONST.BASE_API_URL + 'ics',
        data: data
      });
    },

    getCronogram: function (ids) {
      console.log(ids);
      return $http({
        method: 'POST',
        url: CONST.BASE_API_URL + 'roteiro',
        data: ids
      });
    },

  }
});
