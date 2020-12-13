     
     

     function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
      var canvas = document.getElementById('canvas');
    
      var context = canvas.getContext('2d');

      

      var sources = {
        darthVader: 'canvas5.jpg',
        yoda: 'canvas6.png'
      };

      loadImages(sources, function(images) {
        context.drawImage(images.darthVader, 100, 30, 200, 137);
        context.drawImage(images.yoda, 350, 55, 93, 104);
      });


  