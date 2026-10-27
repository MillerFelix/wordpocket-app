import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Calendar, 
  CloudCheck, 
  LogOut, 
  HelpCircle, 
  Sparkles, 
  Headphones, 
  Mic, 
  BookOpen, 
  PenTool, 
  ArrowRight,
  TrendingUp,
  Edit2,
  Check,
  X,
  Camera,
  BookMarked
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getUserSkillProgress } from '../../services/progressService';
import { SkillProgress } from '../../types/progress';
import { PracticeSkillId, TabType } from '../../types';
import { LoadingIndicator } from '../shared/LoadingIndicator';
import { getAvatarById } from '../../data/avatars';
import { AvatarPickerModal } from './AvatarPickerModal';

interface UserProfileViewProps {
  onNavigate: (tab: TabType) => void;
}

const SKILL_ICONS: Record<PracticeSkillId, React.ElementType> = {
  listening: Headphones,
  speaking: Mic,
  reading: BookOpen,
  writing: PenTool
};

const SKILL_COLORS: Record<PracticeSkillId, { bg: string; text: string; badge: string; border: string }> = {
  listening: { bg: 'bg-[#E1ECFC]', text: 'text-[#176BFF]', badge: 'Escuta', border: 'border-[#BED7FA]' },
  speaking: { bg: 'bg-[#EDE8FD]', text: 'text-[#6545F5]', badge: 'Fala', border: 'border-[#D9CEFC]' },
  reading: { bg: 'bg-[#DCF8F1]', text: 'text-[#0A9B80]', badge: 'Leitura', border: 'border-[#B6F5E8]' },
  writing: { bg: 'bg-[#FFEAE1]', text: 'text-[#E04D1B]', badge: 'Escrita', border: 'border-[#FFD2C2]' }
};

