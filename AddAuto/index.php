<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Add Auto</title>
</head>
<body>
<div class="container">
<div class="content">
    <!-- Header (begin) -->
    <header>
        <a href="#">
            <div class="red-rect"></div>
            <h1>АВТОМОБИЛИ</h1>
        </a>
        <h2 id="title">Выберите сборку</h2>
    </header>
    <!-- Header (end) -->

    <!-- Main (begin) -->
    <main>
        <div class="modal-close">
            <a href="#"><img src="images/page1/Modal_Close.png" alt="Закрыть"></a>
        </div>

        <!-- Build (begin) -->
        <section id="build-container" style="display: block;">
            <h3>Укажите вид сборки вашего авто</h3>

            <div class="form_radio_btn">
                <input id="factory-build" type="radio" name="build" value="factory" onChange="checkBuild()">
                <label for="factory-build">
                    <div class="top-flex">
                        <div class="build-image">
                            <img src="images/page1/Car.png" alt="Машина">
                        </div>
                        <h3>Заводская</h3>
                    </div>
                    <div class="bot-flex">
                        <p>Выставка-байопик рассказывает историю марки «Москвич», самого народного советского автомобиля</p>
                    </div>
                </label>
            </div>

            <div class="form_radio_btn">
                <input id="homemade-build" type="radio" name="build" value="homemade" onChange="checkBuild()">
                <label for="homemade-build">
                    <div class="top-flex">
                        <div class="build-image">
                            <img src="images/page1/key-repair-circle 1.png" alt="Гаечный ключ">
                        </div>
                        <h3>Самодельная</h3>
                    </div>
                    <div class="bot-flex">
                        <p>Выставка-байопик рассказывает историю марки «Москвич», самого народного советского автомобиля</p>
                    </div>
                </label>
            </div>
        </section>
        <!-- Build (end) -->

        <!-- Model (begin) -->
        <section id="model-container" style="display: none;">
            <label for="make-select">Марка авто</label>
            <select class="model-choice" name="make" id="make-select" onChange="checkModel(this)">
                <option value="" disabled hidden selected>Марка</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Toyota">Toyota</option>
            </select>

            <label for="model-select">Модель</label>
            <select class="model-choice" name="model" id="model-select" onChange="checkModel(this)">
                <option value="" disabled hidden selected>Модель</option>
                <option value="E-klasse W210">E-klasse W210</option>
            </select>

            <label for="year-select">Год</label>
            <select class="model-choice" name="year" id="year-select" onChange="checkModel(this)">
                <option value="" disabled hidden selected>Год</option>
                <option value="2019">2019</option>
            </select>

            <div class="miss">
                <p>Не нашли свою марку или модель авто? <a href="#">Отправьте зявку</a></p>
            </div>
        </section>
        <!-- Model (end) -->

        <!-- Additionally (begin) -->
        <section id="additionally-container" style="display: none;">
            <label for="engine-select">Тип двигателя</label>
            <select name="engine" id="engine-select" onChange="checkAdditionally(this)">
                <option value="" disabled hidden selected>Тип двигателя</option>
                <option value="petrol">Бензиновый</option>
                <option value="disel">Дизельный</option>
                <option value="hybrid">Гибридный</option>
                <option value="electric">Электро</option>
            </select>

            <label for="capacity-select">Объем</label>
            <select name="capacity" id="capacity-select" onChange="checkAdditionally(this)">
                <option value="" disabled hidden selected>Объем</option>
                <option value="1">1</option>
                <option value="1.5">1,5</option>
                <option value="2">2</option>
            </select>

            <label for="drive-select">Привод</label>
            <select name="drive" id="drive-select" onChange="checkAdditionally(this)">
                <option value="" disabled hidden selected>Привод</option>
                <option value="front-wheel">Передний</option>
                <option value="rear-wheel">Задний</option>
                <option value="all-wheel">Полный</option>
            </select>

            <label for="transmission-select">Коробка</label>
            <select name="transmission" id="transmission-select" onChange="checkAdditionally(this)">
                <option value="" disabled hidden selected>Коробка</option>
                <option value="manual">Маханическаяя</option>
                <option value="automatic">Автомат</option>
            </select>

            <div class="horizontal-line"></div>

            <div class="choice-color">
                <h3>Выберите цвет</h3>
                <div class="colors">
                    <input type="radio" name="radio-color" id="white">
                    <label for="white"></label>

                    <input type="radio" name="radio-color" id="silver">
                    <label for="silver" style="background: linear-gradient(180deg, #EDEDED 0%, #C7C7C7 100%);"></label>

                    <input type="radio" name="radio-color" id="gray">
                    <label for="gray" style="background: #9B9999;"></label>

                    <input type="radio" name="radio-color" id="black">
                    <label for="black" style="background: #000000;"></label>

                    <input type="radio" name="radio-color" id="lightgreen">
                    <label for="lightgreen" style="background: #64B744;"></label>

                    <input type="radio" name="radio-color" id="yellow">
                    <label for="yellow" style="background: #FFD43B;"></label>

                    <input type="radio" name="radio-color" id="lightorange">
                    <label for="lightorange" style="background: linear-gradient(180deg, #F7D849 0%, #EFAE3D 100%);"></label>

                    <input type="radio" name="radio-color" id="orange">
                    <label for="orange" style="background: #FF9B31;"></label>

                    <input type="radio" name="radio-color" id="red">
                    <label for="red" style="background: #F03E3E;"></label>

                    <input type="radio" name="radio-color" id="darkred">
                    <label for="darkred" style="background: #C02000;"></label>

                    <input type="radio" name="radio-color" id="lightyellow">
                    <label for="lightyellow" style="background: #ECD9B6;"></label>

                    <input type="radio" name="radio-color" id="lightpink">
                    <label for="lightpink" style="background: #F4C3CB;"></label>

                    <input type="radio" name="radio-color" id="brown">
                    <label for="brown" style="background: #8A674C;"></label>

                    <input type="radio" name="radio-color" id="purple">
                    <label for="purple" style="background: #916AC6;"></label>

                    <input type="radio" name="radio-color" id="lightblue">
                    <label for="lightblue" style="background: #4DABF7;"></label>

                    <input type="radio" name="radio-color" id="blue">
                    <label for="blue" style="background: #3B52F5;"></label>
                </div>
            </div>

        </section>
        <!-- Additionally (end) -->

        <!-- Photo (begin) -->
        <section id="photo-container" style="display: none;">
            <!-- Первое фото -->
            <input type="file" name="firstPhoto"  id="first-photo">
            <label for="first-photo" id="first-label">
                <img src="images/page4/Add Photo.png" alt="Фото">
                <p class="p1">Добавьте или перетащите сюда фото</p>
                <p class="p2">Добавьте хотя бы 1 фото</p>
            </label>
            <span id="show-file1">
                <button type="button">Главное фото</button>
                <img src="images/page5/Delete3.png" alt="Х" id="delete-img1" class="delete-img">
            </span>
            <!--  -->

            <div class="another-photo">
                <!-- Второе фото -->
                <input type="file" name="secondPhoto"  id="second-photo">
                <label for="second-photo" id="second-label">
                    <img src="images/page4/Add Photo.png" alt="Фото">
                </label>
                <span id="show-file2" class="photo-row2">
                    <img src="images/page5/Delete3.png" alt="Х" id="delete-img2" class="delete-img">
                </span>
                <!--  -->

                <!-- Третье фото -->
                <input type="file" name="thirdPhoto"  id="third-photo">
                <label for="third-photo" id="third-label">
                    <img src="images/page4/Add Photo.png" alt="Фото">
                </label>
                <span id="show-file3" class="photo-row2">
                    <img src="images/page5/Delete3.png" alt="Х" id="delete-img3" class="delete-img">
                </span>
                <!--  -->
            </div>
            <p class="photo-descrition">Первое фото будет главным у СТО.</p>
        </section>
        <!-- Photo (end) -->

        <!-- Description (begin) -->
        <section id="description-container" style="display: none;">
            <h3>Опишите ваш автомобиль</h3>
            <textarea name="description" id="description-text" cols="30" rows="10" placeholder="Введите данные"></textarea>
        </section>
        <!-- Description (end) -->

        <!-- Ready (begin) -->
        <section id="ready-container" style="display: none;">
            <img src="images/page6/car-checkmark 2.png" alt="Машина">

            <div class="vin-container">
                <h3>Укажите VIN номер автомобиля</h3>
                <input type="text" name="vin" id="vin-number" placeholder="VIN номер авто (не обязательно)">
                <label for="vin-number">Рекомендуем указать вам больше информации - так автосервисы смогут точнее оценить ремонт</label>
            </div>
        </section>
        <!-- Ready (end) -->

        <div class="page-conrtol">
            <div class="pages" id="pages">
                <div class="page" id="page1" style="background-color: #E62128;"></div>
                <div class="page" id="page2"></div>
                <div class="page" id="page3"></div>
                <div class="page" id="page4"></div>
                <div class="page" id="page5"></div>
            </div>

            <div class="form-direction">
                <button type="button" id="back-btn" class="direction-btn">
                    <p>Назад</p>
                </button>

                <form action="" id="get-result" method="post">
                    <button type="button" id="next-btn" class="direction-btn" disabled>
                        <p>Далее</p>
                        <img id="next-image" src="images/page1/Arrow Right.png" alt="Стрелка">
                    </button>
                </form>
                
            </div>
        </div>
        
    </main>
    <!-- Main (end) --> 
</div>
</div>

<script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="index.js"></script>
</body>
</html>