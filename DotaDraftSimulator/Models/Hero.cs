using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DotaDraftSimulator.Models
{
    public class Hero
    {
        public enum MainAttribute
        {
            Strength,
            Agility,
            Intelligence
        }

        public enum AttackType
        {
            Melee,
            Ranged
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public MainAttribute Attribute { get; set; }
        public AttackType Attack { get; set; }
        public int CarryFactor { get; set; }
        public int MidlaneFactor { get; set; }
        public int OfflaneFactor { get; set; }
        public int SupportFactor{ get; set; }

        public Hero()
        {
        }

        public Hero(string name, MainAttribute attribute, AttackType attack, int carryFactor, int midlaneFactor, int offlaneFactor, int supportFactor)
        {
            Name = name;
            Attribute = attribute;
            Attack = attack;
            CarryFactor = carryFactor;
            MidlaneFactor = midlaneFactor;
            OfflaneFactor = offlaneFactor;
            SupportFactor = supportFactor;
        }
    }
}