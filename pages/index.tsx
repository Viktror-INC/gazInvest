import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.scss';

import ReactPlayer from 'react-player/lazy';
import SliderWidget from '../components/SliderWidget/SliderWidget';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import MainForm from '../components/MainFrom/MainForm';
import Partners from '../components/Partners/Partners';
import SubmitButton from '../components/SubmitButton/SubmitButton';

const profitablyItems = [
  {
    name: 'Значительная прибыль при минимальных рисках',
    img: '/images/profitably/arrow.png',
  },
  {
    name: 'Один из самых доходных активов',
    img: '/images/profitably/money.png',
  },
  {
    name: 'Быстрый вывод средств на любую карту банка России',
    img: '/images/profitably/calculate.png',
  },
];

const todoList = [
  { name: 'Зарегистрироваться на данном сайте в форме выше' },
  {
    name: 'Дождаться звонка от финансового эксперта Газпром и подтвердить регистрацию',
  },
  {
    name: 'Внести желаемую сумму (от 18 000 руб) инвестиции на счет и уже к вечеру этого дня получить первую прибыль',
  },
];

const projectList = [
  {
    name: 'Сила Сибири',
    subtitle: 'от 50 000 рублей ежемесячно',
    descrition: 'Крупнейшая система транспортировки газа на востоке России',
    bgc: '/images/projectsBlock/sibir.jpg',
  },
  {
    name: 'Северный поток',
    subtitle: '25% гарантированных выплат ежемесячно',
    descrition: 'Газопровод, напрямую соединивший Россию и Европу',
    bgc: '/images/projectsBlock/sever.jpg',
  },
  {
    name: 'Турецкий поток',
    subtitle: '44% гарантированных выплат ежемесячно',
    descrition: 'Экспорт газа в Турцию, Южную и Юго-Восточную Европу',
    bgc: '/images/projectsBlock/turkish.jpg',
  },
];

const images = [
  {
    original: '/images/license.jpg',
    thumbnail: '/images/license.jpg',
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerImgs}>
            <Image
              src="/images/header/logo.png"
              width="114"
              height="56"
              alt="logo"
            />
            <Image
              src="/images/header/rus.png"
              width="128"
              height="44"
              alt="rus"
            />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>
            Газпром разрешил жителям России торговать газом
          </h1>
          <p className={styles.mainSubTitle}>
            Теперь национальные ресурсы в ваших руках!
          </p>
          <div className={styles.mainBlock}>
            <div>
              <ReactPlayer
                className={styles.video}
                width="100%"
                height="100%"
                url="/videos/video.mp4"
                controls
              />
            </div>
            <MainForm />
          </div>
          <div className={styles.howToStart}>
            <div className={styles.profitably}>
              <h3>Почему это выгодно для обычных граждан</h3>
              <ul className={styles.profitablyList}>
                {profitablyItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className={styles.profitablyImage}>
                        <Image
                          src={item.img}
                          width="53"
                          height="53"
                          alt={item.name}
                        />
                      </div>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.needTodo}>
              <h3>
                Что нужно сделать, чтобы начать зарабатывать c Газпром уже
                сейчас?
              </h3>
              <ul className={styles.needTodoList}>
                {todoList.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className={styles.line}></span>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.millerBlock}>
            <div className={styles.aboutMiller}>
              <h4>Алексей Миллер</h4>
              <span>
                председатель правления совета директоров ПАО «Газпром»
              </span>
              <div className={styles.millerTextBlock}>
                <p>
                  Мы приняли решение открыть доступ для инвестиций от всех
                  граждан, поскольку это будет выгодно как для Газпрома, так и
                  для жителей России.
                </p>
                <p>
                  Дело в том, что на данный момент российский газ становится
                  самым востребованным на мировом рынке. Во всех странах мира
                  стремительно растет спрос на его покупку. По этой причине мы
                  решили увеличить объемы производства газа в 4 раза и привлечь
                  людей со всего России в качестве инвесторов.
                </p>
                <p>
                  Поскольку цены на газ сейчас быстро меняются, все, кто
                  инвестирует в проекты Газпрома, получает в среднем по 800-8500
                  долларов дохода ежемесячно.
                </p>
              </div>
              <SubmitButton text={'Подать заявку'} link url={'#form'} />
            </div>
            <div className={styles.millerImage}>
              <Image
                src="/images/photo.jpg"
                width={738}
                height={808}
                layout="responsive"
                alt="Алексей Миллер"
              />
            </div>
          </div>
        </div>
        <div className={styles.calculatorBLock}>
          <div className={styles.container}>
            <div className={styles.calculator}>
              <SliderWidget />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.license}>
            <h2>
              Лицензия профессионального участника рынка ценных бумаг
              «Газпром-Инвест»
            </h2>
            <p>
              Лицензия №045-13980-02000 От 13.12.2019 Профессиональной и
              биржевой деятельности по ценным бумагам ПАО `Государственная
              платформа Газпром`
            </p>
            <div className={styles.imageGalleryWrap}>
              <ImageGallery items={images} />
            </div>
          </div>
        </div>
        <div className={styles.projectsBlock}>
          <h3>Проекты Газпрома, открытые для участия</h3>
          <ul className={styles.projectsList}>
            {projectList.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    background: `url(${item.bgc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className={styles.backgroundShadow}>
                    <h4>{item.name}</h4>
                    <span>{item.subtitle}</span>
                    <p>{item.descrition}</p>
                    <div className={styles.SubmitButtonProjects}>
                      <SubmitButton text={'Подать заявку'} link url={'#form'} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.container}>
          <Partners />
        </div>
        <div className={styles.mainFormBlock}>
          <div className={styles.container}>
            <div className={styles.mainForm}>
              <Image src="/images" width="114" height="56" alt="logo" />
              <h3>Начните зарабатывать на государственном газе!</h3>
              <MainForm />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <span>
            *Все результаты работы в данной сфере индивидуальны и зависят от
            каждого клиента ПАО &quot;ГазПромИнвестинг&quot; ул. Тимура Фрунзе,
            д. 11, Москва, Россия, 119034, БЦ «Демидов» Политика
            конфиденциальности ©2018-2020 ГазПромИнвестинг
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
