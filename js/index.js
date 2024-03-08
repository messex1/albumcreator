//References
const AlbumTitle = document.querySelector('#album-title');
const AlbumDescription = document.querySelector('#album-description');
const AlbumArt = document.querySelector('#album-art');
const AlbumForm = document.querySelector('#album-form');

//Event Listeners
AlbumTitle.addEventListener('input', onHandleInputTitle);
AlbumDescription.addEventListener('input', onHandleInputDescription);
AlbumArt.addEventListener('change', onChangeSelectArt);
AlbumForm.addEventListener('submit', onSubmitForm);
d
//Funtions
//Form Submit Event
function onSubmitForm(e){
    e.preventDefault();
    const albumtitle = e.currentTarget.elements['album-title'].value;
    const albumdescription = e.currentTarget.elements['album-description'].value;
    const albumart = e.currentTarget.elements['album-art'].value;

    if (albumtitle.trim() === '' && albumdescription.trim() === ''){
        AlbumTitle.classList.add('is-invalid');
        AlbumDescription.classList.add('is-invalid');
        alert("Album title and description cannot be empty");
        return; // Stop execution if invalid
    } else {
        if (albumtitle.trim() === ''){
            AlbumTitle.classList.add('is-invalid');
            alert("Album title cannot be empty");
            return; // Stop execution if invalid
        } else {
            AlbumTitle.classList.remove('is-invalid');
        }

        if (albumdescription.trim() === ''){
            AlbumDescription.classList.add('is-invalid');
            alert("Album description cannot be empty");
            return; // Stop execution if invalid
        } else {
            AlbumDescription.classList.remove('is-invalid');
        }
    }

    if (albumart.trim() === ''){
        AlbumArt.classList.add('is-invalid');
        alert("Album art cannot be empty");
        return; // Stop execution if invalid
    } else {
        AlbumArt.classList.remove('is-invalid');
    }

    // If all fields are valid, render the album card and reset the form
    renderAlbumcard(albumtitle, albumdescription, albumart);
    e.currentTarget.reset();
}

//Validation Errors-Album title
function onHandleInputTitle(e){
    const onHandleInputTitle = e.currentTarget.value;

    if (onHandleInputTitle.length > 15 ){
        e.currentTarget.classList.add('is-invalid');
    }
    if (onHandleInputTitle.length < 15 ){
        e.currentTarget.classList.remove('is-invalid');
    }
    if (onHandleInputTitle.length = '' ){
        e.currentTarget.classList.remove('is-invalid');
    }
}

//Validation Errors-Album description
function onHandleInputDescription(e){
    const onHandleInputDescription = e.currentTarget.value;

    if (onHandleInputDescription.length > 30 ){
        e.currentTarget.classList.add('is-invalid');
    }
    if (onHandleInputDescription.length < 30 ){
        e.currentTarget.classList.remove('is-invalid');
    }
}

//Validation Errors-Album art
function onChangeSelectArt(e){
    const onChangeSelectArt = e.currentTarget.value;
    if (onChangeSelectArt === ''){
        e.currentTarget.classList.add('is-invalid');
    } 
    if (onChangeSelectArt !== ''){
        e.currentTarget.classList.remove('is-invalid');
    }
}


//Validation Success-Album Card
function renderAlbumcard(albumtitle, albumdescription, albumart){
    const template = `<div class="col">
    <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" src="img/${albumart}" />
        <div class="card-body">
            <h5 class="card-title">${albumtitle}</h5>
            <p class="card-text">${albumdescription}</p>
        </div>
    </div>
    </div>`;
    document.querySelector('#all-albums-list').insertAdjacentHTML('afterbegin', template);
}