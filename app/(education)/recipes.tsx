import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowLeft,
  ChefHat,
  Clock,
  Users,
  Flame,
  Star,
} from 'lucide-react-native';
import { router } from 'expo-router';

const recipes = [
  {
    name: 'টিজেল গার্ডের তরকারি',
    category: 'মূল খাবার',
    difficulty: 'সহজ',
    time: '৩০ মিনিট',
    servings: '৪ জন',
    rating: 4.8,
    ingredients: [
      '১টি মাঝারি টিজেল গার্ড',
      '২টি আলু (কিউব করা)',
      '১টি পেঁয়াজ (কুচি)',
      '২ কোয়া রসুন',
      '১ চা চামচ আদা বাটা',
      '২ চা চামচ হলুদ গুঁড়া',
      '১ চা চামচ লবণ',
      '৩ টেবিল চামচ তেল',
    ],
    instructions: [
      'টিজেল গার্ড ছোট ছোট টুকরা করে কেটে নিন',
      'কড়াইয়ে তেল গরম করে পেঁয়াজ ভাজুন',
      'আদা-রসুন দিয়ে কিছুক্ষণ নেড়ে নিন',
      'আলু দিয়ে ৫ মিনিট ভাজুন',
      'টিজেল গার্ড, হলুদ ও লবণ দিয়ে ঢেকে রাখুন',
      '১৫-২০ মিনিট রান্না করুন',
      'গরম ভাতের সাথে পরিবেশন করুন',
    ],
    tips: 'টিজেল গার্ড ভাজার আগে হালকা নুনের পানিতে ১০ মিনিট ভিজিয়ে রাখুন।',
    color: '#F59E0B',
    bgColor: '#FEF3C7',
  },
  {
    name: 'টিজেল গার্ডের ভর্তা',
    category: 'সাইড ডিশ',
    difficulty: 'সহজ',
    time: '২৫ মিনিট',
    servings: '৩ জন',
    rating: 4.6,
    ingredients: [
      '১টি ছোট টিজেল গার্ড',
      '২টি কাঁচা মরিচ',
      '১/২ চা চামচ সরিষার তেল',
      '১/২ চা চামচ লবণ',
      '১ চিমটি চিনি',
      'কাঁচা পেঁয়াজ কুচি',
    ],
    instructions: [
      'টিজেল গার্ড সিদ্ধ করে নিন',
      'ভালোভাবে মেশে নিন',
      'কাঁচা মরিচ, লবণ দিয়ে মাখুন',
      'সরিষার তেল ও চিনি মিশান',
      'পেঁয়াজ কুচি দিয়ে সাজান',
      'গরম ভাতের সাথে খান',
    ],
    tips: 'সিদ্ধ করার সময় একটু লবণ দিলে স্বাদ ভালো হয়।',
    color: '#10B981',
    bgColor: '#D1FAE5',
  },
  {
    name: 'টিজেল গার্ড ভাজি',
    category: 'স্ন্যাকস',
    difficulty: 'মাঝারি',
    time: '২০ মিনিট',
    servings: '৪ জন',
    rating: 4.7,
    ingredients: [
      '১টি টিজেল গার্ড (টুকরা)',
      '১ কাপ বেসন',
      '১/২ চা চামচ হলুদ',
      '১ চা চামচ লবণ',
      '১/২ চা চামচ মরিচের গুঁড়া',
      'ভাজার তেল',
    ],
    instructions: [
      'বেসনের সাথে সব মশলা মিশিয়ে বাটার তৈরি করুন',
      'টিজেল গার্ডের টুকরা বাটারে ডুবিয়ে নিন',
      'গরম তেলে ভেজে নিন',
      'বাদামি হলে তুলে নিন',
      'গরম গরম পরিবেশন করুন',
    ],
    tips: 'বাটার ঘন হওয়া চাই যাতে ভালোভাবে লেগে থাকে।',
    color: '#EF4444',
    bgColor: '#FEE2E2',
  },
  {
    name: 'টিজেল গার্ডের স্যুপ',
    category: 'স্যুপ',
    difficulty: 'সহজ',
    time: '৪০ মিনিট',
    servings: '৪ জন',
    rating: 4.5,
    ingredients: [
      '১টি বড় টিজেল গার্ড',
      '২ কাপ দুধ',
      '১ টেবিল চামচ মাখন',
      '১ চা চামচ লবণ',
      '১/২ চা চামচ গোল মরিচের গুঁড়া',
      'পার্সলে (সাজানোর জন্য)',
    ],
    instructions: [
      'টিজেল গার্ড সিদ্ধ করে ব্লেন্ড করুন',
      'দুধের সাথে মিশিয়ে জ্বাল দিন',
      'মাখন ও মশলা দিয়ে নিন',
      '১০ মিনিট রান্না করুন',
      'পার্সলে দিয়ে সাজান',
    ],
    tips: 'ক্রিমি করতে চাইলে একটু ক্রিম যোগ করুন।',
    color: '#8B5CF6',
    bgColor: '#EDE9FE',
  },
  {
    name: 'টিজেল গার্ডের বিরিয়ানি',
    category: 'বিশেষ খাবার',
    difficulty: 'কঠিন',
    time: '৯০ মিনিট',
    servings: '৬ জন',
    rating: 4.9,
    ingredients: [
      '২ কাপ বাসমতি চাল',
      '১টি বড় টিজেল গার্ড',
      '৫০০ গ্রাম মাংস',
      '২টি পেঁয়াজ বিরিয়ানি কাটা',
      '১ কাপ দই',
      'বিরিয়ানির মশলা',
      'কেশর ও দুধ',
    ],
    instructions: [
      'চাল ভিজিয়ে রাখুন',
      'মাংস মেরিনেট করে রান্না করুন',
      'টিজেল গার্ড আলাদা ভেজে নিন',
      'চাল সিদ্ধ করুন',
      'স্তরে স্তরে সাজিয়ে দম রান্না করুন',
      'কেশর ও পেঁয়াজ দিয়ে সাজান',
    ],
    tips: 'দম রান্নার সময় আগুন খুব কম রাখুন।',
    color: '#06B6D4',
    bgColor: '#CFFAFE',
  },
];

