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
    selectedNextArrow();
}
/* Build (end) */


/* Model (begin) */
function checkModel(select)
{
    $(select).one('click', function(event){
        $(`label[for='${this.id}']`).show();
        $(this).css('margin-bottom', '18px');
    });
    // Отображение
    if($(select).val() != null)
        $(select).css({'background': 'url(images/page2/selected.jpg) no-repeat right center', 'color': '#333333'});

    // Валидация
    validModel();
}

function validModel()
{
    if($("#make-select").val() != null && $("#model-select").val() != null && $("#year-select").val() != null)
        selectedNextArrow();
    else
        disabledNextArrow();
}
/* Model (end) */


/* Additionally (begin) */
function checkAdditionally(select)
{
    // добавление label
    $(`label[for='${select.id}']`).show();
    $(select).css('margin-bottom', '18px');
    

    // отображение
    if($(select).val() != null)
    {
        // замена стрелочки на крестик
        $(select).css({'background': 'url(images/page3/Delete2.jpg) no-repeat right center', 'color': '#333333'});
       
        // добавление событий после нажатия на крестик
        $(select).one('mousedown', function(){
            
            // применение изначальных стилей
            $(`label[for='${this.id}']`).hide();
            $(this).css('margin-bottom', '36px');
            $(this).val(null);
            $(this).css('background', 'url(images/page2/selected.jpg) no-repeat right center');


            $(this).on('focus', function(){
                if($(this).val() == null)
                {
                    $(this).css('background', 'url(images/page2/selected.jpg) no-repeat right center');
                    $(this).css('color', '#333333');

                    $(this).off('mouseenter');
                    $(this).off('mouseleave');
                }                    
            });
    
            $(select).on('focusout', function(){
                if($(this).val() == null)
                {
                    $(this).css('color', '#ADB5BD');
                    $(this).css('background', 'url(images/page2/disabled.jpg) no-repeat right center');
                    $("option").css('color', '#333333');

                    $(this).on('mouseenter', function(){
                        if($(this).val() == null)
                        {
                            $(this).css('color', '#333333');
                            $(this).css('background', 'url(images/page2/selected.jpg) no-repeat right center');
                        }  
                    });

                    $(this).on('mouseleave', function(){
                        if($(this).val() == null)
                        {
                            $(this).css('color', '#ADB5BD');
                            $(this).css('background', 'url(images/page2/disabled.jpg) no-repeat right center');
                        }
                    });
                }
            });

            validAdditionally(); // проверка на заполнение
        });
    }
    
    // отображение при выборе электрического двигателя
    if($("#engine-select").val() == 'electric')
    {
        $("#capacity-select").hide();
        $("#drive-select").hide();
        $("label[for='capacity-select']").css('display', 'none');
        $("label[for='drive-select']").css('display', 'none');
    }
    else{
        $("#capacity-select").show();
        $("#drive-select").show();

        if($("#capacity-select").val() != null)
            $("label[for='capacity-select']").show();
        if($("#drive-select").val() != null)
            $("label[for='drive-select']").show();
    }

    // валидация
    validAdditionally();
}

function validAdditionally()
{
    if($("#engine-select").val() == 'electric' && $("#transmission-select").val() != null)
        selectedNextArrow();
    else if($("#engine-select").val() != null && $("#capacity-select").val() != null && $("#drive-select").val() != null && $("#transmission-select").val() != null)
        selectedNextArrow();
    else
        disabledNextArrow();
}
/* Additionally (end) */


/* Photo (begin) */
// Первое фото
$("#first-photo").on('change', function(event){
    // получаем выбранный файл
    let selectedFile = event.target.files[0];
    // создаем объект FileReader
    let reader = new FileReader();
    // загружаем файл
    reader.readAsDataURL(selectedFile);
    // обработчик загрузки файла
    reader.onload = function(event) {
        // получаем URL-адрес файла
        let imageUrl = event.target.result;
        // присваиваем его атрибуту src элемента img
        $("#show-file1").prepend('<img id="photo-image1" src="' + imageUrl + '" />').css('display', 'flex');
        setFirstPhoto();
    };
});

function setFirstPhoto(){
    selectedNextArrow();

    $("#first-label").hide();
    $(".photo-descrition").show();
    if($("#show-file2").is(':hidden'))
        $("#second-label").css('display', 'flex');

    // Удаление первого фото
    $("#delete-img1").on('click', function(){
        $("#first-photo").val('');
        $("#photo-image1").remove();
        $("#show-file1").hide();
        $("#first-label").css('display', 'flex');
        disabledNextArrow();
    });
}

// Второе фото
$("#second-photo").on('change', function(event){
    let selectedFile = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = function(event) {
        let imageUrl = event.target.result;

        $("#show-file2").prepend('<img id="photo-image2" src="' + imageUrl + '" />').css('display', 'flex');
        setSecondPhoto();
    };
});

function setSecondPhoto(){
    $("#second-label").hide();
    if($("#show-file3").is(':hidden'))
        $("#third-label").css('display', 'flex');

    $("#delete-img2").on('click', function(){
        $("#second-photo").val('');
        $("#photo-image2").remove();
        $("#show-file2").hide();
        $("#second-label").css('display', 'flex');
    });
}

// Третье фото
$("#third-photo").on('change', function(event){
    let selectedFile = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = function(event) {
      let imageUrl = event.target.result;

      $("#show-file3").prepend('<img id="photo-image3" src="' + imageUrl + '" />').css('display', 'flex');
      setThirdPhoto();
    };
});

