using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EStockMarketAPI.Models
{
    public partial class EStockMarketDBContext : DbContext
    {
        public EStockMarketDBContext()
        {
        }

        public EStockMarketDBContext(DbContextOptions<EStockMarketDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblCompany> TblCompanies { get; set; }
        public virtual DbSet<TblCustomer> TblCustomers { get; set; }
        public virtual DbSet<TblLogin> TblLogins { get; set; }
        public virtual DbSet<TblStock> TblStocks { get; set; }
        public virtual DbSet<TblUser> TblUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<TblCompany>(entity =>
            {
                entity.ToTable("TblCompany");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CompanyCeo)
                    .HasMaxLength(100)
                    .HasColumnName("CompanyCEO");

                entity.Property(e => e.CompanyCode).HasMaxLength(50);

                entity.Property(e => e.CompanyEmail).HasMaxLength(100);

                entity.Property(e => e.CompanyName).HasMaxLength(200);

                entity.Property(e => e.CompanyPassword).HasMaxLength(100);

                entity.Property(e => e.CompanyWebsite).HasMaxLength(200);

                entity.Property(e => e.StockExchange).HasMaxLength(200);
            });

            modelBuilder.Entity<TblCustomer>(entity =>
            {
                entity.ToTable("TblCustomer");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.AccountDemat)
                    .HasMaxLength(50)
                    .HasColumnName("AccountDEMAT");

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.UserEmail).HasMaxLength(100);
            });

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.ToTable("TblLogin");

                entity.Property(e => e.Password).HasMaxLength(100);

                entity.Property(e => e.UserName).HasMaxLength(100);
            });

            modelBuilder.Entity<TblStock>(entity =>
            {
                entity.ToTable("TblStock");

                entity.Property(e => e.CompanyCode).HasMaxLength(100);

                entity.Property(e => e.CompanyName).HasMaxLength(200);

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.StartDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<TblUser>(entity =>
            {
                entity.ToTable("TblUser");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CompanyName).HasMaxLength(100);

                entity.Property(e => e.DateandTime).HasColumnType("datetime");

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.UserEmail).HasMaxLength(200);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
