import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { 
  AVATARS, 
  DEFAULT_AVATAR_ID, 
  VISITOR_AVATAR_STORAGE_KEY,
  getAvatarById, 
  getStoredVisitorAvatar, 
  setStoredVisitorAvatar 
} from '../data/avatars';
import { AvatarPickerModal } from '../components/profile/AvatarPickerModal';

describe('Avatar Collection & Utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('contains exactly 20 unique avatars in the catalog', () => {
    expect(AVATARS).toHaveLength(20);

    const ids = AVATARS.map((a) => a.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(20);
  });

  it('ensures each avatar has valid metadata, local image path, and accent colors', () => {
    AVATARS.forEach((avatar) => {
      expect(avatar.id).toBeTruthy();
      expect(avatar.name).toBeTruthy();
      expect(avatar.englishName).toBeTruthy();
      expect(avatar.description).toBeTruthy();
      expect(avatar.image).toMatch(/^\/avatars\/[a-z0-9-]+\.jpg$/);
      expect(avatar.accentColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(avatar.badge).toBeTruthy();
    });
  });

  it('correctly resolves avatar by ID and falls back to default avatar for unknown ID', () => {
    const defaultAvatar = getAvatarById(DEFAULT_AVATAR_ID);
    expect(defaultAvatar.id).toBe(DEFAULT_AVATAR_ID);
    expect(defaultAvatar.name).toBe('Milo o Gato');

    const foxAvatar = getAvatarById('fox-headphones');
    expect(foxAvatar.id).toBe('fox-headphones');
    expect(foxAvatar.name).toBe('Rusty a Raposa');

    // Unknown ID fallback
    const fallbackAvatar = getAvatarById('non-existent-animal');
    expect(fallbackAvatar.id).toBe(DEFAULT_AVATAR_ID);
  });

  it('persists and retrieves visitor avatar selection in localStorage', () => {
    expect(getStoredVisitorAvatar()).toBe(DEFAULT_AVATAR_ID);

    setStoredVisitorAvatar('owl-glasses');
    expect(getStoredVisitorAvatar()).toBe('owl-glasses');

    expect(localStorage.getItem(VISITOR_AVATAR_STORAGE_KEY)).toBe('owl-glasses');
  });
});

describe('AvatarPickerModal Component', () => {
  it('renders all 20 avatars in the selection gallery when open', () => {
    const handleClose = vi.fn();
    const handleConfirm = vi.fn();

    render(
      <AvatarPickerModal
        isOpen={true}
        currentAvatarId="cat-beanie"
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    );

    // Modal title and count
    expect(screen.getByRole('heading', { name: /Escolha seu Avatar/i })).toBeInTheDocument();
    expect(screen.getByText(/20 personagens ilustrados/i)).toBeInTheDocument();

    // 20 avatar options in the grid
    const avatarButtons = screen.getAllByRole('button', { name: /Selecionar /i });
    expect(avatarButtons).toHaveLength(20);
  });

  it('allows selecting an avatar and confirming the choice', async () => {
    const handleClose = vi.fn();
    const handleConfirm = vi.fn();

    render(
      <AvatarPickerModal
        isOpen={true}
        currentAvatarId="cat-beanie"
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    );

    // Select Rusty the Fox
    const foxButton = screen.getByRole('button', { name: /Selecionar Rusty a Raposa/i });
    fireEvent.click(foxButton);

    // Click confirm button
    const confirmButton = screen.getByRole('button', { name: /Confirmar Escolha/i });
    fireEvent.click(confirmButton);

    expect(handleConfirm).toHaveBeenCalledWith('fox-headphones');
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  it('does not render content when isOpen is false', () => {
    const handleClose = vi.fn();
    const handleConfirm = vi.fn();

    const { container } = render(
      <AvatarPickerModal
        isOpen={false}
        currentAvatarId="cat-beanie"
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