export const UserProfileView: React.FC<UserProfileViewProps> = ({ onNavigate }) => {
  const { user, profile, signOut, openOnboarding, openAuthModal, isVisitor, updateProfileData, avatarId, updateAvatar } = useAuth();
  const [skillProgress, setSkillProgress] = useState<Record<PracticeSkillId, SkillProgress> | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [savingName, setSavingName] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const currentAvatar = getAvatarById(avatarId);

  useEffect(() => {
    if (user) {
      setLoadingProgress(true);
      getUserSkillProgress(user.uid)
        .then((data) => setSkillProgress(data))
        .catch(() => {})
        .finally(() => setLoadingProgress(false));
    }
  }, [user]);

  const startEditingName = () => {
    setEditedName(profile?.displayName || user?.displayName || '');
    setIsEditingName(true);
  };

  const cancelEditingName = () => {
    setIsEditingName(false);
    setEditedName('');
  };

  const saveEditingName = async () => {
    const clean = editedName.trim();
    if (!clean) return;
    setSavingName(true);
    try {
      await updateProfileData({ displayName: clean });
      setIsEditingName(false);
    } catch (err) {
      console.error('Erro ao salvar nome:', err);
    } finally {
      setSavingName(false);
    }
  };

  if (isVisitor || !user) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto py-8 animate-in fade-in duration-300 text-center">
        {/* Avatar interativo no modo visitante */}
        <div className="relative inline-block mx-auto">
          <button
            type="button"
            onClick={() => setIsAvatarModalOpen(true)}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl p-1 bg-gradient-brand shadow-lg hover:scale-105 transition cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[#176BFF]/30"
            title="Clique para escolher seu avatar"
            aria-label={`Avatar atual: ${currentAvatar.name}. Clique para trocar.`}
          >
            <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-100 ring-2 ring-white relative">
              <img
                src={currentAvatar.image}
                alt={currentAvatar.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-[#160F2E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-extrabold gap-0.5">
                <Camera className="w-4 h-4" />
                <span>Trocar</span>
              </div>
            </div>
            <span
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#176BFF] text-white ring-2 ring-white flex items-center justify-center shadow-xs"
              title="Trocar avatar"
            >
              <Camera className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E1ECFC] text-[#176BFF] text-xs font-bold border border-[#BED7FA]">
            <span>Avatar: {currentAvatar.name}</span>
          </div>
          <h1 className="text-2xl font-black text-[#160F2E]">
            Modo Visitante Ativo
          </h1>
          <p className="text-xs sm:text-sm text-[#52456F] max-w-md mx-auto">
            Você está navegando como visitante com o avatar <strong>{currentAvatar.name}</strong>. Crie uma conta gratuita para salvar seu histórico e personalizar seu perfil completo.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => setIsAvatarModalOpen(true)}
            className="inline-flex items-center gap-2 py-3 px-5 rounded-2xl bg-white hover:bg-slate-50 text-[#176BFF] font-bold text-sm border border-[#BED7FA] shadow-xs transition cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>Escolher outro Avatar</span>
          </button>
          <button
            type="button"
            onClick={() => openAuthModal('signup')}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-gradient-brand text-white font-extrabold text-sm shadow-colored-blue hover:opacity-95 transition cursor-pointer"
          >
            <span>Criar Conta ou Fazer Login</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <AvatarPickerModal
          isOpen={isAvatarModalOpen}
          currentAvatarId={avatarId}
          onConfirm={async (newId) => {
            await updateAvatar(newId);
          }}
          onClose={() => setIsAvatarModalOpen(false)}
        />
      </div>
    );
  }

  const formattedJoinDate = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric'
      })
    : 'Recentemente';

  const handleLogout = async () => {
    await signOut();
    onNavigate('home');
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      {/* Cabeçalho do card de perfil */}
      <div className="relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-xl p-6 sm:p-8 border border-white/90 shadow-soft-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 z-10 relative">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Avatar do usuário com ação de troca */}
            <div className="relative group shrink-0">
              <button
                type="button"
                onClick={() => setIsAvatarModalOpen(true)}
                className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-3xl p-1 bg-gradient-brand shadow-lg hover:shadow-xl hover:scale-102 transition-all cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[#176BFF]/30"
                title="Clique para trocar seu avatar"
                aria-label={`Avatar atual: ${currentAvatar.name}. Clique para trocar.`}
              >
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-100 ring-2 ring-white relative">
                  <img
                    src={currentAvatar.image}
                    alt={currentAvatar.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {/* Camada de sobreposição no hover */}
                  <div className="absolute inset-0 bg-[#160F2E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-extrabold gap-0.5">
                    <Camera className="w-4 h-4" />
                    <span>Trocar</span>
                  </div>
                </div>
                <span
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#176BFF] text-white ring-2 ring-white flex items-center justify-center shadow-xs group-hover:bg-[#1253C7] transition"
                  title="Trocar avatar"
                >
                  <Camera className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Informações detalhadas do usuário */}
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {isEditingName ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    <input
                      type="text"
                      value={editedName}
                      disabled={savingName}
                      onChange={(e) => setEditedName(e.target.value)}
                      placeholder="Seu nome"
                      className="px-3 py-1 rounded-xl border border-slate-300 text-sm font-bold text-[#160F2E] focus:outline-none focus:ring-2 focus:ring-[#176BFF]/30"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEditingName();
                        if (e.key === 'Escape') cancelEditingName();
                      }}
                    />
                    <button
                      type="button"
                      disabled={savingName || !editedName.trim()}
                      onClick={saveEditingName}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-xs hover:opacity-95 transition cursor-pointer disabled:opacity-50"
                      title="Salvar nome"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{savingName ? 'Salvando...' : 'Salvar'}</span>
                    </button>
                    <button
                      type="button"
                      disabled={savingName}
                      onClick={cancelEditingName}
                      className="p-1 rounded-xl text-slate-400 hover:text-slate-600 transition cursor-pointer"
                      title="Cancelar"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <h1 className="text-xl sm:text-2xl font-black text-[#160F2E] tracking-tight truncate">
                      {profile?.displayName || user.displayName || 'Estudante Word Pocket'}
                    </h1>
                    <button
                      type="button"
                      onClick={startEditingName}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-[#176BFF] hover:bg-slate-100 transition cursor-pointer"
                      title="Editar nome"
                      aria-label="Editar nome do perfil"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E1ECFC] text-[#176BFF] text-[10px] font-bold border border-[#BED7FA]">
                      <CloudCheck className="w-3 h-3 text-[#176BFF]" />
                      <span>Sincronizado</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsAvatarModalOpen(true)}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#52456F] hover:text-[#176BFF] text-[10px] font-bold border border-slate-200 transition cursor-pointer"
                      title="Clique para trocar seu avatar"
                    >
                      <Camera className="w-3 h-3 text-[#176BFF]" />
                      <span>{currentAvatar.name}</span>
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3 text-xs text-[#52456F] font-medium flex-wrap">
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{user.email}</span>
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Membro desde {formattedJoinDate}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Botão de encerrar sessão */}
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-[#FDE8F1] hover:text-[#F52E91] text-[#52456F] font-bold text-xs transition border border-slate-200/60 self-start sm:self-auto cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Encerrar Sessão</span>
          </button>
        </div>
      </div>

      {/* Visão geral da evolução das 4 habilidades */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#176BFF]" />
            <h2 className="text-sm font-extrabold text-[#160F2E]">
              Evolução das 4 Habilidades
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('practice')}
            className="text-xs font-bold text-[#176BFF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Ir para Praticar</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {loadingProgress ? (
          <div className="py-12 flex items-center justify-center">
            <LoadingIndicator size="md" label="Carregando progresso consolidado..." />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(['listening', 'speaking', 'reading', 'writing'] as PracticeSkillId[]).map((skillId) => {
              const Icon = SKILL_ICONS[skillId];
              const colors = SKILL_COLORS[skillId];
              const prog = skillProgress?.[skillId];
              const completed = prog?.completedActivitiesCount || 0;
              const totalAttempts = prog?.totalAttempts || 0;
              const averageScore = totalAttempts > 0 ? Math.round((prog?.totalScore || 0) / totalAttempts) : 0;

              return (
                <div
                  key={skillId}
                  className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 border border-white/90 shadow-soft-card space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center font-bold`}>
                      <Icon className="w-4 h-4 stroke-[2.3]" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {colors.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-[#160F2E] capitalize">
                      {skillId}
                    </h3>
                    <p className="text-[11px] text-[#52456F] font-medium mt-0.5">
                      Nível: <strong className="capitalize text-[#160F2E]">{prog?.currentLevel || 'Fácil'}</strong>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-[#52456F] block">Concluídas</span>
                      <strong className="text-sm text-[#160F2E]">{completed}</strong>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-[#52456F] block">Aproveitamento</span>
                      <strong className="text-sm text-[#176BFF]">{averageScore > 0 ? `${averageScore}%` : '—'}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Ações da conta e atalho para o tutorial */}
      <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-soft-card space-y-4">
        <h2 className="text-sm font-extrabold text-[#160F2E]">
          Ações da Conta
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <button
            type="button"
            onClick={openOnboarding}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/70 hover:bg-white border border-white/80 shadow-2xs transition text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E1ECFC] text-[#176BFF] flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#160F2E] font-bold block">Tutorial de Boas-Vindas</strong>
                <span className="text-[#52456F]">Rever o guia de introdução do Word Pocket</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#176BFF] transition" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('favorites')}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/70 hover:bg-white border border-white/80 shadow-2xs transition text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#EDE8FD] text-[#6545F5] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#160F2E] font-bold block">Sua Coleção de Favoritos</strong>
                <span className="text-[#52456F]">Verbos e vocabulário salvos na sua conta</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#6545F5] transition" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('notes')}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/70 hover:bg-white border border-white/80 shadow-2xs transition text-left cursor-pointer group sm:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E1ECFC] text-[#176BFF] flex items-center justify-center">
                <BookMarked className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#160F2E] font-bold block">Caderno de Anotações</strong>
                <span className="text-[#52456F]">Seu espaço pessoal para registrar regras e vocabulário</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#176BFF] transition" />
          </button>
        </div>
      </div>

      <AvatarPickerModal
        isOpen={isAvatarModalOpen}
        currentAvatarId={avatarId}
        onConfirm={async (newId) => {
          await updateAvatar(newId);
        }}
        onClose={() => setIsAvatarModalOpen(false)}
      />
    </div>
  );
};
