var comm = new Icecomm('mxj5NpcgQLisSWTfxbzCTHBCa0g3UggtTZWxm4JMK8zYxsau');

comm.connect('custom room', {audio: true});

comm.on('connected', function(peer) {
   document.body.appendChild(peer.getVideo());
});

comm.on('local', function(peer) {
  localVideo.src = peer.stream;
});

comm.on('disconnect', function(peer) {
  document.getElementById(peer.ID).remove();
});