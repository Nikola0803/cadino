# Rolabets — Online Casino & Sports Betting

## 1. Project Description
A dark, neon-styled online casino and sports betting lobby. Target audience: adult players looking for slots, original crash-style games, live casino tables and sports markets. Core value: instant access to a large game library, live win feeds, VIP/race promotions, and a fast bet slip experience.

## 2. Page Structure
- `/` — Home lobby (hero banners, recent wins, sports strip, game rails, live bets feed, providers)
- `/casino` — Casino game library with category filters
- `/sports` — Sports betting hub with sports categories, popular events and live bets

## 3. Core Features
- [x] Sidebar navigation with collapsible groups and live asset prices
- [x] Top bar with search overlay, login / registration modal
- [x] Hero banner carousel with autoplay dots and arrows
- [x] Recent Wins animated feed
- [x] Horizontal game rails with scroll arrows and favourite toggles
- [x] Live bets feed table
- [x] Providers strip and legal footer
- [ ] Real accounts, wallet and payments (requires backend + payment provider)
- [ ] Real game integrations

## 4. Data Model Design
Not required for this phase. Game / provider / bet data lives in `src/mocks` as static demo content.

## 5. Backend / Third-party Integration Plan
- Database: not connected — demo content only
- Payments: not connected
- Shopify: not needed
- Others: not needed

## 6. Development Phase Plan

### Phase 1: Lobby UI
- Goal: Deliver a complete, polished home lobby matching the reference layout.
- Deliverable: Sidebar, top bar, hero carousel, game rails, live feeds, providers, footer.

### Phase 2: Secondary pages
- Goal: Casino library with filters and a sports hub page.
- Deliverable: `/casino`, `/sports`.

### Phase 3: Accounts & payments
- Goal: Real player accounts, wallet and deposits.
- Deliverable: Backend connection, auth screens, payment integration.