const cookingTips = [
  {
    title: 'ফুলকপি পরিষ্কার করার নিয়ম',
    description:
      'লবণ পানিতে ১৫ মিনিট ভিজিয়ে রেখে ভালোভাবে ধুয়ে নিন। এতে কীট-পতঙ্গ এবং ময়লা পরিষ্কার হয়ে যাবে।',
    icon: '🧽',
  },
  {
    title: 'পুষ্টি বজায় রাখার উপায়',
    description:
      'কম তাপে এবং কম সময়ে রান্না করুন। স্টিমিং সবচেয়ে ভালো পদ্ধতি যা পুষ্টি উপাদান বজায় রাখে।',
    icon: '💪',
  },
  {
    title: 'সুগন্ধ বাড়ানোর কৌশল',
    description:
      'রান্নার শুরুতে গোটা গরম মশলা (এলাচি, দারচিনি) তেলে ছেড়ে দিন। এতে খাবারে চমৎকার গন্ধ আসবে।',
    icon: '🌶️',
  },
  {
    title: 'রঙ ধরে রাখার টিপস',
    description:
      'সিদ্ধ করার পানিতে এক চিমটি লবণ ও ২-৩ ফোঁটা লেবুর রস দিন। এতে ফুলকপির সাদা রঙ বজায় থাকবে।',
    icon: '🎨',
  },
];

