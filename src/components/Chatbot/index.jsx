import VFChatbot from "@visual-framework/vf-chatbot/vf-chatbot.react";

// Example config, matching the Nunjucks context
const chatbotConfig = {
  type: "standalone",
  title: "AI Assistant",
  welcome_logo: true,
  welcome_message: "Welcome! I am here to help",
  welcome_logo_alt: "AI Assistant",
  welcome_suggestions_title: "Try asking me:",
  input_placeholder: "Ask me ...",
  welcome_max_suggestions: 4,
  disclaimer:
    'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
  footnote:
    'Review AI generated content for accuracy. <a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
  icons: {
    assistant_avatar: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg`,
    user_avatar: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg`,
    send_button: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--icon-send.svg`,
    main_logo_url: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg`,
    minimize: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg`,
    close: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--icon-close.svg`
  },
  api: {
    chat_endpoint: false,
    feedback_endpoint: false,
    qa_data_url: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot-qa.json`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your-token"
    },
    timeout: 10000
  },
  features: {
    enable_welcome: true,
    enable_feedback: true,
    enable_sources: true,
    enable_welcome_suggestions: true,
    enable_typing_indicator: true,
    enable_disclaimer: true,
    enable_predefined_qa: true,
    enable_fallback_responses: true,
    enable_qa_data_loading: true,
    enable_instant_feedback: false
  },
  behavior: {
    auto_scroll: true,
    typing_delay: 800,
    show_scrollbar: false
  },
  selectorContext: {
    chatbotRoutes: {
      multiSelect: true,
      maxMultiSelect: 3,
      showSearch: true,
      showSearchThreshold: 5,
      showAllServices: true,
      showAllServicesSelected: true,
      routes: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot-selector-services.json`,
      placeholder: "Select services",
      title: "Services",
      selector_logo_url: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg`,
      selector_logo_title: "AI Assistant"
    }
  },
  handlers: {
    on_message_send: "handleMessageSend",
    on_response_receive: "handleResponseReceive",
    on_feedback_submit: "handleFeedbackSubmit",
    on_suggestion_click: "handleSuggestionClick",
    on_error: "handleError",
    on_conversation_start: "handleConversationStart",
    on_conversation_end: "handleConversationEnd"
  },
  feedback_options: {
    positive: [
      { id: "accurate", label: "Accurate" },
      { id: "easy", label: "Easy to understand" },
      { id: "formatted", label: "Well formatted" }
    ],
    negative: [
      { id: "inaccurate", label: "Inaccurate" },
      { id: "nocontext", label: "Did not use context" },
      { id: "poorformat", label: "Poorly formatted" }
    ]
  }
};
function Chatbot() {
  return (
    <>
    <div className="vf-body vf-stack">
      <nav className="vf-breadcrumbs" aria-label="Breadcrumb">
        <ul className="vf-breadcrumbs__list | vf-list vf-list--inline">
          <li className="vf-breadcrumbs__item">
            <a href="/" className="vf-breadcrumbs__link">Home</a>
          </li>
          <li className="vf-breadcrumbs__item" aria-current="location">
            AI Assistant
          </li>
        </ul>
      </nav>
      <VFChatbot config={chatbotConfig} />
    </div>
    </>
  );
}

export default Chatbot;