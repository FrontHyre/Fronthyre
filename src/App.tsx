import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import BuildathonPage from '@/pages/BuildathonPage';
import FronthyrePage from '@/pages/FronthyrePage';
import EarlyAccessPage from '@/pages/EarlyAccessPage';
import AboutPage from '@/pages/AboutPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import CookiePolicyPage from '@/pages/CookiePolicyPage';
import PrivacyRequestsPage from '@/pages/PrivacyRequestsPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<BuildathonPage />} />
          <Route path="/buildathon" element={<BuildathonPage />} />
          <Route path="/fronthyre" element={<FronthyrePage />} />
          <Route path="/early-access" element={<EarlyAccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/privacy-requests" element={<PrivacyRequestsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<BuildathonPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
