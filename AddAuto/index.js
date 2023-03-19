// buttons
const backButton = document.getElementById('back-btn');
const nextButton = document.getElementById('next-btn');

//section
const buildSection = document.getElementById('build-container');
const modelSection = document.getElementById('model-container');
const additionallySection = document.getElementById('additionally-container');
const photoSection = document.getElementById('photo-container');
const descriptionSection = document.getElementById('description-container');
const readySection = document.getElementById('ready-container');


/* Build (begin) */
function checkBuild()
{
    nextButton.disabled = false;
    selectedNextArrow();
}
/* Build (end) */


/* Model (begin) */
function checkModel(select)
{
    // Отображение
    if(select.value != '')
    {
        select.style.color = '#333333';
        select.style.background = 'url(images/page2/selected.jpg) no-repeat right center';
    }

    // Валидация
    validModel();
}

function validModel()
{
    let make = document.getElementById('make-select');
    let model = document.getElementById('model-select');
    let year = document.getElementById('year-select');

    if(make.value != '' && model.value != '' && year.value != '')
    {
        nextButton.disabled = false;
        selectedNextArrow();
    }
}
/* Model (end) */


/* Additionally (begin) */
function checkAdditionally(select)
{
    let engine = document.getElementById('engine-select');
    let capacity = document.getElementById('capacity-select');
    let drive = document.getElementById('drive-select');
    let transmission = document.getElementById('transmission-select');

    // отображение
    if(select.value != '')
    {
        select.style.color = '#333333';
        select.style.background = 'url(images/page3/Delete2.jpg) no-repeat right center';
        select.addEventListener('mousedown', function(){
            select.value = '';
            select.style.background = 'url(images/page2/selected.jpg) no-repeat right center';
        });
    }
    

    if(engine.value == 'electric')
    {
        capacity.style.display = 'none';
        drive.style.display = 'none';
    }
    else{
        capacity.style.display = 'block';
        drive.style.display = 'block';
    }

    // валидация
    validAdditionally();
}

function validAdditionally()
{
    let engine = document.getElementById('engine-select');
    let capacity = document.getElementById('capacity-select');
    let drive = document.getElementById('drive-select');
    let transmission = document.getElementById('transmission-select');

    if(engine.value == 'electric' && transmission.value != '')
    {
        nextButton.disabled = false;
        selectedNextArrow();
    }
    else if(engine.value != '' && capacity.value != '' && drive.value != '' && transmission.value != '')
    {
        nextButton.disabled = false;
        selectedNextArrow();
    }
    else
    {
        nextButton.disabled = true;
        disabledNextArrow();
    }
}
/* Additionally (end) */


/* Photo (begin) */
function getPhotoFiles()
{
    let files = document.getElementById('first-photo').files;
    document.getElementById('first-label').style.display = 'none';
    document.getElementById('show-file1').innerHTML += '<img id="photo-image1" src="' + URL.createObjectURL(files[0]) + '" />';
    document.getElementById('show-file1').style.display = 'flex';
    nextButton.disabled = false;
    selectedNextArrow();

    // удаление фото
    document.getElementById('delete-img1').addEventListener('click', function(){
        document.getElementById('photo-image1').remove();
        document.getElementById('show-file1').style.display = 'none';
        document.getElementById('first-label').style.display = 'flex';
        nextButton.disabled = true;
        disabledNextArrow();
    });
}
/* Photo (begin) */


/* Description (begin) */
document.getElementById('description-text').addEventListener('input', function(){
    if(this.value.length > 25)
    {
        nextButton.disabled = false;
        selectedNextArrow();
    }
    else
    {
        nextButton.disabled = true;
        disabledNextArrow();
    }
});
/* Description (end) */


function disabledNextArrow(){
    document.getElementById('next-image').src = "images/page1/Arrow Right.png";
}

function selectedNextArrow(){
    document.getElementById('next-image').src = "images/page1/Arrow Right2.png";
}

