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
                new Hero("Brewmaster",Hero.MainAttribute.Strength,Hero.AttackType.Melee,2,4,5,1),
                new Hero("Io",Hero.MainAttribute.Strength,Hero.AttackType.Ranged,1,2,1,5),
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
