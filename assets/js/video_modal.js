// Obtenha os elementos do modal e do vídeo
          var modal = document.getElementById('videoModal');
          var videoFrame = document.getElementById('videoFrame');
          var span = document.getElementsByClassName('close')[0];

          // Função para abrir o modal com o vídeo
          function openModal(videoId) {
              videoFrame.src = 'https://www.youtube.com/embed/' + videoId;
              modal.style.display = 'flex';
          }

          // Função para fechar o modal
          span.onclick = function() {
              modal.style.display = 'none';
              videoFrame.src = '';
          }

          // Feche o modal clicando fora dele
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = 'none';
                  videoFrame.src = '';
              }
          }

          // Anexe o evento de clique aos cartões de vídeo
          var videoCards = document.getElementsByClassName('video-card');
          for (var i = 0; i < videoCards.length; i++) {
              videoCards[i].onclick = function() {
                  var videoId = this.getAttribute('data-video-id');
                  openModal(videoId);
              }
          }
