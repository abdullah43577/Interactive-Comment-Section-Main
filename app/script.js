import data from "./data.json" assert { type: "json" };

class MyComponent {
  constructor() {
    this.parent = null;
    this.textContent = null;
    // initialize other properties
  }
}

class App {
  constructor() {
    this.component = new MyComponent();
    this.main = document.querySelector("main");
    this.userComment;
    this.plusClicked = false;
    this.minusClicked = false;
    // todo: will change this later to toggle
    this.replyActive = false;
    this.parentEl;
    this.popup = document.querySelector(".popup");
    this.overlay = document.querySelector(".overlay");
    this.cancel = document.querySelector(".cancelbtn");
    this.delete = document.querySelector(".delbtn");

    this.cancel.addEventListener("click", this.closePopup.bind(this));
    this.overlay.addEventListener("click", this.closePopup.bind(this));
    this.delete.addEventListener("click", this.deletePopup.bind(this));

    this.main.addEventListener("click", this.domTraversePlus.bind(this));
    this.main.addEventListener("click", this.domTraverseMinus.bind(this));
    this.main.addEventListener("click", this.domTraverseReplyBtn.bind(this));
    this.main.addEventListener("click", this.domTraverseDeleteEl.bind(this));
    this.main.addEventListener("click", this.domTraverseEdit.bind(this));
    this.main.addEventListener("click", this.addComment.bind(this));
    this.main.addEventListener("click", this.domTraverseReplyMsg.bind(this));
    this.renderDomEl();
  }

