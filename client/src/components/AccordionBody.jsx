import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import UserDataStore from "../store/userData";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

function AccordionCustomIcon() {
    const [open, setOpen] = React.useState(0);
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion
                open={alwaysOpen}
                icon={<Icon id={1} open={open} />}
                className="mb-2 rounded-lg border-2 border-cyan-700 p-4"
            >
                <AccordionHeader className="" onClick={handleAlwaysOpen}>
                    Приложение к договору открытой (публичной) оферты на
                    оказание платных медицинских услуг
                </AccordionHeader>
                <AccordionBody className=" mt-2 h-80 overflow-y-auto text-lg">
                    {/* <p className=" text-center mb-5 ">
                        Приложение к договору открытой (публичной) оферты на
                        оказание платных медицинских услуг{" "}
                    </p> */}
                    <p className=" text-center mb-5 ">
                        Информированное добровольное согласие пациента на
                        оказание платных услуг
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я, пациент/законный представитель :{" "}
                        {UserDataStore.user.fio}, Иин {UserDataStore.user.iin} ,
                        находясь в Международном онкологическом центре
                        томотерапии «ҮМІТ , (наименование медицинской
                        организации) (далее - «Центр»), настоящим подтверждаю,
                        что до получения платной медицинской услуги, Центр в
                        доступной для меня форме ознакомил меня с Правилами
                        оказания платных услуг субъектами здравоохранения,
                        утвержденными Приказом МЗ РК от 29 октября 2020 года №
                        ҚР ДСМ-170/2020, я уведомлен\а и согласен с тем, что
                        обследование и лечение в отделении Центра, оказываемое
                        мне на платной основе будет проводиться по моему
                        собственному выбору и желанию, я отказываюсь от
                        бесплатного лечения и гарантирую оплату за оказанные
                        платные медицинские услуги, включая пребывание в
                        стационаре (дневном), также я проинформирован(а) о
                        нижеследующем:
                    </p>

                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - о моих правах госпитализации и лечения по перечню
                        гарантированного объема бесплатной медицинской помощи,
                        (в соответствии с Постановлением Правительства РК №2136
                        от 28.09.2009 г. «Об утверждении гарантированного объема
                        бесплатной медицинской помощи») и о возможности
                        получения соответствующих видов и объемов медицинской
                        помощи без взимания платы, и добровольно отказываюсь от
                        бесплатного лечения в пользу платного;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - о перечне платных медицинских услуг, предоставляемых
                        Центром о ценах на платные услуги, условиях, форме и
                        порядке их предоставления и оплаты, и со мной
                        согласованы в момент поступления план предварительного
                        обследования и лечения, предварительная сумма оплаты в
                        рамках основного/сопутствующих заболеваний, при этом
                        окончательное согласование по обследованию, лечению и
                        оплате по основному и по сопутствующим заболеваниям
                        будет проводиться в ходе рабочего процесса (в день
                        выписки выставляется к оплате Калькуляции (Акт
                        выполненных работ) и выдается Выписка из медицинской
                        документации, установленного образца);
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - о льготах при предоставлении платных услуг для
                        отдельных категорий граждан;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - о медицинских работниках, участвующих в предоставлении
                        платных медицинских услуг, уровне их профессионального
                        образования и квалификации;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - информация о Центре, в том числе, сведения о лицензии
                        Центра на осуществление медицинской деятельности (номер
                        и дата выдачи, перечень подвидов лицензируемого вида
                        деятельности, полное наименование лицензиара), о режиме
                        работы, графике работы медицинских работников,
                        участвующих в предоставлении медицинской помощи в рамках
                        гарантированного объема бесплатной медицинской помощи и
                        (или) в системе обязательного социального медицинского
                        страхования, платных услуг;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - о контролирующих органах: адреса и телефоны
                        уполномоченного органа, местного органа государственного
                        управления здравоохранения столицы, территориальных
                        подразделений государственного органа в сфере оказания
                        медицинских услуг (помощи), территориальных
                        подразделений государственного органа в сфере обращения
                        лекарственных средств и медицинских изделий;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - о целях, характере, факторах риска и возможных
                        осложнениях при оказании платных медицинских услуг;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - что забор необходимых анализов и обследований
                        проводится по существующим требованиям
                        санитарно-эпидемиологического надзора и по показаниям
                        лечащего врача, причем сроки последних принимаемых во
                        внимание должны быть не более 10 дней давности;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - иной информации, предусмотренной правилами
                        предоставления платных медицинских услуг.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я информирован(а) и согласен, что:
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - по показаниям лечащего врача (консилиума) в сложных и
                        спорных диагностических случаях по показаниям и по
                        требованию (мониторинг обследования и ответа на лечение
                        и пр.) допускается более кратное проведение исследований
                        после предварительного согласования и без ущемления моих
                        интересов;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - Центр вправе отказать в платном лечении случае
                        выявления до и во время госпитализации непрофильных
                        заболеваний (инфекционные, психические и др), требующих
                        лечения в специализированных медицинских учреждениях, а
                        также при выявлении соматических декомпенсированных и
                        др. заболеваний, на стадии терминальных осложнений,
                        нуждающиеся паллиативном лечении амбулаторно по месту
                        жительства;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - при возникновении и экстренных угрожаемых состояний о
                        переводе в рамках ГОБМП в ургентные клиники г. Астана, а
                        в случае отказа - о возможности перевода в отделы
                        клиники, оказывающих неотложную медицинскую помощь;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - в случае возникновения во время обследования и лечения
                        непредвиденных осложнений, угрожающих моему здоровью,
                        даю согласие на изменение характера лечения (в том числе
                        объема оперативного вмешательства), включая отказ от его
                        выполнения, с последующим информированием меня об этом;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - Центр вправе по обоснованной причине заменить лечащего
                        врача с уведомлением посредством телефонной связи не
                        позже чем за 2 (два) часа до времени и даты приема, я
                        подтверждаю, что вправе отказаться от замены, уведомив
                        Центр, либо перенести прием на другой день\время по
                        согласованию с Центром, каких-либо претензий к Центру
                        ввиду замены врача в указанных случаях иметь не буду.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - возможна передача информации, в рамках оказания
                        платных медицинских услуг посредством телефонных
                        обращений или электронной почты, указанных при
                        заполнении заявления. Электронная почта{" "}
                        {UserDataStore.user.Email}
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я предупрежден(а), что несоблюдение указаний
                        (рекомендаций) Центра (медицинского работника,
                        предоставляющего платную медицинскую услугу), в том
                        числе назначенного режима лечения, может снизить
                        качество предоставляемой платной медицинской услуги,
                        повлечь за собой невозможность ее завершения в срок или
                        отрицательно сказаться на состоянии здоровья. Настоящим
                        я гарантирую, что мною добровольно, своей волей и в
                        своем интересе, без какого-либо принуждения, выбраны
                        виды платных медицинских услуг, которые я хочу получить
                        в Центре, я ознакомлен (-а) с действующим прейскурантом
                        на платные медицинские и иные платные услуги в Центре и
                        согласен(-на) их оплатить в соответствии с ним, в
                        дальнейшем каких-либо претензий как материального так и
                        нематериального характера к Центру в связи с взиманием
                        платы за услуги иметь не буду.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я удостоверяю, что текст настоящего информированного
                        согласия мною прочитан, подписан после проведения
                        разъяснительной беседы, его положения мне понятны, я даю
                        свое согласие на получение и оплату платных медицинских
                        и иных платных услуг в Центре, и подтверждаю дачу
                        согласия Центру на сбор, обработку, передачу необходимых
                        персональных данных, в объеме и способами согласно
                        законодательству Республики Казахстан.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Настоящее информированное добровольное согласие на
                        оказание платных медицинских услуг принимается акцептом
                        и является неотъемлемой частью Договора открытой
                        (публичной) оферты на оказание платных медицинских
                        услуг, который принимается Заказчиком/Пациентом путем
                        присоединения к указанному Договору в целом без
                        каких-либо условий, изъятий и оговорок.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я получил(а) экземпляр настоящего Информированного
                        согласия пациента на оказание платных услуг.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        {UserDataStore.user.fio}
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion
                open={open === 2}
                icon={<Icon id={1} open={open} />}
                className="b-2 rounded-lg border-2 border-cyan-700 p-4"
            >
                <AccordionHeader onClick={() => handleOpen(2)}>
                    ДОГОВОР № _____ по предоставлению платных медицинских услуг
                    (помощи)
                </AccordionHeader>
                <AccordionBody className=" mt-2 h-80 overflow-y-auto text-lg">
                    {/* <p className=" text-center mb-5 ">
                        Приложение к договору открытой (публичной) оферты на
                        оказание платных медицинских услуг{" "}
                    </p> */}
                    {/* <p className=" text-center mb-5 ">
                        Информированное добровольное согласие пациента на
                        оказание платных услуг
                    </p> */}
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        ТОО «Международный онкологический исполнитель
                        томотерапии «ҮМІТ», (далее – Исполнитель) в лице
                        Директора Шаяхметова Е.М., действующего на основании
                        Устава, с одной стороны, и {UserDataStore.user.fio} ,
                        именуемый/-ая в дальнейшем «Заказчик»/«Пациент»,{" "}
                        {UserDataStore.user.data} года рождения, удостоверение
                        личности (паспорт) № {UserDataStore.user.numberUcard}{" "}
                        выданное {UserDataStore.user.dateUcard} ,{" "}
                        {UserDataStore.user.cardSide} , с другой стороны,
                        совместно именуемые «Стороны», в рамках Договора
                        открытой (публичной) оферты на оказание платных
                        медицинских услуг, размещенного на информационном стенде
                        и в регистратуре Исполнителя, а также на сайте:
                        https://tomo.kz/ и https://onkoclinic.com/, заключили
                        настоящий договор на оказание медицинских услуг (далее –
                        Договор) о нижеследующем:
                    </p>
                    <p className="mb-2 text-center">1. Предмет Договора</p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        1.1. Исполнитель на основании обращения Заказчика
                        обязуется оказать ему Пациенту платные медицинские
                        консультации и иные платные медицинские услуги (Услуги)
                        в соответствии с прейскурантом медицинских услуг, а
                        Заказчик обязуется принять и оплатить Услуги в
                        соответствии с условиями настоящего Договора.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        1.2. Исполнитель обязуется оказать медицинские услуги по
                        фактическому месту нахождения Исполнителя: Республика
                        Казахстан, г. Астана, район Алматы, пр.Абылай Хана,
                        д.42/1.
                    </p>
                    <p className="mb-2 text-center">2. Порядок оплаты</p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        2.1. Стоимость платных медицинских услуг, оказываемых
                        Заказчику/Пациенту, определяется в соответствии с
                        действующим Прейскурантом платных медицинских услуг
                        (Прейскурант цен размещен на Ресепшне Исполнителя
                        томотерапии) на момент обращения Пациента.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        2.2. Оказание Услуг происходит при условии их предоплаты
                        в полном объеме. Заказчик/Пациент обязан оплатить услуги
                        Исполнителя перед их получением. Расчет может быть
                        произведен как наличными деньгами, так и безналичным
                        способом, в национальной валюте Республики Казахстан.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        2.3. Исполнитель выдает Заказчику/Пациенту документ
                        установленного образца, подтверждающего факт оплаты.
                        Медицинские документы по результатам оказания услуг
                        выдаются после оплаты всей суммы фактически оказанных
                        Услуг.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        2.4. В случае досрочного прекращения оказания Услуги
                        Исполнитель выплачивает Заказчику/Пациенту разницу между
                        оплаченной суммой и стоимостью фактически оказанной
                        услуги, за исключением случаев нарушения условий
                        Договора Заказчиком/Пациентом.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        2.5. Услуги Исполнителя могут быть получены Пациентами
                        на платной основе, за счет средств государственного
                        заказа или третьих лиц.
                    </p>
                    <p className="mb-2 text-center">3. Обязанности сторон</p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        3.1. Исполнитель обязан:
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - предоставить услуги по оказанию платной медицинской
                        помощи Заказчикам/Пациентам, в соответствии с имеющимися
                        у Исполнителя лицензиями и действующими нормативными
                        правовыми актами о здравоохранении в Республике
                        Казахстан, с учетом специфики оказания Услуг;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - предоставить Заказчику/Пациенту возможность
                        ознакомиться с Прейскурантом цен, действующим на период
                        оказания медицинских услуг по настоящему договору;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - обеспечить оказание медицинских Услуг в соответствии с
                        клиническими протоколами диагностики и лечения
                        заболеваний, при отсутствии клинических протоколов по
                        данным нозологиям – в соответствии с общепринятыми
                        подходами и базой доказательной медицины по медицинским
                        показаниям;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - обеспечить режим конфиденциальности состояния здоровья
                        Заказчика/Пациента и его персональных данных;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - поддерживать необходимый санитарно-гигиенический и
                        противоэпидемический порядок на своей территории
                        организации при оказании медицинских услуг;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - уважительно и гуманно относиться к Заказчику/Пациенту;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - оказывать медицинские услуги качественно, с
                        использованием современных методов диагностики и
                        лечения, в полном объеме в соответствии с настоящим
                        договором после внесения Заказчиком/Пациентом денежных
                        средств в порядке, определенном разделом 2. настоящего
                        договора, и предоставления документов, подтверждающих
                        оплату;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - вести учет видов, объемов, стоимости, оказанных
                        Заказчику/Пациенту медицинских услуг, а также денежных
                        средств, поступивших от него, в том числе с
                        использованием медицинских информационных систем и
                        бухгалтерских систем;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - предоставлять Заказчику/Пациенту счет-фактуру согласно
                        статье 412 Налогового кодекса Республики Казахстан, с
                        указанием видов и объема оказанных медицинских услуг
                        (помощи), в установленные сроки.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        3.2. Заказчик обязан:
                    </p>

                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - соблюдать правила, установленные Исполнителем,
                        определяющие порядок и режим работы;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - соблюдать законодательство Республики Казахстан при
                        получении медицинской услуги (помощи) по Договору;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - информировать Исполнителя об отказе в получении
                        медицинской услуги (помощи) или части медицинской услуги
                        (помощи) за один и более дня до наступления даты
                        оказания медицинской услуги (помощи), установленной
                        Договором;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - производить оплату Исполнителю, за оказанные
                        медицинские услуги (помощи), согласно указанным срокам в
                        Договоре.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        4. Права сторон
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        4.1. Заказчик имеет право:
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - выбора лечащего врача из числа врачей, оказывающих
                        платные медицинские услуги (помощи);
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - на осуществление экспертизы качества проведенного
                        лечения и обоснованности врачебных назначений согласно
                        приказу Министра здравоохранения Республики Казахстан от
                        3 декабря 2020 года № ҚР ДСМ-230/2020 "Об утверждении
                        правил организации и проведения внутренней и внешней
                        экспертиз качества медицинских услуг (помощи)"
                        (зарегистрирован в Реестре государственной регистрации
                        нормативных правовых актов под № 21727).
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - 4.2. Исполнитель имеет право на досрочное прекращение
                        лечения в случае нарушения Заказчиком правил,
                        установленных настоящим Договором.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        5. Ответственность сторон
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        5.1. Исполнитель несет ответственность за допущенные
                        случаи нарушения по оказанию платных медицинских услуг:
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - оказание медицинских услуг ненадлежащего объема и
                        качества;
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - взимание платы с Заказчика за услуги, входящие в
                        гарантированный объем бесплатной медицинской помощи и
                        (или) в систему обязательного социального медицинского
                        страхования, в соответствии с пунктом 2 статьи 424
                        Кодекса Республики Казахстан "Об административных
                        правонарушениях";
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        - взимание двойной платы за оказание одной и той же
                        медицинской услуги (за счет средств Заказчика и
                        бюджетных средств).
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        5.2. В случае неисполнения или ненадлежащего исполнения
                        обязательств, предусмотренных настоящим Договором,
                        стороны несут ответственность в соответствии с законами
                        Республики Казахстан.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        5.3. Заказчик несет ответственность за несвоевременное
                        возмещение затрат Исполнителю за фактически оказанные
                        медицинские услуги (помощи).
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        5.4. В случае невыполнения или ненадлежащего выполнения
                        Сторонами своих обязательств в рамках настоящего
                        Договора все споры и разногласия разрешаются в
                        соответствии с действующим гражданским законодательством
                        Республики Казахстан.
                    </p>
                    <p className="mb-2 text-center">6. Форс-мажор</p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        6.1 Стороны не несут ответственность за неисполнение
                        условий Договора, если оно явилось результатом
                        форс-мажорных обстоятельств.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        6.2 Центр не несет ответственность за выплату неустоек
                        или расторжение Договора в силу неисполнения его
                        условий, если задержка с исполнением Договора является
                        результатом форс-мажорных обстоятельств.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        6.3 Для целей Договора «форс-мажор» означает событие,
                        неподвластное контролю Сторон, и имеющее непредвиденный
                        характер. Такие события могут включат, но не
                        исключительно: стихийные бедствия, эпидемии, военные
                        действия, забастовки, принятие компетентными органами
                        соответствующих решений и другие.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        6.4 При возникновении форс-мажорных обстоятельств Центр
                        должен незамедлительно в течении одного и более рабочих
                        дней направить Заказчику\Пациенту уведомление о таких
                        обстоятельствах и их причинах.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        6.5 Если от Заказчика\Пациента не поступает иных
                        письменных инструкций, Центр продолжает выполнять свои
                        обязательства по Договору, насколько это целесообразно,
                        и ведет поиск альтернативных способов выполнения
                        Договора, не зависящих от форс-мажорных обстоятельств.
                    </p>

                    <p className="mb-2 text-center">
                        7. Изменение и расторжение Договора
                    </p>

                    <p className="mb-2 first-letter:ml-5 text-justify">
                        7.1. Условия настоящего Договора могут быть изменены и
                        дополнены по письменному соглашению сторон.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        7.2. О намерении досрочного расторжения Договора стороны
                        обязаны уведомить друг друга в течении трех и более
                        рабочих дней.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        7.3. Расторжение настоящего Договора допускается по
                        соглашению Сторон или по решению суда по основаниям,
                        предусмотренным гражданским законодательством Республики
                        Казахстан.
                    </p>

                    <p className="mb-2 text-center">
                        8. Заключительные положения
                    </p>

                    <p className="mb-2 first-letter:ml-5 text-justify">
                        8.1. Ни одна из сторон не имеет право передавать свои
                        обязательства по настоящему Договору третьей стороне без
                        письменного согласия сторон.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        8.2. Настоящий Договор вступает в силу со дня подписания
                        его сторонами и действует до момента исполнения всех
                        обязательств сторон по настоящему Договору, за
                        исключением досрочного прекращения Договора.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        8.3. Настоящий Договор составлен в двух экземплярах,
                        имеющих одинаковую юридическую силу, один экземпляр
                        находится у Заказчика, другой – у Исполнителя.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Договор может заключаться в бумажном и электронном виде
                        в соответствии с гражданским законодательством
                        Республики Казахстан.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        8.4. Все спорные вопросы между Заказчиком и
                        Исполнителем, связанные с исполнением условий настоящего
                        Договора, разрешаются в соответствии с гражданским
                        законодательством Республики Казахстан.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        8.5. Во всем, что не предусмотрено настоящим Договором,
                        Стороны руководствуются гражданским законодательством
                        Республики Казахстан.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        {UserDataStore.user.fio}
                    </p>
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default AccordionCustomIcon;
