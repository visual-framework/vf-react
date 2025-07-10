import React, { useEffect, useRef } from "react";
import { initVFChatbotStandalone } from "@visual-framework/vf-chatbot-standalone/vf-chatbot-standalone.js";

function Chatbot() {
  const chatbotRef = useRef(null);

  // Define config outside the useEffect so it's accessible to JSX
  const vfchatbotStandaloneConfig = {
    title: "AI Assistant",
    welcome_logo: `${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--icon-64x64-dark-green.svg`,
    welcome_message: "Hello! How can I help you today?",
    welcome_logo_alt: "AI Assistant",
    welcome_suggestions_title: "Try asking me:",
    input_placeholder: "Ask me ...",
    welcome_max_suggestions: 4,
    disclaimer: 'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
    footnote: 'Review AI generated content for accuracy. <a class="vf-link" target="_blank" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
    icons: {
      assistant_avatar: `${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--icon-16x16-dark-green.svg`,
      user_avatar: `${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--avatar-user.svg`,
      send_button: `${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--icon-send.svg`,
      main_logo_url: `${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--icon-32x32-dark-green.svg`,
    },
    api: {
      chat_endpoint: false,//"/api/chat",
      feedback_endpoint: "/api/feedback",
      qa_data_url: `${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot-qa.json`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-token",
      },
      timeout: 10000,
    },
    features: {
      // enable_welcome: true,
      enable_feedback: true,
      enable_sources: true,
      // enable_welcome_suggestions: true,
      enable_typing_indicator: true,
      // enable_disclaimer: true,
      enable_predefined_qa: true,
      // enable_fallback_responses: true,
      enable_qa_data_loading: true,
      enable_instant_feedback: false
    },
    behavior: {
      auto_scroll: true,
      typing_delay: 800,
    },
    selectorContext: {
      chatbotRoutes: {
        multiSelect: true,
        maxMultiSelect: 3,
        showSearch: true,
        showSearchThreshold: 5,
        showAllServices: true,
        showAllServicesSelected: true,
        routes: `${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot-selector-services.json`,
        placeholder: "Select services",
        title: "Services"
      }
    },
    handlers: {
      on_message_send: "handleMessageSend",
      on_response_receive: "handleResponseReceive",
      on_feedback_submit: "handleFeedbackSubmit", 
      on_suggestion_click: "handleSuggestionClick",
      on_error: "handleError",
      on_conversation_start: "handleConversationStart",
      on_conversation_end: "handleConversationEnd",
    }
  };

  useEffect(() => {
    if (!chatbotRef.current) return;

    // Create ALL templates programmatically to avoid React className issues
    const createAllTemplates = () => {
      // Get the chatbot standalone container
      const chatbotContainer = chatbotRef.current.querySelector(
        "[data-vf-js-chatbot-standalone]"
      );
      if (!chatbotContainer) {
        console.error("Chatbot container not found");
        return;
      }

      // Remove existing templates
      const templateIds = [
        "welcome-suggestion-template",
        "feedback-positive-template",
        "feedback-negative-template",
        "user-message-template",
        "assistant-message-template",
        "loading-indicator-template",
        "action-prompts-template",
        "single-action-prompt-template",
      ];

      templateIds.forEach((id) => {
        const existing = document.getElementById(id);
        if (existing) existing.remove();
      });

      // Create welcome suggestion template
      const welcomeTemplate = document.createElement("template");
      welcomeTemplate.id = "welcome-suggestion-template";
      welcomeTemplate.innerHTML = `
        <div class="vf-chatbot-action-prompt">
          <a href="#" class="vf-chatbot-action-prompt__link vf-u-padding--200"></a>
        </div>
      `;
      chatbotContainer.appendChild(welcomeTemplate);

      // Create feedback positive template
      const feedbackPosTemplate = document.createElement("template");
      feedbackPosTemplate.id = "feedback-positive-template";
      feedbackPosTemplate.innerHTML = `
        <div class="vf-chatbot-feedback__form vf-u-margin__top--400">
          <div class="vf-chatbot-feedback__form-content vf-u-padding--400">
            <div class="vf-chatbot-feedback__form-content-header">
              <div class="vf-chatbot-feedback__title">Tell us more (optional)</div>
              <button role="button" class="vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button" type="button" aria-label="Close feedback form" data-vf-js-feedback-form-close>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>dismiss banner</title>
                  <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
                </svg>
              </button>
            </div>
            <div class="vf-chatbot-feedback__options">
              <button class="vf-chatbot-feedback__option" data-feedback-option="accurate">Accurate answer</button>
              <button class="vf-chatbot-feedback__option" data-feedback-option="easy">Easy to understand</button>
              <button class="vf-chatbot-feedback__option" data-feedback-option="formatted">Well formatted</button>
              <button class="vf-chatbot-feedback__option" data-feedback-option="helpful">Helpful</button>
            </div>
            <div class="vf-chatbot-feedback__comment-title">Comments</div>
            <textarea class="vf-chatbot-feedback__comment" rows="4" data-vf-js-feedback-comment></textarea>
            <button type="button" class="vf-chatbot-feedback__submit vf-u-padding--200" data-vf-js-feedback-submit>Submit</button>
          </div>
        </div>
      `;
      chatbotContainer.appendChild(feedbackPosTemplate);

      // Create feedback negative template
      const feedbackNegTemplate = document.createElement("template");
      feedbackNegTemplate.id = "feedback-negative-template";
      feedbackNegTemplate.innerHTML = `
        <div class="vf-chatbot-feedback__form vf-u-margin__top--400">
          <div class="vf-chatbot-feedback__form-content vf-u-padding--400">
            <div class="vf-chatbot-feedback__form-content-header">
              <div class="vf-chatbot-feedback__title">Tell us more (optional)</div>
              <button role="button" class="vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button" type="button" aria-label="Close feedback form" data-vf-js-feedback-form-close>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>dismiss banner</title>
                  <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
                </svg>
              </button>
            </div>
            <div class="vf-chatbot-feedback__options">
              <button class="vf-chatbot-feedback__option" data-feedback-option="inaccurate">Inaccurate answer</button>
              <button class="vf-chatbot-feedback__option" data-feedback-option="nocontext">Did not use context</button>
              <button class="vf-chatbot-feedback__option" data-feedback-option="poorformat">Poorly formatted</button>
              <button class="vf-chatbot-feedback__option" data-feedback-option="nothelpful">Not helpful</button>
            </div>
            <div class="vf-chatbot-feedback__comment-title">Comments</div>
            <textarea class="vf-chatbot-feedback__comment" rows="4" data-vf-js-feedback-comment></textarea>
            <button type="button" class="vf-chatbot-feedback__submit vf-u-padding--200" data-vf-js-feedback-submit>Submit</button>
          </div>
        </div>
      `;
      chatbotContainer.appendChild(feedbackNegTemplate);

      // Create user message template
      const userTemplate = document.createElement("template");
      userTemplate.id = "user-message-template";
      userTemplate.innerHTML = `
        <div class="vf-chatbot-message vf-chatbot-message--user vf-u-margin__top--400">
          <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">
            <span class="vf-chatbot-message__avatar-name">You</span>
            <img src="${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--avatar-user.svg" alt="You" />
          </div>
          <div class="vf-chatbot-message__content vf-u-padding--200">
            <div class="vf-chatbot-message__content-prompt vf-u-padding__left--200 vf-u-padding__right--200">Hello!</div>
          </div>
        </div>
      `;
      chatbotContainer.appendChild(userTemplate);

      // Create assistant message template
      const assistantTemplate = document.createElement("template");
      assistantTemplate.id = "assistant-message-template";
      assistantTemplate.innerHTML = `
        <div class="vf-chatbot-message vf-chatbot-message--assistant vf-u-margin__top--400">
          <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">
            <img src="${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--icon-16x16-dark-green.svg" alt="AI Assistant" />
            <span class="vf-chatbot-message__avatar-name">AI Assistant</span>
          </div>
          <div class="vf-chatbot-message__content vf-u-padding--200">
            <div class="vf-chatbot-message__content-prompt vf-u-padding__left--200 vf-u-padding__right--200">How can I help you?</div>
          </div>
        </div>
        <div class="vf-chatbot-feedback vf-u-margin__top--200" data-vf-js-chatbot-feedback></div>
      `;
      chatbotContainer.appendChild(assistantTemplate);

      // Create loading indicator template
      const loadingTemplate = document.createElement("template");
      loadingTemplate.id = "loading-indicator-template";
      loadingTemplate.innerHTML = `
        <div class="vf-chatbot-message vf-chatbot-message--assistant vf-chatbot-message--loading vf-u-margin__top--400">
          <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">
            <img src="${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot--icon-16x16-dark-green.svg" alt="AI Assistant" />
            <span class="vf-chatbot-message__avatar-name">AI Assistant</span>
          </div>
          <div class="vf-chatbot-message__content vf-u-padding--200">
            <div class="vf-chatbot-message__content-loading-dots">...</div>
          </div>
        </div>
      `;
      chatbotContainer.appendChild(loadingTemplate);

      // Create action prompts template
      const actionPromptsTemplate = document.createElement("template");
      actionPromptsTemplate.id = "action-prompts-template";
      actionPromptsTemplate.innerHTML = `
        <div class="vf-chatbot-action-prompts">
          <div class="vf-chatbot-action-prompts__list" data-vf-js-action-prompts-list></div>
        </div>
      `;
      chatbotContainer.appendChild(actionPromptsTemplate);

      // Create single action prompt template
      const singleActionTemplate = document.createElement("template");
      singleActionTemplate.id = "single-action-prompt-template";
      singleActionTemplate.innerHTML = `
        <div class="vf-chatbot-action-prompt">
          <a href="#" class="vf-chatbot-action-prompt__link vf-u-padding--200"></a>
        </div>
      `;
      chatbotContainer.appendChild(singleActionTemplate);

      console.log("All templates created and added to chatbot container");
    };

    // Create all templates first
    createAllTemplates();

    // Define ALL handler functions
    let suggestionClickCount = 0;
    let messageCount = 0;

    window.handleMessageSend = function(eventData) {
      messageCount++;
      console.log(`Message sent (call #${messageCount}):`, eventData.message);
    };

    window.handleResponseReceive = function(eventData) {
      console.log('Response received:', eventData.response);
    };

    window.handleFeedbackSubmit = function(eventData) {
      console.log('Feedback submitted:', eventData);
    };

    window.handleSuggestionClick = function(eventData) {
      suggestionClickCount++;
      console.log(`Suggestion clicked (call #${suggestionClickCount}):`, eventData);
      console.log('Event data:', JSON.stringify(eventData, null, 2));
    };

    window.handleError = function(eventData) {
      console.log('Error occurred:', eventData);
    };

    window.handleConversationStart = function(eventData) {
      console.log('Conversation started:', eventData);
    };

    window.handleConversationEnd = function(eventData) {
      console.log('Conversation ended:', eventData);
    };

    // Initialize chatbot with proper cleanup check
    setTimeout(() => {
      // More thorough initialization check
      if (window.vfChatbotInitialized) {
        console.log('Global chatbot already initialized, skipping...');
        return;
      }

      const existingInstance = chatbotRef.current?.querySelector('[data-vf-chatbot-initialized]');
      if (existingInstance) {
        console.log('Component chatbot already initialized, skipping...');
        return;
      }

      if (typeof initVFChatbotStandalone === "function") {
        console.log('Starting chatbot initialization...');
        const chatbotInstances = initVFChatbotStandalone(vfchatbotStandaloneConfig);

        // Mark as initialized globally and on component
        window.vfChatbotInitialized = true;
        if (chatbotRef.current) {
          chatbotRef.current.setAttribute('data-vf-chatbot-initialized', 'true');
        }

        console.log("Chatbot initialized once:", chatbotInstances);
      }
    }, 200);

    // Complete cleanup function - remove ALL handlers
    return () => {
      console.log('Cleaning up chatbot handlers...');
      
      // Reset counters
      suggestionClickCount = 0;
      messageCount = 0;
      
      // Remove all handler functions
      delete window.handleMessageSend;
      delete window.handleResponseReceive;
      delete window.handleFeedbackSubmit;
      delete window.handleSuggestionClick;
      delete window.handleError;
      delete window.handleConversationStart;
      delete window.handleConversationEnd;

      // Remove global initialization flag
      delete window.vfChatbotInitialized;

      // Remove initialization marker
      if (chatbotRef.current) {
        chatbotRef.current.removeAttribute('data-vf-chatbot-initialized');
      }

      console.log('Cleanup completed');
    };
  }, []); // Empty dependency array - runs only once!

  // Update the return JSX to use config values:
  return (
    <>
      <div
        ref={chatbotRef}
        className="vf-content vf-chatbot-standalone-container"
        data-vf-js-chatbot-standalone-container
      >
        <div className="vf-chatbot-standalone__header">
          <div className="vf-chatbot-standalone__header-left">
            <div
              className="vf-chatbot-selector"
              data-vf-js-chatbot-selector
              data-routes-path={`${process.env.PUBLIC_URL}/assets/chatbot/vf-chatbot-selector-services.json`}
              data-multiselect="true"
              data-max-multiselect="3"
              data-show-search="true"
              data-show-all-services="true"
              data-show-all-services-selected="true"
            >
              <button
                className="vf-chatbot-selector__title"
                data-vf-js-selector-toggle
              >
                <img
                  src={vfchatbotStandaloneConfig.icons.main_logo_url}
                  alt={vfchatbotStandaloneConfig.welcome_logo_alt}
                />
                <div className="vf-chatbot-selector__title-content">
                  <span className="vf-chatbot-selector__main-text">
                    {vfchatbotStandaloneConfig.title}
                  </span>
                  <span className="vf-chatbot-selector__title-text">
                    Services
                  </span>
                </div>
                <span className="vf-chatbot-selector__chevron">
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3647_8230)">
                      <path
                        d="M15.999 19.0975C15.7378 19.098 15.479 19.0468 15.2377 18.9468C14.9963 18.8469 14.7771 18.7001 14.5926 18.5151L8.32863 11.9279C8.21951 11.8137 8.13399 11.6791 8.07698 11.5318C8.01998 11.3845 7.99261 11.2274 7.99645 11.0695C8.00028 10.9116 8.03525 10.756 8.09934 10.6117C8.16342 10.4673 8.25537 10.337 8.36992 10.2283C8.48446 10.1195 8.61934 10.0344 8.76683 9.97791C8.91432 9.92139 9.07152 9.89454 9.2294 9.89889C9.38729 9.90325 9.54277 9.93872 9.68692 10.0033C9.83107 10.0678 9.96106 10.1602 10.0694 10.2751L15.7094 16.2143C15.7467 16.2537 15.7916 16.2851 15.8414 16.3066C15.8912 16.3281 15.9448 16.3391 15.999 16.3391C16.0533 16.3391 16.1069 16.3281 16.1567 16.3066C16.2065 16.2851 16.2514 16.2537 16.2886 16.2143L21.9286 10.2751C22.037 10.1602 22.167 10.0678 22.3112 10.0033C22.4553 9.93872 22.6108 9.90325 22.7687 9.89889C22.9266 9.89454 23.0838 9.92139 23.2312 9.97791C23.3787 10.0344 23.5136 10.1195 23.6282 10.2283C23.7427 10.337 23.8347 10.4673 23.8987 10.6117C23.9628 10.756 23.9978 10.9116 24.0016 11.0695C24.0055 11.2274 23.9781 11.3845 23.9211 11.5318C23.8641 11.6791 23.7786 11.8137 23.6694 11.9279L17.439 18.4991C17.2503 18.6888 17.0259 18.8394 16.7788 18.9421C16.5316 19.0448 16.2667 19.0976 15.999 19.0975Z"
                        fill="#707372"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3647_8230">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 6.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>

              <div
                className="vf-chatbot-selector__dropdown"
                data-vf-js-selector-dropdown
              >
                <div className="vf-chatbot-selector__search">
                  <label
                    className="vf-u-sr-only"
                    id="vf-chatbot-selector-search-label"
                    htmlFor="vf-chatbot-selector-search"
                  >
                    Type to search
                  </label>
                  <input
                    type="text"
                    id="vf-chatbot-selector-search"
                    aria-labelledby="vf-chatbot-selector-search-label"
                    placeholder="Select services"
                    data-vf-js-selector-search
                  />
                </div>

                <div className="vf-chatbot-selector__header">
                  <span data-max-select="3">Select up to 3 services</span>
                  <a
                    href="#"
                    className="vf-chatbot-selector__clear"
                    data-vf-js-selector-clear
                  >
                    Clear all
                  </a>
                </div>
                <ul
                  className="vf-chatbot-selector__list"
                  data-vf-js-chatbot-selector-list
                ></ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="vf-chatbot-standalone | vf-u-background-color-ui--grey--light vf-u-margin__bottom--400"
          data-vf-js-chatbot-standalone
        >
          <div
            className="vf-chatbot-standalone__content"
            data-vf-js-chatbot-standalone-content
          >
            <div
              className="vf-chatbot-welcome"
              data-vf-js-chatbot-welcome
              data-max-questions={vfchatbotStandaloneConfig.welcome_max_suggestions}
              data-enable-qa-data-loading="true"
              data-enable-predefined-qa="true"
              data-enable-fallback-responses="true"
              data-qa-data-url={vfchatbotStandaloneConfig.api.qa_data_url}
            >
              <div className="vf-chatbot-welcome__content">
                <div className="vf-chatbot-welcome__logo">
                  <img
                    src={vfchatbotStandaloneConfig.welcome_logo}
                    alt={vfchatbotStandaloneConfig.welcome_logo_alt}
                  />
                </div>
                <h1 className="vf-chatbot-welcome__title">{vfchatbotStandaloneConfig.title}</h1>
                <div className="vf-chatbot-welcome__message">
                  {vfchatbotStandaloneConfig.welcome_message}
                </div>
              </div>
              <div className="vf-chatbot-welcome__suggestions">
                <p className="vf-chatbot-welcome__suggestions-title">
                  {vfchatbotStandaloneConfig.welcome_suggestions_title}
                </p>
                <div
                  className="vf-chatbot-welcome__suggestions-grid"
                  data-vf-js-chatbot-welcome-suggestions-grid
                ></div>
              </div>
            </div>
            <div
              className="vf-chatbot-standalone__messages"
              data-vf-js-chatbot-standalone-messages
              data-auto-scroll={vfchatbotStandaloneConfig.behavior.auto_scroll}
            ></div>
            <div
              className="vf-chatbot-standalone__disclaimer"
              data-vf-js-chatbot-standalone-disclaimer
            >
              <div className="vf-banner vf-banner--alert vf-banner--info">
                <div className="vf-banner__content">
                  <p className="vf-banner__text" dangerouslySetInnerHTML={{__html: vfchatbotStandaloneConfig.disclaimer}}>
                  </p>
                  <button
                    type="button"
                    role="button"
                    aria-label="close notification banner"
                    className="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>dismiss banner</title>
                      <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="vf-chatbot-standalone__input-container">
            <div className="vf-chatbot-standalone__input-wrapper">
              <label
                className="vf-u-sr-only"
                id="vf-chatbot-standalone-input-label"
                htmlFor="vf-chatbot-standalone-input"
              >
                {vfchatbotStandaloneConfig.input_placeholder}
              </label>
              <textarea
                id="vf-chatbot-standalone-input"
                aria-labelledby="vf-chatbot-standalone-input-label"
                className="vf-chatbot-standalone__input vf-form__textarea vf-u-padding__left--400"
                placeholder={vfchatbotStandaloneConfig.input_placeholder}
                rows="1"
                data-vf-js-chatbot-standalone-input
              ></textarea>
              <button
                className="vf-chatbot-standalone__send-button"
                aria-label="Send message"
                data-vf-js-chatbot-standalone-send
              >
                <img
                  src={vfchatbotStandaloneConfig.icons.send_button}
                  alt="Send"
                />
              </button>
            </div>

            <div
              className="vf-chatbot-standalone__footnote vf-u-margin__top--200"
              data-vf-js-chatbot-standalone-footnote
              dangerouslySetInnerHTML={{__html: vfchatbotStandaloneConfig.footnote}}
            >
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