  renderDomEl() {
    // prettier-ignore
    let html = `  <section class="container">
        <section class="comment--section">
          <!-- vote container -->
          <div class="replymobile">
            <div class="vote--container">
              <img src="./images/icon-plus.svg" alt="icon-plus" />
              <span>12</span>
              <img src="./images/icon-minus.svg" alt="icon-minus" />
            </div>

            <!-- mobile reply -->
            <div class="reply mobile--reply">
              <img src="./images/icon-reply.svg" alt="icon-reply" />
              <span>reply</span>
            </div>
          </div>

          <!-- content container -->
          <div class="content-main">
            <div class="details-tab">
              <div class="userinfo--sect">
                <img
                  src="${data.comments[0].user.image.png}"
                  alt="${data.comments[0].user.username}"
                />
                <p class="name">${data.comments[0].user.username}</p>
                <p class="time">${data.comments[0].createdAt}</p>
              </div>

              <div class="reply desktop--reply">
                <img src="./images/icon-reply.svg" alt="icon-reply" />
                <span>reply</span>
              </div>
            </div>

            <div class="content">
              ${data.comments[0].content}
            </div>
          </div>
        </section>

        <!-- reply section -->
        <section class="replyBoxSection hidden">
          <div class="info">
            <img
              src="${data.currentUser.image.png}"
              alt="${data.currentUser.username}"
            />
            <button>reply</button>
          </div>
          <textarea class="replyTextArea"></textarea>
          <button>reply</button>
        </section>
      </section>

      <!-- next comment -->
      <section class="container">
        <section class="comment--section">
          <!-- vote container -->
          <div class="replymobile">
            <div class="vote--container">
              <img src="./images/icon-plus.svg" alt="icon-plus" />
              <span>12</span>
              <img src="./images/icon-minus.svg" alt="icon-minus" />
            </div>

            <!-- mobile reply -->
            <div class="reply mobile--reply">
              <img src="./images/icon-reply.svg" alt="icon-reply" />
              <span>reply</span>
            </div>
          </div>

          <!-- content container -->
          <div class="content-main">
            <div class="details-tab">
              <div class="userinfo--sect">
                <img
                  src="${data.comments[1].user.image.png}"
                  alt="${data.comments[1].user.username}"
                />
                <p class="name">${data.comments[1].user.username}</p>
                <p class="time">${data.comments[1].createdAt}</p>
              </div>

              <div class="reply desktop--reply">
                <img src="./images/icon-reply.svg" alt="icon-reply" />
                <span>reply</span>
              </div>
            </div>

            <div class="content">
              ${data.comments[1].content}
            </div>
          </div>
        </section>

        <!--Todo: reply section -->
        <!-- <section class="replyBoxSection">
          <div class="info">
            <img
              src="${data.currentUser.image}"
              alt="${data.currentUser.username}"
            />
            <button>reply</button>
          </div>
          <textarea class="replyTextArea"></textarea>
          <button>reply</button>
        </section> -->

        <section class="replies">
          <div class="border"></div>

          <div class="replied--container">
            <section class="comment--section">
              <!-- vote container -->
              <div class="replymobile">
                <div class="vote--container">
                  <img src="./images/icon-plus.svg" alt="icon-plus" />
                  <span>12</span>
                  <img src="./images/icon-minus.svg" alt="icon-minus" />
                </div>

                <!-- mobile reply -->
                <div class="reply mobile--reply">
                  <img src="./images/icon-reply.svg" alt="icon-reply" />
                  <span>reply</span>
                </div>
              </div>

              <!-- content container -->
              <div class="content-main">
                <div class="details-tab">
                  <div class="userinfo--sect">
                    <img
                      src="${data.comments[1].replies[0].user.image.png}"
                      alt="${data.comments[1].replies[0].user.username}"
                    />
                    <p class="name">${data.comments[1].replies[0].user.username}</p>
                    <p class="time">${data.comments[1].replies[0].createdAt}</p>
                  </div>

                  <div class="reply desktop--reply">
                    <img src="./images/icon-reply.svg" alt="icon-reply" />
                    <span>reply</span>
                  </div>
                </div>

                <div class="content">
                  <span>@maxblagun</span> ${data.comments[1].replies[0].content}
                </div>
              </div>
            </section>

            <!-- Todo: reply section -->
            <!-- <section class="replyBoxSection">
              <div class="info">
                <img
                  src="${data.currentUser.image.png}"
                  alt="${data.currentUser.username}"
                />
                <button>reply</button>
              </div>
              <textarea class="replyTextArea"></textarea>
              <button>reply</button>
            </section> -->

            <!-- Todo: second reply -->
            <section class="comment--section replied--comment">
              <!-- vote container -->
              <div class="replymobile">
                <div class="vote--container">
                  <img src="./images/icon-plus.svg" alt="icon-plus" />
                  <span>12</span>
                  <img src="./images/icon-minus.svg" alt="icon-minus" />
                </div>

                <!-- mobile reply -->
                <div class="updatereply mobile--reply">
                    <div class="del">
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                      <span>delete</span>
                    </div>

                    <div class="edit">
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                      <span>edit</span>
                    </div>
                  </div>
              </div>

              <!-- content container -->
              <div class="content-main">
                <div class="details-tab">
                  <div class="userinfo--sect">
                    <img
                      src="${data.comments[1].replies[1].user.image.png}"
                      alt="${data.comments[1].replies[1].user.username}"
                    />
                    <p class="name">${data.comments[1].replies[1].user.username}</p>
                    <p class="user">you</p>
                    <p class="time">${data.comments[1].replies[1].createdAt}</p>
                  </div>

                  <div class="updatereply desktop--reply">
                    <div class="del">
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                      <span>delete</span>
                    </div>

                    <div class="edit">
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                      <span>edit</span>
                    </div>
                  </div>
                </div>

                <div class="content">
                  <span>@maxblagun</span> ${data.comments[1].replies[1].content}
                </div>
              </div>
            </section>

            <!-- Todo: reply section -->
            <!-- <section class="replyBoxSection">
              <div class="info">
                <img
                  src="${data.currentUser.image.png}"
                  alt="${data.currentUser.username}"
                />
                <button>reply</button>
              </div>
              <textarea class="replyTextArea"></textarea>
              <button>reply</button>
            </section> -->

            <!-- Todo: update comment section -->
            <!--- <section class="comment--section replied--comment">
              <div class="replymobile">
                <div class="vote--container">
                  <img src="./images/icon-plus.svg" alt="icon-plus" />
                  <span>12</span>
                  <img src="./images/icon-minus.svg" alt="icon-minus" />
                </div>

                <div class="updatereply mobile--reply">
                  <div class="del">
                    <img src="./images/icon-delete.svg" alt="icon-delete" />
                    <span>delete</span>
                  </div>

                  <div class="edit">
                    <img src="./images/icon-edit.svg" alt="icon-edit" />
                    <span>edit</span>
                  </div>
                </div>
              </div>

              <div class="content-main update">
                <div class="details-tab">
                  <div class="userinfo--sect">
                    <img
                      src="${data.currentUser.image.png}"
                      alt="${data.currentUser.username}"
                    />
                    <p class="name">${data.currentUser.username}</p>
                    <p class="user">you</p>
                    <p class="time">${data.comments[1].replies[1].createdAt}</p>
                  </div>

                  <div class="updatereply desktop--reply">
                    <div class="del">
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                      <span>delete</span>
                    </div>

                    <div class="edit">
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                      <span>edit</span>
                    </div>
                  </div>
                </div>

                <textarea class="updateComment"></textarea>
              </div>
            </section> --->
          </div>
        </section>
      </section>

      <!-- Todo: userComment -->
      <section class="user--comment--section">
        <div class="image--section">
          <img
            src="${data.currentUser.image.png}"
            alt="${data.currentUser.username}"
          />
          <button>send</button>
        </div>
        <textarea class="commentTextArea"></textarea>
        <button class="send">send</button>
      </section>`;

    this.main.insertAdjacentHTML("beforeend", html);
  }

