import { test, expect } from '@playwright/test';

test('homepage has correct categories and styles', async ({ page }) => {
  await page.goto('/');

  // Verify Header
  const logo = page.getByRole('heading', { name: 'FreshCut' });
  await expect(logo).toBeVisible();
  await expect(logo).toHaveClass(/text-olive-500/);

  // Verify Popular Combos
  await expect(page.getByRole('heading', { name: 'Popular Combos' })).toBeVisible();
  // Check for a specific combo product from the data
  await expect(page.getByText('Daily Cooking Combo').first()).toBeVisible();

  // Verify Categories & Products Header
  await expect(page.getByRole('heading', { name: 'Categories & Products' })).toBeVisible();

  // Verify Sub-sections
  const sections = ['Best Sellers', 'Time Savers', 'Daily Essentials', 'Ready-to-Cook', 'Meal Packs', 'Combos'];
  for (const section of sections) {
    await expect(page.getByRole('heading', { name: section, level: 4 })).toBeVisible();
  }

  // Verify a product in Best Sellers
  await expect(page.getByText('Chopped Onion').first()).toBeVisible();
  
  // Verify CTA Section Color
  const ctaSection = page.locator('section').filter({ hasText: 'Make Cooking Faster & Healthier' });
  await expect(ctaSection).toHaveClass(/bg-olive-500/);

  // Verify Bottom Nav active item color
  const homeNav = page.getByRole('button', { name: 'HOME' });
  await expect(homeNav).toHaveClass(/text-fresh-500/);
});
