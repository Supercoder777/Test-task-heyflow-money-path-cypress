import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://heyflow.app/');

  await page.getByTestId('uc-accept-all-button').click();

  await page.getByRole('link', { name: 'Get started – it\'s free!' }).click();
  await expect(page).toHaveURL('https://go.heyflow.app/signup?ref=hero');

  await page.getByPlaceholder('Company name').click();

  await page.getByPlaceholder('Company name').fill('QA ENGINEER');

  await page.getByPlaceholder('Work email').click();

  await page.getByPlaceholder('Work email').fill('samuel4luve@yahoo.com');

  await page.getByPlaceholder('Password 8+ characters').click();

  await page.getByPlaceholder('Password 8+ characters').fill('zAddi623_');

  await page.getByText('checkI agree to Heyflow\'s Terms, Privacy Policy and DPA.').click();

  await page.getByLabel('checkI would like to receive Heyflow\'s newsletter.').check();

  await page.getByRole('button', { name: 'Create account' }).click();

  await page.getByPlaceholder('Work email').click({
    clickCount: 3
  });

  await page.getByPlaceholder('Work email').fill('gakibo9434@hempyl.com');

  await page.getByRole('button', { name: 'Create account' }).click();

  await page.goto('https://go.heyflow.app/create');

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('label:has-text("2🇺🇸 English") span').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').getByLabel('Your Name').fill('Testing tester');

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('#button-block-id-79617256 a:has-text("Continue")').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('div:nth-child(10) > label > .scale-option-content').first().click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('a:has-text("Continue ionicons-v5-a")').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').getByText('responsive-designTo integrate my flow on my website').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').getByText('performance-phone-increaseTo retarget visitors of my flow').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').getByText('surveillance-targetTo track conversions best').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('#button-block-button-29065a7d a:has-text("Next ionicons-v5-a")').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('#multiple-choice-block-mc-4a602fe8 > div > .multiple-choice > .multiple-choice-inner > div:nth-child(3) > .multiple-choice-option > label > .option-content').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('#button-block-button-e0945de5 a:has-text("Continue")').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('#multiple-choice-block-mc-7fb94120').getByText('social-media-googleGoogle').click();

  await page.frameLocator('#hey__iframe-niro-onboarding >> nth=1').locator('a:has-text("Get started")').click();

  await page.getByRole('button', { name: 'Send activation email again' }).click();

  await page.getByRole('button', { name: 'OK' }).click();

  await page.goto('https://go.heyflow.app/create');

  await page.goto('https://go.heyflow.app/create/intro');

});