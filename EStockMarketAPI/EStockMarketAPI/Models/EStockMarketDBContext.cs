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
        public virtual DbSet<TblUser> TblUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-ORMR336;Initial Catalog=EStockMarketDB;Integrated Security=True");
            }
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

                entity.Property(e => e.CompanyLogo).HasMaxLength(100);

                entity.Property(e => e.CompanyName).HasMaxLength(200);

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

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Password).HasMaxLength(100);

                entity.Property(e => e.UserName).HasMaxLength(100);
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
