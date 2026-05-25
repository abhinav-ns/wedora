# Planning Architecture

## ACTIVE

The active planning route is the compact composition in `app/main/planning/page.tsx`.
It currently owns the runtime planning screen through:

- `layout/PlanningShell.tsx`
- `hero/WeddingOverview.tsx`
- `journey/PlanningJourney.tsx`
- `timeline/TimelinePreview.tsx`
- `snapshot/PlanningSnapshot.tsx`
- `focus/TodaysFocus.tsx`

## FUTURE/STAGED

The richer operational planning system is intentionally preserved as staged
architecture. It is not wired into the active route yet.

Future/staged modules include:

- `sections/PlanningProgress.tsx`
- `sections/PlanningTasks.tsx`
- `sections/PlanningTimeline.tsx`
- `widgets/FinalReviewEntry.tsx`
- `details/VendorDetailSheet.tsx`
- `cards/*`
- `store/planningStore.ts`

Keep active and staged planning ownership separate until the richer system is
intentionally promoted into the route composition.