function setThirdPhoto(){
    $("#third-label").hide();

    $("#delete-img3").on('click', function(){
        $("#third-photo").val('');
        $("#photo-image3").remove();
        $("#show-file3").hide();
        $("#third-label").css('display', 'flex');
    });
}

// Drag and drop
// отключаем стандартное поведение браузера при перетаскивании файла
$("html").on('dragover', function(e){
    e.preventDefault();
    e.stopPropagation();
});

// при перетаскивании файла на зону, меняем её цвет на зеленый
$("#photo-container").on('dragover', '#first-label, #second-label, #third-label', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('backgroundColor', '#EBEBEC');
});

// возвращаем цвет зоны в исходное состояние, когда файл убирается с зоны
$("#photo-container").on('dragleave', '#first-label, #second-label, #third-label', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('backgroundColor', '#FAFAFB');
});

// при отпускании файла на зоне, загружаем его на сервер
$("#photo-container").on('drop', '#first-label, #second-label, #third-label', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('backgroundColor', '#FAFAFB');

    let imageUrl = URL.createObjectURL(e.originalEvent.dataTransfer.files[0]);
    if(e.currentTarget.id == 'first-label')
    {
        $("#show-file1").prepend('<img id="photo-image1" src="' + imageUrl + '" />').css('display', 'flex');
        setFirstPhoto();
    }
    else if(e.currentTarget.id == 'second-label')
    {
        $("#show-file2").prepend('<img id="photo-image2" src="' + imageUrl + '" />').css('display', 'flex');
        setSecondPhoto();
    }
    else if(e.currentTarget.id == 'third-label')
    {
        $("#show-file3").prepend('<img id="photo-image3" src="' + imageUrl + '" />').css('display', 'flex');
        setThirdPhoto();
    }
    
    
});

/* Photo (begin) */


/* Description (begin) */
$("#description-text").on('input', function(){
    validDescription();
});

function validDescription(){
    if($("#description-text").val().length > 25)
        selectedNextArrow();
    else
        disabledNextArrow();
}
/* Description (end) */


function disabledNextArrow(){
    $("#next-btn").prop('disabled', true);
    $("#next-image").attr('src', 'images/page1/Arrow Right.png');
}

function selectedNextArrow(){
    $("#next-btn").prop('disabled', false);
    $("#next-image").attr('src', 'images/page1/Arrow Right2.png');
}

// Кнопка "Назад"
$("#back-btn").on('click', function(){
    if($("#model-container").is(':visible'))
    {
        $("#model-container").hide();
        $("#build-container").show();
        $("#page2").css('backgroundColor', '#E2E5E9');
        $("#title").html('Выберите сборку').css('maxWidth', '380px');

        selectedNextArrow();
    }
    else if($("#additionally-container").is(':visible'))
    {
        $("#additionally-container").hide();
        $("#model-container").show();
        $("#page3").css('backgroundColor', '#E2E5E9');
        $("#title").html('Марка, модель и год выпуска').css('maxWidth', '300px');

        validModel();
    }
    else if($("#photo-container").is(':visible'))
    {
        $("#photo-container").hide();
        $("#additionally-container").show();
        $("#page4").css('backgroundColor', '#E2E5E9');
        $("#title").html('Дополнительные характеристики').css('maxWidth', '380px');

        validAdditionally();
    }
    else if($("#description-container").is(':visible'))
    {
        $("#description-container").hide();
        $("#photo-container").show();
        $("#page5").css('backgroundColor', '#E2E5E9');
        $("#title").html('Добавьте фото автомобиля').css('maxWidth', '380px');

        selectedNextArrow();
    }
    else if($("#ready-container").is(':visible'))
    {
        $("#ready-container").hide();
        $("#description-container").css('display', 'flex');
        $("#pages").css('backgroundColor', '#ffffff');
        $("#title").html('Добавьте описание автомобиля').css('maxWidth', '380px');
        $("#next-btn p").html('Далее');
        $("#next-image").show();

        validDescription();
    }
});

// Кнопка "Далее"
$("#next-btn").on('click', function(){
    if($("#build-container").is(':visible'))
    {
        $("#build-container").hide();
        $("#model-container").show();
        $("#page2").css('backgroundColor', '#E62128');
        $("#title").html('Марка, модель и год выпуска').css('maxWidth', '300px');

        validModel();
    }
    else if($("#model-container").is(':visible'))
    {
        $("#model-container").hide();
        $("#additionally-container").show();
        $("#page3").css('backgroundColor', '#E62128');
        $("#title").html('Дополнительные характеристики').css('maxWidth', '380px');

        validAdditionally();
    }
    else if($("#additionally-container").is(':visible'))
    {
        $("#additionally-container").hide();
        $("#photo-container").show();
        $("#page4").css('backgroundColor', '#E62128');
        $("#title").html('Добавьте фото автомобиля').css('maxWidth', '380px');

        disabledNextArrow();
    }
    else if($("#photo-container").is(':visible'))
    {
        $("#photo-container").hide();
        $("#description-container").css('display', 'flex');
        $("#page5").css('backgroundColor', '#E62128');
        $("#title").html('Добавьте описание автомобиля').css('maxWidth', '380px');

        validDescription();
    }
    else if($("#description-container").is(':visible'))
    {
        $("#description-container").hide();
        $("#ready-container").css('display', 'flex');
        $("#title").html('Ваш автомобиль готов к добавлению!').css('maxWidth', '410px');
        $("#pages").css('backgroundColor', '#E62128');
        $("#next-btn p").html('Добавить');
        
        $("#next-image").hide();
    }
});