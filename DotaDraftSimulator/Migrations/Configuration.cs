using System.Collections.Generic;
using DotaDraftSimulator.Models;

namespace DotaDraftSimulator.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DotaDraftSimulator.Models.HeroDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DotaDraftSimulator.Models.HeroDb context)
        {
            context.Heroes.AddOrUpdate(x => x.Name, new Hero[] { 
            
                new Hero("Abaddon",Hero.MainAttribute.Strength,Hero.AttackType.Melee,3,1,5,3),
                new Hero("Alchemist",Hero.MainAttribute.Strength,Hero.AttackType.Melee,5,5,1,1),
                new Hero("Axe",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,2,5,1), 
                new Hero("Beastmaster",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,3,5,1),
                new Hero("Brewmaster",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,4,5,1),
                new Hero("Bristleback",Hero.MainAttribute.Strength,Hero.AttackType.Melee,3,4,5,1),
                new Hero("Centaur Warrunner",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,1,5,1),
                new Hero("Chaos Knight",Hero.MainAttribute.Strength,Hero.AttackType.Melee,5,1,1,2),
                new Hero("Clockwerk",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,1,5,4),
                new Hero("Doom",Hero.MainAttribute.Strength,Hero.AttackType.Melee,3,1,5,3),
                new Hero("Dragon Knight",Hero.MainAttribute.Strength,Hero.AttackType.Melee,4,5,4,1),
                new Hero("Earth Spirit",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,2,2,5),
                new Hero("Earthshaker",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,2,5,5),
                new Hero("Elder Titan",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,1,4,5),
                new Hero("Huskar",Hero.MainAttribute.Strength,Hero.AttackType.Ranged,5,4,1,1),
                new Hero("Io",Hero.MainAttribute.Strength,Hero.AttackType.Ranged,1,2,1,5),
                new Hero("Kunkka",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,5,3,4),
                new Hero("Legion Commander",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,4,5,1),
                new Hero("Lifestealer",Hero.MainAttribute.Strength,Hero.AttackType.Melee,5,1,2,1),
                new Hero("Lycan",Hero.MainAttribute.Strength,Hero.AttackType.Melee,5,4,4,1),
                new Hero("Magnus",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,4,5,1),
                new Hero("Night Stalker",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,2,4,4),
                new Hero("Omniknight",Hero.MainAttribute.Strength,Hero.AttackType.Melee,3,2,5,1),
                new Hero("Phoenix",Hero.MainAttribute.Strength,Hero.AttackType.Ranged,1,1,4,4),
                new Hero("Pudge",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,3,3,4),
                new Hero("Sand King",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,2,5,5),
                new Hero("Slardar",Hero.MainAttribute.Strength,Hero.AttackType.Melee,3,1,4,4),
                new Hero("Spirit Breaker",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,1,4,5),
                new Hero("Sven",Hero.MainAttribute.Strength,Hero.AttackType.Melee,5,1,1,2),
                new Hero("Tidehunter",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,1,5,2),
                new Hero("Timbersaw",Hero.MainAttribute.Strength,Hero.AttackType.Melee,3,4,5,1),
                new Hero("Tiny",Hero.MainAttribute.Strength,Hero.AttackType.Melee,4,4,4,2),
                new Hero("Treant Protector",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,1,2,5),
                new Hero("Tusk",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,1,2,5),
                new Hero("Underlord",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,1,5,1),
                new Hero("Undying",Hero.MainAttribute.Strength,Hero.AttackType.Melee,1,1,3,5),
                new Hero("Wraith King",Hero.MainAttribute.Strength,Hero.AttackType.Melee,5,1,1,2), 
                new Hero("Bloodseeker",Hero.MainAttribute.Agility,Hero.AttackType.Melee,4,4,4,1),
                new Hero("Drow Ranger",Hero.MainAttribute.Agility,Hero.AttackType.Ranged,5,3,1,1),
                new Hero("Morphling",Hero.MainAttribute.Agility,Hero.AttackType.Ranged,5,4,2,1),
                new Hero("Crystal Maiden", Hero.MainAttribute.Intelligence,Hero.AttackType.Ranged,1,1,1,5),
                new Hero("Dark Seer",Hero.MainAttribute.Intelligence,Hero.AttackType.Melee,1,1,5,1),
                new Hero("Winter Wyvern",Hero.MainAttribute.Intelligence,Hero.AttackType.Ranged,2,1,2,5) 
            });
        }
    }
}
