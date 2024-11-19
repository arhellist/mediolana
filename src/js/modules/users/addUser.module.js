import { SuccsesNotification } from "../notification/SuccessNot.js";
import { ErrorNotification } from "../notification/ErrorNot.js";

export function AddUser(contentPad, topMenu) {
  if (!document.querySelector(".newApplication")) {
    contentPad.insertAdjacentHTML(
      "afterBegin",
      `
          <!--   форма заведения нового клиента  -->
        <form class="newApplication flex flex_row" action="#">

              <div class="flex flex_row newApplication_HEAD">
                <div class="newApplication_part1 flex flex_column">
                  <div
                    class="newApplication_part1_section1 section flex flex_row"
                  >
                    <div class="newApplication_part1_avatar">
                      <input
                        style="position: absolute; left: -1000em"
                        type="file"
                        name=""
                        id="inputAvatarHidden"
                      />
                      <div class="clientCard_addAvatar img"></div>
                    </div>

                    <div
                      class="newApplication_part1_NameSurnameRadio flex flex_column"
                    >
                      <div class="textInput flex flex_column">
                        <!--  <label class="textInputLabel" htmlFor="userName"> Имя  </label>-->
                        <input
                          id="userName"
                          placeholder="Имя"
                          class="textInputItem"
                          type="text"
                          name="userName"
                        />
                      </div>
                      <div class="textInput flex flex_column">
                        <!--  <label class="textInputLabel" htmlFor="userSurName"> Имя  </label>-->
                        <input
                          id="userSurName"
                          placeholder="Фамилия"
                          class="textInputItem"
                          type="text"
                          name="userSurName"
                        />
                      </div>
                      <div class="flex flex_row">
                        <div class="textInput flex flex_row">
                          <label class="radioInputLabel" htmlFor="male"
                            >М</label
                          >
                          <input
                            id="male"
                            class="radioInputItem"
                            type="radio"
                            name="gender"
                            value="male"
                          />
                        </div>
                        <div class="textInput flex flex_row">
                          <label class="radioInputLabel" htmlFor="female"
                            >Ж</label
                          >
                          <input
                            id="female"
                            class="radioInputItem"
                            type="radio"
                            name="gender"
                            value="female"
                          />
                        </div>
                      </div>
                      <div class="textInput flex flex_column redLabel">
                        <label class="textInputLabel" htmlFor="bornDate">
                          Дата роджения
                        </label>
                        <label class="textInputLabel" htmlFor="bornDate">
                          РЕБЕНОК ДО 12 ЛЕТ
                        </label>
                        <input
                          id="bornDate"
                          placeholder="дата роджения"
                          class="dateInputItem"
                          type="date"
                          name="bornDate"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="newApplication_part1_section2 section flex flex_column"
                  >
                    <div class="textInput flex flex_column">
                      <label class="textInputLabel" htmlFor="pasport">
                        Паспорт
                      </label>
                      <input
                        id="pasport"
                        placeholder="Паспорт"
                        class="textInputItem"
                        type="text"
                        name="pasport"
                      />
                    </div>
                    <h6>Действителен:</h6>
                    <div class="flex flex_row">
                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="validFrom">
                          С
                        </label>
                        <input
                          id="validFrom"
                          class="dateInputItem"
                          type="date"
                          name="validFrom"
                        />
                      </div>

                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="validUntil">
                          ПО
                        </label>
                        <input
                          id="validUntil"
                          class="dateInputItem"
                          type="date"
                          name="validUntil"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="newApplication_part1_section3 section flex flex_column"
                  >
                    <div class="textInput flex flex_column">
                      <label class="textInputLabel" htmlFor="NIE"> NIE </label>
                      <input
                        id="NIE"
                        placeholder="NIE"
                        class="textInputItem"
                        type="text"
                        name="NIE"
                      />
                    </div>
                    <h6>Действителен:</h6>
                    <div class="flex flex_row">
                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="validFrom">
                          С
                        </label>
                        <input
                          id="NIEvalidFrom"
                          class="dateInputItem"
                          type="date"
                          name="NIEvalidFrom"
                        />
                      </div>

                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="validUntil">
                          ПО
                        </label>
                        <input
                          id="NIEvalidUntil"
                          class="dateInputItem"
                          type="date"
                          name="NIEvalidUntil"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="newApplication_part1_section4 section flex flex_column"
                  >
                    <div class="textInput flex flex_column">
                      <label class="textInputLabel" htmlFor="userindex">
                        Индекс
                      </label>
                      <input
                        id="userindex"
                        placeholder="Индекс"
                        class="textInputItem"
                        type="text"
                        name="userindex"
                      />
                    </div>
                    <div class="textInput flex flex_column">
                      <label class="textInputLabel" htmlFor="userAdres">
                        Адрес
                      </label>
                      <textarea
                        id="userAdres"
                        rows="3"
                        class="textInputItem"
                        type="text"
                        name="userAdres"
                      >
                    Адрес
                    </textarea
                      >
                    </div>
                  </div>
                </div>

                <div class="newApplication_part2 flex flex_column">
                  <section class="section">
                    <h6>Контакты</h6>
                    <div class="flex flex_row">
                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="userphone_work">
                          Рабочий телефон
                        </label>
                        <input
                          id="userphone_work"
                          placeholder="Телефон"
                          class="textInputItem"
                          type="text"
                          name="userphone_work"
                        />
                      </div>
                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="userphone_home">
                          Домашний телефон
                        </label>
                        <input
                          id="userphone_home"
                          placeholder="Телефон"
                          class="textInputItem"
                          type="text"
                          name="userphone_home"
                        />
                      </div>

                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="userphone_Notes">
                          ПРИМЕЧАНИЯ:
                        </label>
                        <input
                          id="userphone_Notes"
                          placeholder="Примечания"
                          class="textInputItem"
                          type="text"
                          name="userphone_Notes"
                        />
                      </div>
                    </div>

                    <div class="flex flex_row">
                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="usermail_work">
                          Рабочая электропочта
                        </label>
                        <input
                          id="usermail_work"
                          placeholder="Электропочта"
                          class="textInputItem"
                          type="text"
                          name="usermail_work"
                        />
                      </div>
                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="usermail_home">
                          Домашняя электропочта
                        </label>
                        <input
                          id="usermail_home"
                          placeholder="Электропочта"
                          class="textInputItem"
                          type="text"
                          name="usermail_home"
                        />
                      </div>
                      <div class="textInput flex flex_column">
                        <label class="textInputLabel" htmlFor="usermail_Notes">
                          ПРИМЕЧАНИЯ:
                        </label>
                        <input
                          id="usermail_Notes"
                          placeholder="Примечания"
                          class="textInputItem"
                          type="text"
                          name="usermail_Notes"
                        />
                      </div>
                    </div>
                  </section>

                  <section class="section">
                    <h6>Загрузка документов</h6>

                    <div class="flex flex_row">
                      <div
                        class="newApplication_part2_pasport flex flex_column"
                      >
                        <label
                          class="textInputLabel"
                          htmlFor="inputPasportHidden"
                        >
                          Паспорт
                        </label>
                        <input
                          style="position: absolute; left: -1000em"
                          type="file"
                          name=""
                          id="inputPasportHidden"
                        />
                        <div class="clientCard_addPasport img"></div>
                      </div>

                      <div
                        class="newApplication_part2_pasport flex flex_column"
                      >
                        <label class="textInputLabel" htmlFor="inputNIEHidden">
                          NIE
                        </label>
                        <input
                          style="position: absolute; left: -1000em"
                          type="file"
                          name=""
                          id="inputNIEHidden"
                        />
                        <div class="clientCard_addNIE img"></div>
                      </div>
                    </div>
                  </section>

                  <section class="section">
                    <h6>Копировать</h6>

                    <div class="flex flex_row">
                      <div class="copy_button copy_buttonFI flex flex_column">
                        <div class="iconButtonCopy img"></div>
                        <span class="button_label">Имя и Фамилию</span>
                      </div>

                      <div class="copy_button copy_buttonFIDate flex flex_column">
                        <div class="iconButtonCopy img"></div>
                        <span class="button_label"
                          >Имя, Фамилию и дату рождения</span
                        >
                      </div>

                      <div class="copy_button copy_buttonFIPas flex flex_column">
                        <div class="iconButtonCopy img"></div>
                        <span class="button_label"
                          >Имя, Фамилию и паспорт
                        </span>
                      </div>

                      <div class="copy_button copy_buttonFINie flex flex_column">
                        <div class="iconButtonCopy img"></div>
                        <span class="button_label">Имя, Фамилию и NIE </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

            </form>
        `
    );
    topMenu.insertAdjacentHTML(
      "afterBegin",
      `
        <div class="flex flex_row topMenu_application">
            <div class="topMenu_button flex flex_row topMenu_buttonMain">
              <div class="topMenu_button_icon topMenu_buttonMainicon"></div>
              <span class="topMenu_button_label topMenu_buttonMaintext"
                >Главная</span
              >
            </div>

            <div class="topMenu_button flex flex_row topMenu_buttonMain">
              <div class="topMenu_button_icon topMenu_buttonMainicon"></div>
              <span class="topMenu_button_label topMenu_buttonMaintext"
                >Заявки</span
              >
            </div>

            <div class="topMenu_button flex flex_row topMenu_buttonMain">
              <div class="topMenu_button_icon topMenu_buttonMainicon"></div>
              <span class="topMenu_button_label topMenu_buttonMaintext"
                >Документы</span
              >
            </div>

            <div class="topMenu_button flex flex_row topMenu_buttonMain">
              <div class="topMenu_button_icon topMenu_buttonMainicon"></div>
              <span class="topMenu_button_label topMenu_buttonMaintext"
                >Визы</span
              >
            </div>

            <div class="topMenu_button flex flex_row topMenu_buttonMain">
              <div class="topMenu_button_icon topMenu_buttonMainicon"></div>
              <span class="topMenu_button_label topMenu_buttonMaintext"
                >Бонусные карты</span
              >
            </div>

            <div class="topMenu_button flex flex_row topMenu_buttonMain">
              <div class="topMenu_button_icon topMenu_buttonMainicon"></div>
              <span class="topMenu_button_label topMenu_buttonMaintext"
                >Соглашения</span
              >
            </div>

            <div class="topMenu_button flex flex_row topMenu_buttonMain">
              <div class="topMenu_button_icon topMenu_buttonMainicon"></div>
              <span class="topMenu_button_label topMenu_buttonMaintext"
                >Справочные данные</span
              >
            </div>
          </div>
        `
    );
  } else {
    document.querySelector(".newApplication").remove();
    document.querySelector(".topMenu_application").remove();
  }

  const copyData = async () => {
    const copy_buttonFI = contentPad.querySelector(".copy_buttonFI");
    const copy_buttonFIDate = contentPad.querySelector(".copy_buttonFIDate");
    const copy_buttonFIPas = contentPad.querySelector(".copy_buttonFIPas");
    const copy_buttonFINie = contentPad.querySelector(".copy_buttonFINie");

    copy_buttonFI.addEventListener("click", () => {
      const surname = document.querySelector("#userSurName");
      const name = document.querySelector("#userName");

      const copyFI = `${name.value.toUpperCase()} ${surname.value.toUpperCase()}`;

      navigator.clipboard
        .writeText(copyFI)
        .then(() => {
          console.log("Скопировано");
          SuccsesNotification();
        })
        .catch((error) => {
          console.error(`Текст не скопирован ${error}`);
          ErrorNotification();
        });
    });

    copy_buttonFIDate.addEventListener("click", () => {
      const surname = document.querySelector("#userSurName");
      const name = document.querySelector("#userName");
      const bornDate = document.querySelector("#bornDate");

      const copyFI = `${name.value.toUpperCase()} ${surname.value.toUpperCase()}, ${new Date(
        bornDate.value
      ).getDate()}.${new Date(bornDate.value).getMonth() + 1}.${new Date(
        bornDate.value
      ).getFullYear()}`;

      navigator.clipboard
        .writeText(copyFI)
        .then(() => {
          console.log("Скопировано");
          SuccsesNotification();
        })
        .catch((error) => {
          console.error(`Текст не скопирован ${error}`);
          ErrorNotification();
        });
    });

    copy_buttonFIPas.addEventListener("click", () => {
      const surname = document.querySelector("#userSurName");
      const name = document.querySelector("#userName");
      const pasport = document.querySelector("#pasport");
      const validFrom = document.querySelector("#validFrom");
      const validUntil = document.querySelector("#validUntil");

      const copyFI = `${name.value.toUpperCase()} ${surname.value.toUpperCase()}, ${pasport.value.toUpperCase()} (from ${new Date(
        validFrom.value
      ).getDate()}.${new Date(validFrom.value).getMonth() + 1}.${new Date(
        validFrom.value
      ).getFullYear()} to  ${new Date(
        validUntil.value
      ).getDate()}.${new Date(validUntil.value).getMonth() + 1}.${new Date(
        validUntil.value
      ).getFullYear()})`;


      navigator.clipboard
        .writeText(copyFI)
        .then(() => {
          console.log("Скопировано");
          SuccsesNotification();
        })
        .catch((error) => {
          console.error(`Текст не скопирован ${error}`);
          ErrorNotification();
        });
    });

    copy_buttonFINie.addEventListener("click", () => {
        const surname = document.querySelector("#userSurName");
        const name = document.querySelector("#userName");
        const NIE = document.querySelector("#NIE");
        const validFrom = document.querySelector("#NIEvalidFrom");
        const validUntil = document.querySelector("#NIEvalidUntil");
  
        const copyFI = `${name.value.toUpperCase()} ${surname.value.toUpperCase()}, ${NIE.value.toUpperCase()} (from ${new Date(
          validFrom.value
        ).getDate()}.${new Date(validFrom.value).getMonth() + 1}.${new Date(
          validFrom.value
        ).getFullYear()} to  ${new Date(
          validUntil.value
        ).getDate()}.${new Date(validUntil.value).getMonth() + 1}.${new Date(
          validUntil.value
        ).getFullYear()})`;
  
  
        navigator.clipboard
          .writeText(copyFI)
          .then(() => {
            console.log("Скопировано");
            SuccsesNotification();
          })
          .catch((error) => {
            console.error(`Текст не скопирован ${error}`);
            ErrorNotification();
          });
      });
  };
  copyData();
}
