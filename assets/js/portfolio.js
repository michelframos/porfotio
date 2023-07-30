const botoesVideos = document.querySelectorAll('.botao-video');
if(botoesVideos.length > 0){
    for(let i = 0; i < botoesVideos.length; i++){

        botoesVideos[i].addEventListener('click', async () => {
            const titulo = botoesVideos[i].dataset.titulo;
            const arquivo = botoesVideos[i].dataset.arquivo;

            document.querySelector('#titulo-modal').innerHTML = titulo;
            document.querySelector('#video-modal').innerHTML = `<video width="100%" src="assets/videos/${arquivo}.mp4" controls></video>`;

            $('#modal-video').modal({
                showClose: false,
                clickClose: false,
            });

            console.log(titulo, arquivo);
        });
    }
}