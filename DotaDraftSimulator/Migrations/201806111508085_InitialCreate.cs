namespace DotaDraftSimulator.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Heroes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Attribute = c.Int(nullable: false),
                        Attack = c.Int(nullable: false),
                        CarryFactor = c.Int(nullable: false),
                        MidlaneFactor = c.Int(nullable: false),
                        OfflaneFactor = c.Int(nullable: false),
                        SupportFactor = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Heroes");
        }
    }
}