const nutritionTips = [
  'কাঁচা সালাদ করে খেলে ভিটামিন সি সবচেয়ে বেশি পাবেন',
  'রান্নার পানি ফেলে দেবেন না, এতে পুষ্টি থাকে',
  'অন্যান্য সবজির সাথে মিশিয়ে খেলে পুষ্টি বেশি পাবেন',
  'অলিভ অয়েল ব্যবহার করলে স্বাস্থ্যের জন্য বেশি ভালো',
];

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#FFFFFF" strokeWidth={2} />
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Text style={styles.title}>রেসিপি ও রান্নার পদ্ধতি</Text>
          <Text style={styles.subtitle}>
            ফুলকপির সুস্বাদু ও পুষ্টিকর রেসিপি সমূহ
          </Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.recipesSection}>
          <Text style={styles.sectionTitle}>জনপ্রিয় রেসিপি</Text>
          <Text style={styles.sectionSubtitle}>
            ঘরেই তৈরি করুন মুখরোচক ফুলকপির খাবার:
          </Text>

          <View style={styles.recipesList}>
            {recipes.map((recipe, index) => (
              <View
                key={index}
                style={[styles.recipeCard, { backgroundColor: recipe.bgColor }]}
              >
                <View style={styles.recipeHeader}>
                  <View style={styles.recipeTitle}>
                    <Text style={[styles.recipeName, { color: recipe.color }]}>
                      {recipe.name}
                    </Text>
                    <Text
                      style={[styles.recipeCategory, { color: recipe.color }]}
                    >
                      {recipe.category}
                    </Text>
                  </View>

                  <View style={styles.ratingContainer}>
                    <Star
                      size={16}
                      color={recipe.color}
                      fill={recipe.color}
                      strokeWidth={2}
                    />
                    <Text style={[styles.rating, { color: recipe.color }]}>
                      {recipe.rating}
                    </Text>
                  </View>
                </View>

                <View style={styles.recipeDetails}>
                  <View style={styles.detailItem}>
                    <Clock size={16} color={recipe.color} strokeWidth={2} />
                    <Text style={[styles.detailText, { color: recipe.color }]}>
                      {recipe.time}
                    </Text>
                  </View>

                  <View style={styles.detailItem}>
                    <Users size={16} color={recipe.color} strokeWidth={2} />
                    <Text style={[styles.detailText, { color: recipe.color }]}>
                      {recipe.servings}
                    </Text>
                  </View>

                  <View style={styles.detailItem}>
                    <Flame size={16} color={recipe.color} strokeWidth={2} />
                    <Text style={[styles.detailText, { color: recipe.color }]}>
                      {recipe.difficulty}
                    </Text>
                  </View>
                </View>

                <View style={styles.ingredientsSection}>
                  <Text style={[styles.sectionHeader, { color: recipe.color }]}>
                    উপকরণ:
                  </Text>
                  <View style={styles.ingredientsList}>
                    {recipe.ingredients.map((ingredient, idx) => (
                      <Text
                        key={idx}
                        style={[styles.ingredientText, { color: recipe.color }]}
                      >
                        • {ingredient}
                      </Text>
                    ))}
                  </View>
                </View>

                <View style={styles.instructionsSection}>
                  <Text style={[styles.sectionHeader, { color: recipe.color }]}>
                    পদ্ধতি:
                  </Text>
                  <View style={styles.instructionsList}>
                    {recipe.instructions.map((instruction, idx) => (
                      <Text
                        key={idx}
                        style={[
                          styles.instructionText,
                          { color: recipe.color },
                        ]}
                      >
                        {idx + 1}. {instruction}
                      </Text>
                    ))}
                  </View>
                </View>

                {recipe.tips && (
                  <View style={styles.tipsSection}>
                    <Text style={[styles.tipsHeader, { color: recipe.color }]}>
                      টিপস:
                    </Text>
                    <Text style={[styles.tipsText, { color: recipe.color }]}>
                      {recipe.tips}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.cookingTipsSection}>
          <Text style={styles.sectionTitle}>রান্নার গুরুত্বপূর্ণ টিপস</Text>
          <Text style={styles.sectionSubtitle}>
            ফুলকপি রান্নার জন্য কিছু দরকারি পরামর্শ:
          </Text>

          <View style={styles.tipsList}>
            {cookingTips.map((tip, index) => (
              <View key={index} style={styles.tipCard}>
                <View style={styles.tipIcon}>
                  <Text style={styles.tipEmoji}>{tip.icon}</Text>
                </View>

                <View style={styles.tipContent}>
                  <Text style={styles.tipTitle}>{tip.title}</Text>
                  <Text style={styles.tipDescription}>{tip.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.nutritionSection}>
          <Text style={styles.sectionTitle}>পুষ্টি বজায় রাখার উপায়</Text>
          <View style={styles.nutritionCard}>
            {nutritionTips.map((tip, index) => (
              <View key={index} style={styles.nutritionTip}>
                <View style={styles.nutritionBullet} />
                <Text style={styles.nutritionText}>{tip}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.safetySection}>
          <Text style={styles.safetyTitle}>খাদ্য নিরাপত্তা</Text>

          <View style={styles.safetyCard}>
            <Text style={styles.safetyHeader}>রান্নার আগে:</Text>
            <Text style={styles.safetyText}>
              • ফুলকপি ভালোভাবে ধুয়ে নিন{'\n'}• পচা বা দাগযুক্ত অংশ ফেলে দিন
              {'\n'}• রান্নার পাত্র পরিষ্কার রাখুন{'\n'}• হাত ভালোভাবে ধুয়ে নিন
            </Text>
          </View>

          <View style={styles.safetyCard}>
            <Text style={styles.safetyHeader}>রান্নার সময়:</Text>
            <Text style={styles.safetyText}>
              • উপযুক্ত তাপমাত্রায় রান্না করুন{'\n'}• কাঁচা রেখে দেবেন না{'\n'}
              • বেশিক্ষণ রান্না করবেন না{'\n'}• পরিষ্কার পানি ব্যবহার করুন
            </Text>
          </View>

          <View style={styles.safetyCard}>
            <Text style={styles.safetyHeader}>পরিবেশনের সময়:</Text>
            <Text style={styles.safetyText}>
              • গরম অবস্থায় পরিবেশন করুন{'\n'}• বেশিক্ষণ খোলা রেখে দেবেন না
              {'\n'}• পরিষ্কার পাত্রে রাখুন{'\n'}• ২ ঘন্টার বেশি ঘরের
              তাপমাত্রায় রাখবেন না
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            নতুন রেসিপি পরীক্ষা করার সময় পরিমাণ ও সময় অনুযায়ী করুন
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#7C2D12',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
  },
  content: {
    flex: 1,
  },
  recipesSection: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#111827',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 24,
  },
  recipesList: {
    gap: 24,
  },
  recipeCard: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  recipeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  recipeTitle: {
    flex: 1,
  },
  recipeName: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    marginBottom: 4,
  },
  recipeCategory: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    opacity: 0.8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  rating: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  recipeDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  ingredientsSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 12,
  },
  ingredientsList: {
    gap: 4,
  },
  ingredientText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  instructionsSection: {
    marginBottom: 16,
  },
  instructionsList: {
    gap: 8,
  },
  instructionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  tipsSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 16,
    borderRadius: 12,
  },
  tipsHeader: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginBottom: 8,
  },
  tipsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  cookingTipsSection: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  tipsList: {
    gap: 16,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
  },
  tipIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tipEmoji: {
    fontSize: 24,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#111827',
    marginBottom: 8,
  },
  tipDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  nutritionSection: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  nutritionCard: {
    backgroundColor: '#ECFDF5',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  nutritionTip: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  nutritionBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
    marginTop: 8,
    marginRight: 12,
  },
  nutritionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#065F46',
    lineHeight: 20,
    flex: 1,
  },
  safetySection: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  safetyTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
  },
  safetyCard: {
    backgroundColor: '#FEF2F2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
  },
  safetyHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#991B1B',
    marginBottom: 12,
  },
  safetyText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#991B1B',
    lineHeight: 20,
  },
  footer: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});