// Кнопка "Назад"
backButton.addEventListener('click', function(){
    if(modelSection.style.display == 'flex')
    {
        modelSection.style.display = 'none';
        buildSection.style.display = 'block';
        document.getElementById('page2').style.backgroundColor = '#E2E5E9';
        document.getElementById('title').textContent = 'Выберите сборку';
        document.getElementById('title').style.maxWidth = '380px';
        nextButton.disabled = false;
        selectedNextArrow();
    }
    else if(additionallySection.style.display == 'flex')
    {
        additionallySection.style.display = 'none';
        modelSection.style.display = 'flex';
        document.getElementById('page3').style.backgroundColor = '#E2E5E9';
        document.getElementById('title').textContent = 'Марка, модель и год выпуска';
        document.getElementById('title').style.maxWidth = '300px';
        nextButton.disabled = false;
        selectedNextArrow();
    }
    else if(photoSection.style.display == 'block')
    {
        photoSection.style.display = 'none';
        additionallySection.style.display = 'flex';
        document.getElementById('page4').style.backgroundColor = '#E2E5E9';
        document.getElementById('title').textContent = 'Дополнительные характеристики';
        document.getElementById('title').style.maxWidth = '380px';
        nextButton.disabled = false;
        selectedNextArrow();
    }
    else if(descriptionSection.style.display == 'flex')
    {
        descriptionSection.style.display = 'none';
        photoSection.style.display = 'block';
        document.getElementById('page5').style.backgroundColor = '#E2E5E9';
        document.getElementById('title').textContent = 'Добавьте фото автомобиля';
        document.getElementById('title').style.maxWidth = '380px';
        nextButton.disabled = false;
        selectedNextArrow();
    }
    else if(readySection.style.display == 'flex')
    {
        readySection.style.display = 'none';
        descriptionSection.style.display = 'flex';
        document.getElementById('title').textContent = 'Добавьте описание автомобиля';
        document.getElementById('title').style.maxWidth = '380px';
        document.getElementById('pages').style.backgroundColor = '#ffffff';
        nextButton.firstChild.data = 'Далее';
        nextButton.style.color = '#000000';
        nextButton.style.backgroundColor = '#ffffff';
        document.getElementById('next-image').style.display = 'block';
        nextButton.disabled = false;
        selectedNextArrow();
    }
});

// Кнопка "Далее"
nextButton.addEventListener('click', function(){
    if(buildSection.style.display === 'block')
    {
        buildSection.style.display = 'none';
        modelSection.style.display = 'flex';
        document.getElementById('page2').style.backgroundColor = '#E62128';
        document.getElementById('title').textContent = 'Марка, модель и год выпуска';
        document.getElementById('title').style.maxWidth = '300px';
        nextButton.disabled = true;
        disabledNextArrow();
        validModel();
    }
    else if(modelSection.style.display == 'flex')
    {
        modelSection.style.display = 'none';
        additionallySection.style.display = 'flex';
        document.getElementById('page3').style.backgroundColor = '#E62128';
        document.getElementById('title').textContent = 'Дополнительные характеристики';
        document.getElementById('title').style.maxWidth = '380px';
        nextButton.disabled = true;
        disabledNextArrow();
        validAdditionally();
    }
    else if(additionallySection.style.display == 'flex')
    {
        additionallySection.style.display = 'none';
        photoSection.style.display = 'block';
        document.getElementById('page4').style.backgroundColor = '#E62128';
        document.getElementById('title').textContent = 'Добавьте фото автомобиля';
        document.getElementById('title').style.maxWidth = '380px';
        nextButton.disabled = true;
        disabledNextArrow();
    }
    else if(photoSection.style.display == 'block')
    {
        photoSection.style.display = 'none';
        descriptionSection.style.display = 'flex';
        document.getElementById('page5').style.backgroundColor = '#E62128';
        document.getElementById('title').textContent = 'Добавьте описание автомобиля';
        document.getElementById('title').style.maxWidth = '380px';
        nextButton.disabled = true;
        disabledNextArrow();
    }
    else if(descriptionSection.style.display == 'flex')
    {
        descriptionSection.style.display = 'none';
        readySection.style.display = 'flex';
        document.getElementById('title').textContent = 'Ваш автомобиль готов к добавлению!';
        document.getElementById('title').style.maxWidth = '410px';
        document.getElementById('pages').style.backgroundColor = '#E62128';
        nextButton.firstChild.data = 'Добавить';
        nextButton.style.color = '#ffffff';
        nextButton.style.backgroundColor = '#E62128';
        document.getElementById('next-image').style.display = 'none';
    }
});

