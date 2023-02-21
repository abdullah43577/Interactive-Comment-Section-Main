"use strict";

import data from "./data.json" assert { type: "json" };
console.log(data);

console.log(data.comments[0].user.image.png);

class App {
  constructor() {
    this.main = document.querySelector("main");

    this.main.addEventListener("click", this.domtraverse);
    this.renderDomEl();
  }

  renderDomEl() {
    // prettier-ignore
    let html = `<section id="section1">
        <div class="container">
          <div class="vote--container">
            <figure>
              <img src="./images/icon-plus.svg" alt="icon-plus" />
            </figure>

            <span>12</span>

            <figure>
              <img src="./images/icon-minus.svg" alt="icon-minus" />
            </figure>

            <!-- mobile reply btn -->
            <div class="reply">
              <figure>
                <img src="./images/icon-reply.svg" alt="icon-reply" />
              </figure>
              <p>Reply</p>
            </div>
          </div>

          <div class="content--container">
            <div class="details">
              <div class="image--section">
                <img
                  src="${data.comments[0].user.image.png}"
                  alt="image-amyrobson"
                />
                <p class="name">${data.comments[0].user.username}</p>
                <p>${data.comments[0].createdAt}</p>
              </div>
              <div class="reply">
                <figure>
                  <img src="./images/icon-reply.svg" alt="icon-reply" />
                </figure>
                <p>Reply</p>
              </div>
            </div>

            <div class="content">
              ${data.comments[0].content}
            </div>
          </div>
        </div>


        <!-- reply box section -->
        <div class="reply--section hidden">
          <figure>
            <img
              src="./images/avatars/image-juliusomo.png"
              alt="image-juliusomo"
            />
          </figure>

          <textarea name="textarea-input" id="textarea"></textarea>

          <button>reply</button>
        </div>
      </section>

      <!-- * section 2 -->
      <section id="section2">
        <div class="container">
          <div class="vote--container">
            <figure>
              <img src="./images/icon-plus.svg" alt="icon-plus" />
            </figure>

            <span>12</span>

            <figure>
              <img src="./images/icon-minus.svg" alt="icon-minus" />
            </figure>

            <!-- mobile reply btn -->
            <div class="reply">
              <figure>
                <img src="./images/icon-reply.svg" alt="icon-reply" />
              </figure>
              <p>Reply</p>
            </div>
          </div>

          <div class="content--container">
            <div class="details">
              <div class="image--section">
                <img
                  src="${data.comments[1].user.image.png}"
                  alt="${data.comments[1].user.username}"
                />
                <p class="name">${data.comments[1].user.username}</p>
                <p>${data.comments[1].createdAt}</p>
              </div>
              <div class="reply">
                <figure>
                  <img src="./images/icon-reply.svg" alt="icon-reply" />
                </figure>
                <p>Reply</p>
              </div>
            </div>

            <div class="content">
              ${data.comments[0].content}
            </div>
          </div>
        </div>

        <!-- replies section -->
        <div class="replies--container">
          <div class="border--left"></div>
          <div class="replies">
            <!-- first reply -->
            <div class="container replied">
              <div class="vote--container">
                <figure>
                  <img src="./images/icon-plus.svg" alt="icon-plus" />
                </figure>

                <span>12</span>

                <figure>
                  <img src="./images/icon-minus.svg" alt="icon-minus" />
                </figure>

                <!-- mobile reply btn -->
                <div class="reply">
                  <figure>
                    <img src="./images/icon-reply.svg" alt="icon-reply" />
                  </figure>
                  <p>Reply</p>
                </div>
              </div>

              <div class="content--container">
                <div class="details">
                  <div class="image--section">
                    <img
                      src="${data.comments[1].replies[0].user.image.png}"
                      alt="${data.comments[1].replies[0].user.username}"
                    />
                    <p class="name">${data.comments[1].replies[0].user.username}</p>
                    <p>${data.comments[1].replies[0].createdAt}</p>
                  </div>
                  <div class="reply">
                    <figure>
                      <img src="./images/icon-reply.svg" alt="icon-reply" />
                    </figure>
                    <p>Reply</p>
                  </div>
                </div>

                <div class="content">
                <span>@${data.comments[1].replies[0].replyingTo}</span>
                  ${data.comments[1].replies[0].content}
                </div>
              </div>
            </div>

            <!-- second reply -->
            <div class="container replied">
              <div class="vote--container">
                <figure>
                  <img src="./images/icon-plus.svg" alt="icon-plus" />
                </figure>

                <span>12</span>

                <figure>
                  <img src="./images/icon-minus.svg" alt="icon-minus" />
                </figure>

                <!-- mobile reply btn section -->
                <div class="deledit">
                  <div class="delete">
                    <figure>
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                    </figure>
                    <p>Delete</p>
                  </div>

                  <div class="edit">
                    <figure>
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                    </figure>
                    <p>Reply</p>
                  </div>
                </div>
              </div>

              <div class="content--container">
                <div class="details">
                  <div class="image--section">
                    <img
                      src="${data.comments[1].replies[1].user.image.png}"
                      alt="${data.comments[1].replies[1].user.username}"
                    />
                    <p class="name">${data.comments[1].replies[1].user.username}</p>
                    <p>${data.comments[1].replies[1].createdAt}</p>
                  </div>
                  <div class="deledit">
                    <div class="delete">
                      <figure>
                        <img src="./images/icon-delete.svg" alt="icon-delete" />
                      </figure>
                      <p>Delete</p>
                    </div>

                    <div class="edit">
                      <figure>
                        <img src="./images/icon-edit.svg" alt="icon-edit" />
                      </figure>
                      <p>Reply</p>
                    </div>
                  </div>
                </div>

                <div class="content">
                <span>@${data.comments[1].replies[1].replyingTo}</span>
                   ${data.comments[1].replies[1].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div class="comment--section">
          <figure>
            <img
              src="./images/avatars/image-juliusomo.png"
              alt="image-juliusomo"
            />
          </figure>

          <textarea
            name="textarea-input"
            id="textarea"
            placeholder="Add a comment..."
          ></textarea>

          <button>reply</button>
        </div>
      </section>`;

    this.main.insertAdjacentHTML("beforeend", html);
  }

  domtraverse(e) {
    let plus = e.target.closest(".vote--container > :first-child");
    let minus = e.target.closest(".vote--container > :nth-child(3)");
    let replybtn = e.target.closest(".reply");
    let deleteEl = e.target.closest(".delete");
    let edit = e.target.closest(".edit");
    let comment = e.target.closest("#section3 > textarea");
    let replyBox = e.target.closest(".reply--section > textarea");

    console.log(plus);
    console.log(minus);
    console.log(replybtn);
    console.log(deleteEl);
    console.log(edit);
    console.log(comment);
    console.log(replyBox);
  }
}

const app = new App();

// Todo1: when a user clicks on reply, append the reply box section to the element
