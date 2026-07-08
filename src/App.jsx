import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import VFBadge from './components/VFBadge';
import VFBackToTop from './components/VFBackToTop';
import VFButton from './components/VFButton';
import VFCard from './components/VFCard';
import VFBlockquote from './components/VFBlockquote';
import VFHero from './components/VFHero';
import VFBanner from './components/VFBanner';
import VFTabs from './components/VFTabs';
import SearchResults from './components/SearchResults';
// import VFChatbot from './vf-chatbot-components/vf-chatbot/vf-chatbot.react';
import VFChatbot from '@visual-framework/vf-chatbot/vf-chatbot.react';

// Create a wrapper component to handle route changes
function RouteChangeHandler({ children }) {
  const location = useLocation();

  useEffect(() => {
    // This runs on every route change
    const vfMegaMenuContent = document.querySelector('.vf-mega-menu__content');
    if (vfMegaMenuContent) {
      vfMegaMenuContent.setAttribute('aria-hidden', 'true');
      // Remove expanded state from any active menu items
      const expandedLinks = document.querySelectorAll('.vf-mega-menu__link.is-expanded');
      expandedLinks.forEach(link => link.click());
    }
  }, [location]); // Dependency on location triggers this effect on route changes

  return children;
}

function App() {
  // Example modal config (customize as needed)
  const chatbotConfig = {
    type: "modal",
    title: "AI Assistant",
    welcome_logo: true,
    welcome_message: "Welcome! I'm here to help",
    welcome_logo_alt: "AI Assistant",
    welcome_suggestions_title: "Try asking me:",
    input_placeholder: "Ask me ...",
    welcome_max_suggestions: 4,
    disclaimer: 'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
    footnote: 'Review AI generated content for accuracy. <a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
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
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer your-token"
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
        multiSelect: false,
        showSearch: true,
        showSearchThreshold: 5,
        routes: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot-selector-llms.json`,
        placeholder: "Search",
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
      on_conversation_end: "handleConversationEnd",
      on_fab_click: "handleFabClick",
      on_dialog_confirm: "handleDialogConfirm",
      on_dialog_cancel: "handleDialogCancel",
      on_minimize: "handleMinimize"
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
    },
    "enable_session_persistence": true,
    "restore_minimized_state": true
  };

  return (
    <Router basename="/vf-react">
      <RouteChangeHandler>
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><VFChatbot config={chatbotConfig} /></>} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/components/vf-badge" element={<VFBadge />} />
          <Route path="/components/vf-back-to-top" element={<VFBackToTop />} />
          <Route path="/components/vf-button" element={<VFButton />} />
          <Route path="/components/vf-card" element={<VFCard />} />
          <Route path="/components/vf-blockquote" element={<VFBlockquote />} />
          <Route path="/components/vf-hero" element={<VFHero />} />
          <Route path="/components/vf-banner" element={<VFBanner />} />
          <Route path="/components/vf-tabs" element={<VFTabs />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </RouteChangeHandler>
    </Router>
  );
}

export default App;
