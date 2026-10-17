export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  outcome: string;
  period: string;
  role: string;
  challenge: string;
  approach: string[];
  results: string[];
  stack: string[];
};

export const projects: Project[] = [
  { slug: "ai-spend-governance", number: "01", title: "AI spend governance", eyebrow: "Operating systems for new workloads", summary: "In a 30-day engagement, I cut a client's AI spend from $20M to $12M annualized through governance and model prioritization.", outcome: "$20M to $12M annualized", period: "30-day engagement", role: "Technology leadership", challenge: "AI adoption was moving faster than the controls around it, and the bill showed it.", approach: ["Put governance around AI spend, so usage decisions got made on purpose instead of by default.", "Prioritized models by the value they delivered, so the budget went to the workloads that earned it.", "Moved fast enough that about $2M of the savings landed within the 30 days."], results: ["AI spend cut from $20M to $12M annualized in a 30-day engagement", "That cut is $8M+ in annualized savings from the same work", "About $2M of it realized within the 30 days"], stack: ["Governance", "Model prioritization", "Cost control"] },
  { slug: "cloud-modernization", number: "02", title: "Maintenance windows: 3 weekends to 1 day", eyebrow: "Reliability through repeatable infrastructure", summary: "At ASRC Federal, I cut maintenance and patching windows from three weekends (often running over) to one day through automation and Azure standardization.", outcome: "3 weekends to 1 day", period: "ASRC Federal, 2021 to 2026", role: "Platform Engineering Lead, then Engineering Manager", challenge: "Maintenance and patching windows took three weekends, and they often ran over.", approach: ["Standardized the environment on Azure, so systems could be changed the same way every time.", "Made Ansible the automation standard.", "Rebuilt 112 Linux servers with zero downtime."], results: ["Maintenance and patching windows cut from three weekends to one day", "112 Linux servers rebuilt with zero downtime", "Ansible adopted as the automation standard"], stack: ["Azure", "Ansible", "Automation"] },
  { slug: "incident-command", number: "03", title: "Incident command", eyebrow: "Turning cross-functional response into a system", summary: "At ASRC Federal, I cut time to restore 75% (60 to 15 minutes) on a program spanning 70+ sites.", outcome: "Time to restore cut 75%", period: "ASRC Federal, 2021 to 2026", role: "Engineering Manager, 12 direct reports", challenge: "Critical incidents crossed team lines, so fixing them took shared context and clear ownership as much as technical skill.", approach: ["Tightened the incident process across the 3 divisions.", "Improved alerting, so the team heard about problems sooner.", "Improved monitoring, so whoever picked up an incident started with data instead of guesses."], results: ["Cut time to restore 75% (60 to 15 minutes)", "Delivery visibility raised from 50% to 90%", "25+ engineers across 3 divisions, with 12 direct reports, on a program spanning 70+ sites"], stack: ["Incident command", "Operations", "Organizational design"] },
  { slug: "platform-stability", number: "04", title: "Platform scale-up", eyebrow: "Scale and security, together", summary: "At ASRC Federal, I scaled from 12 to 120 physical systems in 90 days while remediating 300+ security findings.", outcome: "12 to 120 systems in 90 days", period: "ASRC Federal, 90 days", role: "Platform engineering leadership", challenge: "The platform had to grow tenfold in a quarter while a backlog of security findings was still open.", approach: ["Built the new systems on the standard automation path instead of by hand.", "Worked the security findings alongside the build, not after it.", "Kept configuration consistent, so every new system started from a known baseline."], results: ["Scaled from 12 to 120 physical systems in 90 days", "300+ security findings remediated"], stack: ["Automation", "Security remediation", "Platform engineering"] }
];