  addComment(e) {
    let sendBtn = e.target.closest(".send");
    if (!sendBtn) return;

    let comment = sendBtn.previousElementSibling;
    this.userComment = comment.value;

    // create a range and insert the HTML string as a fragment
    let range = document.createRange();
    let fragment = range.createContextualFragment(
      this.renderComment(this.userComment)
    );

    let lastChild = this.main.lastElementChild;

    this.main.insertBefore(fragment, lastChild);
    comment.value = "";
  }

  renderComment(value) {
    // prettier-ignore
    return `<section class="comment--section replied--comment">
              <!-- vote container -->
              <div class="replymobile">
                <div class="vote--container">
                  <img src="./images/icon-plus.svg" alt="icon-plus" />
                  <span>12</span>
                  <img src="./images/icon-minus.svg" alt="icon-minus" />
                </div>

                <!-- mobile reply -->
                <div class="updatereply mobile--reply">
                    <div class="del">
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                      <span>delete</span>
                    </div>

                    <div class="edit">
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                      <span>edit</span>
                    </div>
                  </div>
              </div>

              <!-- content container -->
              <div class="content-main">
                <div class="details-tab">
                  <div class="userinfo--sect">
                    <img
                      src="${data.comments[1].replies[1].user.image.png}"
                      alt="${data.comments[1].replies[1].user.username}"
                    />
                    <p class="name">${data.comments[1].replies[1].user.username}</p>
                    <p class="user">you</p>
                    <p class="time">${data.comments[1].replies[1].createdAt}</p>
                  </div>

                  <div class="updatereply desktop--reply">
                    <div class="del">
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                      <span>delete</span>
                    </div>

                    <div class="edit">
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                      <span>edit</span>
                    </div>
                  </div>
                </div>

                <div class="content">
                  ${value}
                </div>
              </div>
            </section>`;
  }

  domTraversePlus(e) {
    let plus = e.target.closest("img[src='./images/icon-plus.svg']");
    if (!plus) return;

    let sibling = plus.nextElementSibling;

    //converting value to number and adding one when clicked
    if (!this.plusClicked) {
      let spanTextContent = +sibling.textContent + 1;
      sibling.textContent = spanTextContent;
      this.plusClicked = true;
    }

    this.minusClicked = false;
  }

  domTraverseMinus(e) {
    let minus = e.target.closest("img[src='./images/icon-minus.svg']");
    if (!minus) return;

    let sibling = minus.previousElementSibling;
    //converting value to number and adding one when clicked
    if (!this.minusClicked) {
      let spanTextContent = +sibling.textContent - 1;
      sibling.textContent = spanTextContent;
      this.minusClicked = true;
    }

    this.plusClicked = false;
  }

  domTraverseReplyBtn(e) {
    let replybtn = e.target.closest(".reply");
    if (!replybtn) return;

    let parent = replybtn.parentElement.parentElement.parentElement;

    this.username =
      replybtn.parentElement.firstElementChild.firstElementChild.nextElementSibling;

    let parentParent = parent.parentElement;

    if (!this.replyActive) {
      parentParent.insertBefore(this.replyBox(), parent.nextSibling);
      this.replyActive = true;
    }
  }

  replyBox() {
    // prettier-ignore
    // converting this to a node element
    const range = document.createRange();
    const fragment = range.createContextualFragment(`
    <section class="replyBoxSection">
      <div class="info">
        <img
          src="${data.currentUser.image.png}"
          alt="${data.currentUser.username}"
        />
        <button>reply</button>
      </div>
      <textarea class="replyTextArea"></textarea>
      <button class="replymsg">reply</button>
    </section>
  `);
    return fragment;
  }

  domTraverseReplyMsg(e) {
    let btnreply = e.target.closest(".replymsg");
    if (!btnreply) return;

    let sibling = btnreply.previousElementSibling;

    if (!sibling.value) return;

    // accessing the username properties
    let username =
      btnreply.parentElement.previousElementSibling.lastElementChild
        .firstElementChild.firstElementChild.firstElementChild
        .nextElementSibling;

    let textContent = sibling.value;

    let parent = document.querySelector(".replyBoxSection").parentElement;
    let siblingEl = parent.firstElementChild;
    parent.insertBefore(
      this.renderReply(textContent, username),
      siblingEl.nextSibling
    );
    document.querySelector(".replyBoxSection").remove();

    // todo: check to see why this doesn't work later on
    this.replyActive = true;
  }

  renderReply(value, span) {
    // prettier-ignore
    const range = document.createRange()
    const fragment = range.createContextualFragment(`
      <div class="replied--containerupdate">
      <div class="border"></div>
      <section class="comment--section replied--comment">
              <!-- vote container -->
              <div class="replymobile">
                <div class="vote--container">
                  <img src="./images/icon-plus.svg" alt="icon-plus" />
                  <span>0</span>
                  <img src="./images/icon-minus.svg" alt="icon-minus" />
                </div>

                <!-- mobile reply -->
                <div class="updatereply mobile--reply">
                    <div class="del">
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                      <span>delete</span>
                    </div>

                    <div class="edit">
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                      <span>edit</span>
                    </div>
                  </div>
              </div>

              <!-- content container -->
              <div class="content-main">
                <div class="details-tab">
                  <div class="userinfo--sect">
                    <img
                      src="${data.comments[1].replies[1].user.image.png}"
                      alt="${data.comments[1].replies[1].user.username}"
                    />
                    <p class="name">${data.comments[1].replies[1].user.username}</p>
                    <p class="user">you</p>
                    <p class="time">${data.comments[1].replies[1].createdAt}</p>
                  </div>

                  <div class="updatereply desktop--reply">
                    <div class="del">
                      <img src="./images/icon-delete.svg" alt="icon-delete" />
                      <span>delete</span>
                    </div>

                    <div class="edit">
                      <img src="./images/icon-edit.svg" alt="icon-edit" />
                      <span>edit</span>
                    </div>
                  </div>
                </div>

                <div class="content">
                  <span>${span.textContent}</span> ${value}
                </div>
              </div>
            </section>
            </div>`);
    return fragment;
  }

  domTraverseDeleteEl(e) {
    let deleteEl = e.target.closest(".del");
    if (!deleteEl) return;

    this.parent =
      deleteEl.parentElement.parentElement.parentElement.parentElement;

    this.overlay.classList.remove("hidden");
    this.popup.classList.remove("hidden");
  }

  closePopup() {
    this.overlay.classList.add("hidden");
    this.popup.classList.add("hidden");
  }

  deletePopup() {
    if (this.parent) this.parent.remove();
    this.overlay.classList.add("hidden");
    this.popup.classList.add("hidden");
  }

  domTraverseEdit(e) {
    let edit = e.target.closest(".edit");
    if (!edit) return;

    let content =
      edit.parentElement.parentElement.parentElement.lastElementChild;

    let nodes = content.childNodes;

    this.textContent = "";

    // looping through to remove the @keyword of the reply reference
    nodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        this.textContent += node.textContent.trim();
      }
    });

    // create a new element
    let updateDiv = document.createElement("div");
    updateDiv.classList.add("updateCmmt");

    let textarea = document.createElement("textarea");
    textarea.classList.add("updateComment");
    textarea.value = this.textContent.trim();

    let btn = document.createElement("button");
    btn.classList.add("update");
    btn.textContent = "UPDATE";

    // append the child elements to the new element
    updateDiv.appendChild(textarea);
    updateDiv.appendChild(btn);

    // replace the existing element with the new one
    content.replaceWith(updateDiv);

    // todo: haven't gotten the logic for the username aspect yet, might change this later
    // accessing the username properties
    let username =
      edit.parentElement.previousElementSibling.firstElementChild
        .nextElementSibling;

    this.update(updateDiv);
  }

  update(updateDiv) {
    let btn = document.querySelector(".update");
    let textarea = document.querySelector(".updateComment");
    let username = this.username;

    btn.addEventListener("click", function () {
      let newDiv = document.createElement("div");
      newDiv.classList.add("content");

      let newSpan = document.createElement("span");
      if (username) newSpan.textContent = `@${username.textContent}`;

      let commentTexts = document.createTextNode(textarea.value);

      newDiv.appendChild(newSpan);
      newDiv.appendChild(commentTexts);

      updateDiv.replaceWith(newDiv);
    });
  }
}

const app = new App();
